function formatDateToDDMMYY(date) {
 const day = date.getDate();
 const month = date.getMonth() + 1; // Month is zero-based, so add 1
 const year = date.getFullYear() % 100; // Get the last two digits of the year

 const formattedDay = day < 10 ? `0${day}` : day;
 const formattedMonth = month < 10 ? `0${month}` : month;
 const formattedYear = year < 10 ? `0${year}` : year;

 return `${formattedDay}/${formattedMonth}/${formattedYear}`;
}

export default function addDaysToDate(originalDateStr) {
 const originalDateParts = originalDateStr.split('/');
 const day = parseInt(originalDateParts[0], 10);
 const month = parseInt(originalDateParts[1], 10) - 1; // Month is zero-based
 const year = 2000 + parseInt(originalDateParts[2], 10); // Assuming year in 'yy' format

 const originalDate = new Date(year, month, day);
 originalDate.setDate(originalDate.getDate() + 7);

 return formatDateToDDMMYY(originalDate);
}






