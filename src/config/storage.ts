/**
 * Cloudflare R2 Storage Configuration
 * Cloudflare R2 provides S3-compatible, zero-egress fee object storage.
 * In production, connect this to your custom domain (e.g. cdn.aspirantatlas.org)
 * or your Cloudflare pub-*.r2.dev public bucket URL.
 */

export const R2_CONFIG = {
  // Public CDN URL (Custom domain or Cloudflare managed R2 domain)
  publicBaseUrl: (import.meta.env.VITE_R2_PUBLIC_URL as string) || 'https://cdn.aspirantatlas.org',
  bucketName: (import.meta.env.VITE_R2_BUCKET_NAME as string) || 'aspirant-atlas-vault',
  storageProvider: 'Cloudflare R2 (Zero Egress CDN)'
};

/**
 * Resolves the full URL for an asset stored in Cloudflare R2.
 * Falls back to an authoritative government/archive mirror if R2 is not connected locally.
 */
export function getR2AssetUrl(
  path: string,
  fallbackMirrorUrl?: string
): { url: string; isR2: boolean; providerLabel: string } {
  // If the developer configured an active R2 base URL
  if (import.meta.env.VITE_R2_PUBLIC_URL) {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return {
      url: `${import.meta.env.VITE_R2_PUBLIC_URL}/${cleanPath}`,
      isR2: true,
      providerLabel: 'Cloudflare R2 Direct CDN'
    };
  }

  // Fallback to official government mirror if R2 domain not yet wired in .env
  if (fallbackMirrorUrl) {
    return {
      url: fallbackMirrorUrl,
      isR2: false,
      providerLabel: 'Official Govt Mirror'
    };
  }

  // Default construct
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return {
    url: `${R2_CONFIG.publicBaseUrl}/${cleanPath}`,
    isR2: true,
    providerLabel: 'Cloudflare R2 Direct CDN'
  };
}
