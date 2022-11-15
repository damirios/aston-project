const months = ['January', 'February', 'March', 'April', 'May', 
    'June', 'July', 'August', 'September', 'October', 'Novermber', 'December'];

export function getFormattedDate(date) { // date format is day-month-year
    const [day, month, year] = date.split('-');
    
    return months[+month - 1] + ' ' + day + ', ' + year; 
}