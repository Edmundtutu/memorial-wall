import { format, formatDistanceToNow, isThisYear } from "date-fns";

export function formatMemoryDate(date: Date): string {
  if (isThisYear(date)) {
    return format(date, "MMMM d");
  }
  return format(date, "MMMM d, yyyy");
}

export function formatRelativeDate(date: Date): string {
  return formatDistanceToNow(date, { addSuffix: true });
}
