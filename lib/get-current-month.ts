export default function getCurrentMonth(): number {
    return new Date().getMonth() + 1; // Months are zero indexed in JS so +1.
}