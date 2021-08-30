export function numberPrice(value) {
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
