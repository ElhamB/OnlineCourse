export function formatCurrency(currency) {
    return new Intl.NumberFormat("ar-EG", {
      style: "currency",
      currency: "IRR",
      minimumFractionDigits: 3,
    }).format(currency);
  }