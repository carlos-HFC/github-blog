import { formatDistanceToNow } from "date-fns"

export function formatDistance(date: string) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
  })
}
