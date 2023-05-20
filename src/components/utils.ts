export function getAmPmFromHours(
  hours: number,
  isCapital: boolean = false
): string {
  const pm = isCapital ? "PM" : "pm";
  const am = isCapital ? "AM" : "am";

  return hours >= 12 ? pm : am;
}
