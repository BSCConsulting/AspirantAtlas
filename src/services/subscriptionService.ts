/**
 * Commercial subscription management, pricing tier definitions, and order ledger service.
 */

export interface SubscriptionPlan {
  id: 'free' | 'sprint' | 'topper';
  name: string;
  tagline: string;
  priceInInr: number;
  originalPriceInInr?: number;
  durationDays: number;
  badge?: string;
  isPopular?: boolean;
  features: string[];
  limitations?: string[];
}

export interface OrderRecord {
  orderId: string;
  userId: string;
  userName: string;
  userEmail: string;
  userMobile?: string;
  planId: 'sprint' | 'topper';
  planName: string;
  amountInInr: number;
  paymentMethod: 'UPI' | 'Card' | 'NetBanking' | 'Sandbox';
  status: 'SUCCESS' | 'PENDING' | 'FAILED';
  timestamp: string;
  invoiceNumber: string;
}

export interface RevenueMetrics {
  totalRevenueInInr: number;
  paidSubscribersCount: number;
  averageOrderValueInInr: number;
  recentOrders: OrderRecord[];
}

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'free',
    name: 'Free Explorer',
    tagline: 'Standard access for beginners & self-study aspirants',
    priceInInr: 0,
    durationDays: 3650, // 10 years
    features: [
      'Interactive UPSC, APPSC & TSPSC Roadmaps',
      '3 Full Prelims Practice Mocks',
      '1 Gemini AI Mains Evaluation per day',
      '2026 Micro-Syllabus Blueprint PDF Download',
      'Daily 5-Question Habit Streak Drills'
    ],
    limitations: [
      'Limited to 3 Mock Tests',
      'Daily AI evaluation cap of 1 answer',
      'No Bulk Notes Master-Compilation'
    ]
  },
  {
    id: 'sprint',
    name: 'Prelims Sprint Pass',
    tagline: 'Ideal for rapid 90-day Prelims revision & test drills',
    priceInInr: 499,
    originalPriceInInr: 999,
    durationDays: 90,
    badge: 'Popular for Prelims',
    features: [
      'All 210+ Prelims Question Vault & Answer Keys',
      'Sectional & Full-Length Mock Simulator',
      '5 Gemini AI Mains Handwriting Evaluations/day',
      'Individual Subject Study Notes Print/PDF',
      'Priority Telegram Prelims Speed-Drill Group'
    ]
  },
  {
    id: 'topper',
    name: 'Topper All-Access Pass',
    tagline: 'Complete 360° Prelims + Mains master preparation package',
    priceInInr: 1499,
    originalPriceInInr: 3499,
    durationDays: 365,
    badge: 'Best Value • 1 Full Year',
    isPopular: true,
    features: [
      'Unlimited Gemini AI Mains Handwriting Evaluations',
      'All 3 Exam Scopes (UPSC CSE + APPSC + TSPSC)',
      'All 210+ Question Vault with detailed AI explanations',
      'Golden ⚡ PRO Aspirant Profile Badge',
      '1-Click Master Curriculum PDF Compilation (50+ pages)',
      'Daily WhatsApp & Telegram Topper Broadcasts',
      'Cloud Backup & Priority Offline-First Sync'
    ]
  }
];

const ORDERS_KEY = 'aspirant_orders_ledger';

/**
 * Retrieves all completed orders from storage.
 */
export function getOrdersLedger(): OrderRecord[] {
  try {
    const raw = localStorage.getItem(ORDERS_KEY);
    if (raw) return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to read orders ledger', err);
  }
  // Default sample topper order for initial commercial display
  return [
    {
      orderId: 'ord_sample_9841',
      userId: 'demo-topper-ananya',
      userName: 'Ananya Sharma (AIR 42)',
      userEmail: 'ananya.cse@gmail.com',
      userMobile: '+91 98765 43210',
      planId: 'topper',
      planName: 'Topper All-Access Pass',
      amountInInr: 1499,
      paymentMethod: 'UPI',
      status: 'SUCCESS',
      timestamp: new Date(Date.now() - 86400000 * 2).toISOString(),
      invoiceNumber: 'INV-2026-AA01'
    }
  ];
}

