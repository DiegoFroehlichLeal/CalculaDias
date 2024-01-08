const { calculateDaysBetweenDates } = require('../main');

describe('calculateDaysBetweenDates', () => {
  it('calcula o número correto de dias entre duas datas', () => {
    const begin = '2022-01-01';
    const end = '2022-01-10';
    const expectedDaysDifference = 9;

    const result = calculateDaysBetweenDates(begin, end);

    expect(result).toBe(expectedDaysDifference);
  });

  it('retorna 0 quando as datas de início e término são iguais', () => {
    const begin = '2022-01-01';
    const end = '2022-01-01';
    const expectedDaysDifference = 0;

    const result = calculateDaysBetweenDates(begin, end);

    expect(result).toBe(expectedDaysDifference);
  });

  it('lida com strings de data inválidas e retorna NaN', () => {
    const begin = 'qualquer merda';
    const end = '2022-01-10';

    const result = calculateDaysBetweenDates(begin, end);

    expect(result).toBeNaN();
  });

  it('retorna um número negativo quando a data de término é anterior à data de início', () => {
    const begin = '2022-01-10';
    const end = '2022-01-01';
    const expectedDaysDifference = -9;

    const result = calculateDaysBetweenDates(begin, end);

    expect(result).toBe(expectedDaysDifference);
  });

  it('lida corretamente com anos bissextos', () => {
    const begin = '2024-02-28';
    const end = '2024-03-01';
    const expectedDaysDifference = 2;

    const result = calculateDaysBetweenDates(begin, end);

    expect(result).toBe(expectedDaysDifference);
  });
});
