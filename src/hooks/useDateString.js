export function useDateString(string) {
  const date = new Date(string);

  const [year, month, day] = [
    date.getFullYear().toString().slice(-2),
    String(date.getMonth() + 1).padStart(2, '0'),
    String(date.getDate()).padStart(2, '0')
  ]

  const formattedDateString = `${year}/${month}/${day}`;

  return formattedDateString
}