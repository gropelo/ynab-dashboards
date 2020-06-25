import { getAvgValueService } from './getAvgValue.service';

describe('getAvgValueService', () => {
  it('should return 0 if there is no periods', () => {
    const result = getAvgValueService([]);
    expect(result).toBe(0);
  });

  it('should return the correct avg value for 1 transaction', () => {
    const result = getAvgValueService([
      { amount: 100, group: '1' }
    ]);
    expect(result).toBe(100);
  });

  it('should return the correct avg value for 3 transaction', () => {
    const result = getAvgValueService([
      { amount: 80, group: '1' },
      { amount: 50, group: '1' },
      { amount: 50, group: '1' },
    ]);
    expect(result).toBe(60);
  });

  it('should return the correct avg value for 10 transaction', () => {
    const result = getAvgValueService([
      { amount: 10, group: '1' },
      { amount: 20, group: '1' },
      { amount: 30, group: '1' },
      { amount: 40, group: '1' },
      { amount: 50, group: '1' },
      { amount: 60, group: '1' },
      { amount: 70, group: '1' },
      { amount: 80, group: '1' },
      { amount: 90, group: '1' },
      { amount: 100, group: '1' },
    ]);
    expect(result).toBe(55);
  });
});