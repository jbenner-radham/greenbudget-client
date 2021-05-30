export default function getLastDayOfMonth(month: number): number {
    const year = new Date().getFullYear();
    const day = 0; // Zero day returns the last day of the month.
    const date = new Date(year, month, day);

    return date.getDate();
}