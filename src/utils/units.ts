type Quantities = "temperature" | "speed" | "percentage" | "pressure" | "degree" | "volume";

export function withUnit(
  value: number | string | undefined,
  quantity: Quantities
) {
  if (!value) return "-";
  if (quantity === "percentage") return `${value} %`
  if (quantity === "volume") return `${value} mm`
  if (quantity === "degree") return `${value} °`
  if (quantity === "pressure") return `${value} hPa`
  if (quantity === "speed") return `${value} m/s`;
  if (quantity === "temperature") return `${value} °C`;
}
