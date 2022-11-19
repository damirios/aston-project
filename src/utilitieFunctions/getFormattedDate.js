const months = ['January', 'February', 'March', 'April', 'May', 
    'June', 'July', 'August', 'September', 'October', 'Novermber', 'December'];

export function getFormattedDate(date) { // date format is day-month-year
    if (date === 'no release date') {
        return '-';
    }
    const [year, month, day] = date.split('-');
    
    return months[+month - 1] + ' ' + day + ', ' + year; 
}