#!/usr/bin/env node

/**
 * AspirantAtlas - Cloudflare R2 Asset Uploader
 * 
 * Usage:
 *   node scripts/upload-to-r2.mjs <file-or-dir> [r2-target-prefix]
 * 
 * Examples:
 *   node scripts/upload-to-r2.mjs ./gazettes/ap-act-2014.pdf gazettes/
 *   node scripts/upload-to-r2.mjs ./cheatsheets/ cheatsheets/
 */

import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import fs from 'fs';
import path from 'path';

const accountId = process.env.R2_ACCOUNT_ID;
const accessKeyId = process.env.R2_ACCESS_KEY_ID;
const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
const bucketName = process.env.VITE_R2_BUCKET_NAME || 'aspirant-atlas-vault';

if (!accountId || !accessKeyId || !secretAccessKey) {
  console.error('\x1b[31m%s\x1b[0m', 'Error: Missing Cloudflare R2 credentials in environment variables.');
  console.log(`
Please set the following environment variables:
  export R2_ACCOUNT_ID="your_cloudflare_account_id"
  export R2_ACCESS_KEY_ID="your_r2_access_key"
  export R2_SECRET_ACCESS_KEY="your_r2_secret_key"
  export VITE_R2_BUCKET_NAME="aspirant-atlas-vault"
`);
  process.exit(1);
}

const s3 = new S3Client({
  region: 'auto',
  endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

const targetPath = process.argv[2];
const targetPrefix = process.argv[3] || '';

if (!targetPath) {
  console.log('Usage: node scripts/upload-to-r2.mjs <file-or-folder> [target-prefix]');
  process.exit(1);
}

async function uploadFile(filePath, key) {
  const fileContent = fs.readFileSync(filePath);
  const ext = path.extname(filePath).toLowerCase();

  let contentType = 'application/octet-stream';
  if (ext === '.pdf') contentType = 'application/pdf';
  else if (ext === '.json') contentType = 'application/json';
  else if (ext === '.png') contentType = 'image/png';
  else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';

  console.log(`Uploading ${filePath} -> r2://${bucketName}/${key}...`);

  await s3.send(
    new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: fileContent,
      ContentType: contentType,
    })
  );

  console.log(`\x1b[32m✔ Successfully uploaded:\x1b[0m ${key}`);
}

async function main() {
  const stat = fs.statSync(targetPath);

  if (stat.isFile()) {
    const key = path.join(targetPrefix, path.basename(targetPath)).replace(/\\/g, '/');
    await uploadFile(targetPath, key);
  } else if (stat.isDirectory()) {
    const files = fs.readdirSync(targetPath);
    for (const file of files) {
      const fullPath = path.join(targetPath, file);
      if (fs.statSync(fullPath).isFile()) {
        const key = path.join(targetPrefix, file).replace(/\\/g, '/');
        await uploadFile(fullPath, key);
      }
    }
  }

  console.log('\x1b[32m%s\x1b[0m', '\nAll assets synchronized with Cloudflare R2 successfully!');
}

main().catch((err) => {
  console.error('\x1b[31mUpload failed:\x1b[0m', err.message);
  process.exit(1);
});
