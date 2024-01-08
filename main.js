export function calculateDaysBetweenDates(begin, end) {
    const beginDate = new Date(begin);
    const endDate = new Date(end);
    const timeDifference = endDate.getTime() - beginDate.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);
    return daysDifference;
}

export function displayDaysBetweenDates() {
    const begin = document.getElementById('beginDate').value;
    const end = document.getElementById('endDate').value;

    const daysDifference = calculateDaysBetweenDates(begin, end);

    const formattedBeginDate = formatDate(new Date(begin));
    const formattedEndDate = formatDate(new Date(end));

    document.getElementById('result').innerText = `São ${daysDifference} dias entre as datas ${formattedBeginDate} e ${formattedEndDate}`;
}

function formatDate(date) {
    const day = (date.getDate() + 1).toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}
// document.addEventListener('DOMContentLoaded', () => {
//     const button = document.getElementById('calculateButton');
//     button.addEventListener('click', displayDaysBetweenDates);
// });
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const button = document.getElementById('calculateButton');
        button.addEventListener('click', displayDaysBetweenDates);
    });
}