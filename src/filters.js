export function numberPrice(value) {
  const newValue = Number(value);
  if (isNaN(newValue)) {
    value = value.replace(/\./g, "").replace(",", ".");
  }
  value = Number(value);
  if (!isNaN(value)) {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  } else {
    return "0";
  }
}
