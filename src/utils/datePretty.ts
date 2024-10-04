export function formatDate(dateString: string) {
  const monthArr: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const date = new Date(dateString)

  const currMonth = date.getMonth()
  const monthName = monthArr[currMonth]
  const year = date.getFullYear()

  return `${monthName} ${year}`
}