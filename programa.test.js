const { calculateDaysBetweenDates } = require('./programa');

describe('calculateDaysBetweenDates', () => {
  it('calcula o número correto de dias entre duas datas', () => {
    const begin = '2022-01-01';
    const end = '2022-01-10';
    const expectedDaysDifference = 9;

    const result = calculateDaysBetweenDates(begin, end);

    expect(result).toBe(expectedDaysDifference);
  });

  it('deve retornar 0 quando as datas de início e término forem iguais', () => {
    const begin = '2022-01-01';
    const end = '2022-01-01';
    const expectedDaysDifference = 0;

    const result = calculateDaysBetweenDates(begin, end);

    expect(result).toBe(expectedDaysDifference);
  });

  it('deve lidar com strings de data inválidas e retornar NaN', () => {
    const begin = 'qualquer merda';
    const end = '2022-01-10';

    const result = calculateDaysBetweenDates(begin, end);

    expect(result).toBeNaN();
  });
});
