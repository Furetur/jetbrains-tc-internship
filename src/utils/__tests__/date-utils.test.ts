import {
  differenceInDaysHoursMinutes,
  getCurrentDateNoSeconds,
  compareDates,
} from '../date-utils';

describe('differenceInDaysHoursMinutes()', () => {
  const hardcoredDate = 1585859190062;
  let earlierDate: Date = new Date(hardcoredDate);
  let laterDate: Date = new Date();

  beforeEach(() => {
    earlierDate = new Date(hardcoredDate);
    laterDate = new Date(earlierDate.getTime());
  });

  test('should return 1 minute difference', () => {
    laterDate.setMinutes(earlierDate.getMinutes() + 1);
    const [days, hours, minutes] = differenceInDaysHoursMinutes(
      earlierDate,
      laterDate,
    );
    expect(days).toBe(0);
    expect(hours).toBe(0);
    expect(minutes).toBe(1);
  });

  test('should return 30 minutes difference', () => {
    laterDate.setMinutes(earlierDate.getMinutes() + 30);
    const [days, hours, minutes] = differenceInDaysHoursMinutes(
      earlierDate,
      laterDate,
    );
    expect(days).toBe(0);
    expect(hours).toBe(0);
    expect(minutes).toBe(30);
  });

  test('should return 1 hour difference', () => {
    laterDate.setHours(earlierDate.getHours() + 1);
    const [days, hours, minutes] = differenceInDaysHoursMinutes(
      earlierDate,
      laterDate,
    );
    expect(days).toBe(0);
    expect(hours).toBe(1);
    expect(minutes).toBe(0);
  });

  test('should return 1 hour and 30 minutes difference', () => {
    laterDate.setHours(earlierDate.getHours() + 1);
    laterDate.setMinutes(earlierDate.getMinutes() + 30);
    const [days, hours, minutes] = differenceInDaysHoursMinutes(
      earlierDate,
      laterDate,
    );
    expect(days).toBe(0);
    expect(hours).toBe(1);
    expect(minutes).toBe(30);
  });
  test('should return 1 day difference', () => {
    laterDate.setDate(earlierDate.getDate() + 1);
    const [days, hours, minutes] = differenceInDaysHoursMinutes(
      earlierDate,
      laterDate,
    );
    expect(days).toBe(1);
    expect(hours).toBe(0);
    expect(minutes).toBe(0);
  });

  test('should return 1 day and 30 minutes difference', () => {
    laterDate.setDate(earlierDate.getDate() + 1);
    laterDate.setMinutes(earlierDate.getMinutes() + 30);
    const [days, hours, minutes] = differenceInDaysHoursMinutes(
      earlierDate,
      laterDate,
    );
    expect(days).toBe(1);
    expect(hours).toBe(0);
    expect(minutes).toBe(30);
  });

  test('should return 1 day and 5 hours difference', () => {
    laterDate.setDate(earlierDate.getDate() + 1);
    laterDate.setHours(earlierDate.getHours() + 5);
    const [days, hours, minutes] = differenceInDaysHoursMinutes(
      earlierDate,
      laterDate,
    );
    expect(days).toBe(1);
    expect(hours).toBe(5);
    expect(minutes).toBe(0);
  });

  test('should return 1 day 5 hours and 30 minutes difference', () => {
    laterDate.setDate(earlierDate.getDate() + 1);
    laterDate.setHours(earlierDate.getHours() + 5);
    laterDate.setMinutes(earlierDate.getMinutes() + 30);
    const [days, hours, minutes] = differenceInDaysHoursMinutes(
      earlierDate,
      laterDate,
    );
    expect(days).toBe(1);
    expect(hours).toBe(5);
    expect(minutes).toBe(30);
  });

  test('should return 30 days 13 hours and 10 minutes difference', () => {
    laterDate.setDate(earlierDate.getDate() + 30);
    laterDate.setHours(earlierDate.getHours() + 13);
    laterDate.setMinutes(earlierDate.getMinutes() + 10);
    const [days, hours, minutes] = differenceInDaysHoursMinutes(
      earlierDate,
      laterDate,
    );
    expect(days).toBe(30);
    expect(hours).toBe(13);
    expect(minutes).toBe(10);
  });
});

describe('getCurrentDateNoSeconds()', () => {
  test('should return date with seconds = 0', () => {
    const date = getCurrentDateNoSeconds();
    expect(date.getSeconds()).toBe(0);
  });

  test('should return date which is close to current date with maybe + 1.5 minute', () => {
    const MILISECONDS_IN_MINUTE = 1000 * 60;
    const ACCEPTABLE_RANGE = MILISECONDS_IN_MINUTE * 1.5;

    const currentDate = new Date();
    const date = getCurrentDateNoSeconds();

    expect(date.getTime()).toBeGreaterThan(
      currentDate.getTime() - ACCEPTABLE_RANGE,
    );
    expect(date.getTime()).toBeLessThan(
      currentDate.getTime() + ACCEPTABLE_RANGE,
    );
  });
});

describe('compareDates()', () => {
  const earlierDate = new Date();
  const laterDate = new Date(earlierDate.getTime() + 1000);
  const laterDate1 = new Date(laterDate.getTime());

  test('should return a negative number if first date is earlier', () => {
    expect(compareDates(earlierDate, laterDate)).toBeLessThan(0);
  });

  test('should return 0 if objects are equals', () => {
    expect(compareDates(earlierDate, earlierDate)).toBe(0);
  });
  test('should return 0 if objects are not equal but represent the same date', () => {
    expect(compareDates(laterDate, laterDate1)).toBe(0);
  });
  test('should return 1 if first date is later than the second', () => {
    expect(compareDates(laterDate, earlierDate)).toBeGreaterThan(0);
  });
});
