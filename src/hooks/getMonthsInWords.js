export default function getMonthInWords(dateStr) {
 const parts = dateStr.split('/');
 const monthNumeric = parts[1];

 const monthWords = [
   'January', 'February', 'March', 'April', 'May', 'June',
   'July', 'August', 'September', 'October', 'November', 'December'
 ];

 const monthWord = monthWords[parseInt(monthNumeric, 10) - 1]; // Month is zero-based

 return monthWord;
}