export function calculateDaysBetweenDates(begin, end) {
    const beginDate = new Date(begin);
    const endDate = new Date(end);
    const timeDifference = endDate.getTime() - beginDate.getTime();
    return timeDifference / (1000 * 3600 * 24);
}

export function displayDaysBetweenDates() {
    const begin = document.getElementById('beginDate').value;
    const end = document.getElementById('endDate').value;
    if (begin > end) {
        document.getElementById('result').innerText = `A data inicial não pode ser maior que a data final!`;
    } else {
        const daysDifference = calculateDaysBetweenDates(begin, end) + 1;
        const businessDays = getBusinessDays(begin, end);
        document.getElementById('result').innerText = `São ${daysDifference} dias corridos e ${businessDays} úteis `;
    }
}

function formatDate(date) {
    const day = (date.getDate()).toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}


if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const button = document.getElementById('calculateButton');
        button.addEventListener('click', displayDaysBetweenDates);
    });
}

function getBusinessDays(begin, end) {
    const beginDate = new Date(begin);
    const endDate = new Date(end);
    const nationalHolidays = [
        '01-01', // Confraternização Universal
        '04-21', // Tiradentes
        '05-01', // Dia do Trabalho
        '06-20', // Corpus Christi
        '09-07', // Independência do Brasil
        '10-12', // Nossa Senhora Aparecida
        '11-02', // Finados
        '11-15', // Proclamação da República
        '12-25' // Natal
    ];
    nationalHolidays.push(getGoodFriday(beginDate.getFullYear()));
    let businessDays = 0;
    while (beginDate <= endDate) {

        const day = beginDate.getUTCDay();
        const month = beginDate.getUTCMonth() + 1;
        const date = beginDate.getUTCDate();
        const fullDate = `${String(month).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
        if (day !== 0 && day !== 6 && !nationalHolidays.includes(fullDate)) {
            businessDays++;
        }
        beginDate.setUTCDate(date + 1);
    }
    return businessDays;
}

//Calcula a sexta-feira santa de acordo com o ano.
function getGoodFriday(year) {
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31);
    const day = ((h + l - 7 * m + 114) % 31) + 1;

    return `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}