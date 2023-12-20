/**
 * check if today is Friday
 * @returns if today is Friday return "happy", else return "sad"
 */
import { getDay } from "./getDay";
export function checkFriday(): string {
  const today = new Date();
  console.log("today =====> ", today);
  if (today.getDay() === 5) {
    return "happy";
  } else {
    return "sad";
  }
}
