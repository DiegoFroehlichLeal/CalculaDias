export function calculateDaysBetweenDates(begin, end) {
    const beginDate = new Date(begin);
    const endDate = new Date(end);
    const timeDifference = endDate.getTime() - beginDate.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);
    return daysDifference;
}


export function calculateDaysBetweenDate() {
    const begin = document.getElementById('beginDate').value;
    const end = document.getElementById('endDate').value;

    const daysDifference = calculateDaysBetweenDates(begin, end);

    // Exibindo o resultado em um elemento HTML
    document.getElementById('result').innerText = `Diferença em dias: ${daysDifference}`;
}