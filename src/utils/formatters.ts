/**
 * Formats a number to Indian Rupee (INR) currency format
 * e.g., 129999 -> ₹1,29,999
 */
export function formatINR(amount: number): string {
  if (isNaN(amount) || amount === null || amount === undefined) {
    return '₹0';
  }
  const rounded = Math.round(amount);
  return '₹' + rounded.toLocaleString('en-IN');
}

/**
 * Calculates discount percentage
 */
export function calculateDiscount(price: number, mrp: number): number {
  if (!mrp || mrp <= price) return 0;
  return Math.round(((mrp - price) / mrp) * 100);
}

/**
 * Formats relative or standard delivery date
 */
export function formatDeliveryDate(daysFromNow: number): string {
  const date = new Date();
  date.setDate(date.getDate() + daysFromNow);
  const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-IN', options);
}

/**
 * Returns month name for next billing cycle
 */
export function getNextEMIDate(): string {
  const date = new Date();
  date.setMonth(date.getMonth() + 1);
  date.setDate(5); // Standard 5th of each month auto-debit
  return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}
