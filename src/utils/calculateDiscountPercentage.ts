export function calculateDiscountPercentage(price: number, discount?: number) {
  if (!discount || discount === price) {
    return null;
  }
  const discountedPercentage = ((price - discount) / price) * 100;
  return `${(Math.round(discountedPercentage * 100) / 100).toFixed(0)}%`;
}
