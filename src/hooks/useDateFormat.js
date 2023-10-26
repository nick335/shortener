function formatDate(isoDate) {
 const date = new Date(isoDate);
 const day = date.getDate();
 const month = date.getMonth() + 1;
 const year = date.getFullYear() % 100;
 const formattedDay = day < 10 ? `0${day}` : day;
 const formattedMonth = month < 10 ? `0${month}` : month;
 const formattedYear = year < 10 ? `0${year}` : year;

 return `${formattedDay}/${formattedMonth}/${formattedYear}`;
}

export function useDateFormat(initialIsoDate) {
 const formattedDate = formatDate(initialIsoDate);

 return formattedDate; 
}
