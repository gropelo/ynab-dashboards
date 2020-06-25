import { getMinValueService } from './getMinValue.service';

describe('getMinValueService', () => {
  it('should return 0 if there is no periods', () => {
    const result = getMinValueService([]);
    expect(result.amount).toBe(0);
  });

  it('should return the correct min value for 1 transaction', () => {
    const result = getMinValueService([
      { amount: 100, group: '1' }
    ]);
    expect(result.amount).toBe(100);
  });

  it('should return the correct min value for 3 transaction', () => {
    const result = getMinValueService([
      { amount: 80, group: '1' },
      { amount: 50, group: '1' },
      { amount: 50, group: '1' },
    ]);
    expect(result.amount).toBe(50);
  });

  it('should return the correct min value for 10 transaction', () => {
    const result = getMinValueService([
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
    expect(result.amount).toBe(10);
  });
});