/**
 * Creates and records a completed subscription order.
 */
export function recordSuccessfulOrder(
  userId: string,
  userName: string,
  userEmail: string,
  userMobile: string | undefined,
  plan: SubscriptionPlan,
  paymentMethod: 'UPI' | 'Card' | 'NetBanking' | 'Sandbox'
): OrderRecord {
  const count = getOrdersLedger().length + 1;
  const orderId = `ord_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
  const invoiceNumber = `INV-${new Date().getFullYear()}-AA${count.toString().padStart(3, '0')}`;

  const newOrder: OrderRecord = {
    orderId,
    userId,
    userName,
    userEmail,
    userMobile,
    planId: plan.id as 'sprint' | 'topper',
    planName: plan.name,
    amountInInr: plan.priceInInr,
    paymentMethod,
    status: 'SUCCESS',
    timestamp: new Date().toISOString(),
    invoiceNumber
  };

  try {
    const existing = getOrdersLedger();
    existing.unshift(newOrder);
    localStorage.setItem(ORDERS_KEY, JSON.stringify(existing));
  } catch (err) {
    console.error('Failed to save order to ledger', err);
  }

  return newOrder;
}

/**
 * Aggregates commercial revenue metrics.
 */
export function getRevenueMetrics(): RevenueMetrics {
  const orders = getOrdersLedger().filter((o) => o.status === 'SUCCESS');
  const totalRevenue = orders.reduce((sum, o) => sum + o.amountInInr, 0);
  const paidSubscribers = new Set(orders.map((o) => o.userEmail || o.userId)).size;
  const aov = orders.length > 0 ? Math.round(totalRevenue / orders.length) : 0;

  return {
    totalRevenueInInr: totalRevenue,
    paidSubscribersCount: paidSubscribers,
    averageOrderValueInInr: aov,
    recentOrders: orders
  };
}

/**
 * Generates and triggers a print-friendly GST Commercial Tax Invoice.
 */
export function printCommercialInvoice(order: OrderRecord): void {
  const printWindow = window.open('', '_blank', 'width=800,height=750');
  if (!printWindow) {
    alert('Please allow popups to view and download your tax invoice.');
    return;
  }

  const basePrice = Math.round(order.amountInInr / 1.18);
  const gstAmount = order.amountInInr - basePrice;
  const dateFormatted = new Date(order.timestamp).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Tax Invoice - ${order.invoiceNumber}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      padding: 30px;
      color: #0f172a;
      max-width: 650px;
      margin: 0 auto;
      font-size: 13px;
    }
    .header {
      border-bottom: 2px solid #0f172a;
      padding-bottom: 15px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    .logo-text { font-size: 20px; font-weight: 900; color: #1e3a8a; }
    .invoice-title { font-size: 16px; font-weight: 800; text-align: right; }
    .badge-paid {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 4px;
      background: #dcfce7;
      color: #166534;
      font-weight: 800;
      font-size: 11px;
      text-transform: uppercase;
      margin-top: 6px;
    }
    .meta-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin: 25px 0;
    }
    .meta-box h4 { margin: 0 0 6px 0; font-size: 11px; text-transform: uppercase; color: #64748b; }
    .meta-box p { margin: 2px 0; }
    table { width: 100%; border-collapse: collapse; margin: 20px 0; }
    th { background: #f8fafc; border-bottom: 1px solid #cbd5e1; padding: 10px; text-align: left; font-size: 12px; }
    td { padding: 12px 10px; border-bottom: 1px solid #e2e8f0; }
    .total-row td { font-weight: 800; font-size: 14px; border-top: 2px solid #0f172a; }
    .footer { margin-top: 40px; border-top: 1px dashed #cbd5e1; padding-top: 15px; font-size: 11px; color: #64748b; text-align: center; }
    .no-print { margin-bottom: 20px; display: flex; justify-content: flex-end; }
    .btn-print { background: #2563eb; color: #fff; padding: 8px 16px; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; }
    @media print { .no-print { display: none !important; } }
  </style>
</head>
<body>
  <div class="no-print">
    <button class="btn-print" onclick="window.print()">🖨️ Print / Save PDF Invoice</button>
  </div>

  <div class="header">
    <div>
      <div class="logo-text">AspirantAtlas Technologies</div>
      <p style="margin: 4px 0 0 0; color: #475569; font-size: 11px;">
        Empowering Next-Gen Civil Servants (UPSC CSE, APPSC, TSPSC)
      </p>
      <p style="margin: 2px 0 0 0; color: #64748b; font-size: 11px;">
        GSTIN: 37AAACA0000A1Z5 • Support: billing@aspirantatlas.in
      </p>
    </div>
    <div style="text-align: right;">
      <div class="invoice-title">COMMERCIAL TAX INVOICE</div>
      <p style="margin: 4px 0 0 0; font-family: monospace; font-size: 12px; font-weight: bold;">
        ${order.invoiceNumber}
      </p>
      <div class="badge-paid">✓ Payment Completed (${order.paymentMethod})</div>
    </div>
  </div>

  <div class="meta-grid">
    <div class="meta-box">
      <h4>Billed To (Aspirant):</h4>
      <p><strong>${order.userName}</strong></p>
      <p>${order.userEmail}</p>
      ${order.userMobile ? `<p>Mobile: ${order.userMobile}</p>` : ''}
    </div>
    <div class="meta-box" style="text-align: right;">
      <h4>Order Details:</h4>
      <p><strong>Order ID:</strong> ${order.orderId}</p>
      <p><strong>Date:</strong> ${dateFormatted}</p>
      <p><strong>Payment Mode:</strong> ${order.paymentMethod} Instant Settlement</p>
    </div>
  </div>

  <table>
    <thead>
      <tr>
        <th>Description</th>
        <th style="text-align: center;">SAC Code</th>
        <th style="text-align: right;">Amount (INR)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <strong>${order.planName}</strong>
          <div style="font-size: 11px; color: #64748b; margin-top: 3px;">
            Full digital access to Civil Services Roadmaps, AI Evaluator & Prelims Simulator
          </div>
        </td>
        <td style="text-align: center; font-family: monospace;">999293</td>
        <td style="text-align: right; font-weight: bold;">₹${basePrice.toLocaleString('en-IN')}</td>
      </tr>
      <tr>
        <td colspan="2" style="text-align: right; color: #64748b; font-size: 12px;">IGST / CGST+SGST (18% Included)</td>
        <td style="text-align: right; color: #64748b; font-size: 12px;">₹${gstAmount.toLocaleString('en-IN')}</td>
      </tr>
      <tr class="total-row">
        <td colspan="2" style="text-align: right;">Total Paid:</td>
        <td style="text-align: right; color: #1e3a8a;">₹${order.amountInInr.toLocaleString('en-IN')}</td>
      </tr>
    </tbody>
  </table>

  <div style="background: #f8fafc; border-left: 3px solid #2563eb; padding: 10px 14px; border-radius: 4px; font-size: 11px; color: #334155;">
    <strong>Thank you for choosing AspirantAtlas!</strong> Your Pro credentials have been activated automatically on this device. Happy learning and best wishes for your Civil Services journey!
  </div>

  <div class="footer">
    AspirantAtlas • https://aspirant-atlas.pages.dev • This is a computer-generated tax invoice.
  </div>

  <script>
    window.addEventListener('load', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  </script>
</body>
</html>
  `;

  printWindow.document.open();
  printWindow.document.write(html);
  printWindow.document.close();
}

/**
 * Exports commercial orders ledger as a downloadable CSV.
 */
export function exportOrdersCsv(): void {
  const orders = getOrdersLedger();
  const headers = ['Invoice Number', 'Order ID', 'Date', 'Aspirant Name', 'Email', 'Mobile', 'Plan Name', 'Amount (INR)', 'Payment Mode', 'Status'];
  const rows = orders.map((o) => [
    `"${o.invoiceNumber}"`,
    `"${o.orderId}"`,
    `"${new Date(o.timestamp).toLocaleString()}"`,
    `"${o.userName}"`,
    `"${o.userEmail}"`,
    `"${o.userMobile || ''}"`,
    `"${o.planName}"`,
    o.amountInInr,
    `"${o.paymentMethod}"`,
    `"${o.status}"`
  ]);

  const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `aspirant_atlas_revenue_orders_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
