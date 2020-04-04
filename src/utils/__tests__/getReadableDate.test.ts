import { MissionData } from '../../missionsData';
import { getReadableDateFromMissionData } from '../getReadableDate';

describe('getReadableDateFromMissionData()', () => {
  test('should return year for data that contains only year', () => {
    const missionData: MissionData = {
      mission: 'abc',
      launch: {
        years: 2020,
        months: null,
        date: null,
        hours: null,
        minutes: null,
        quarter: null,
      },
      vehicle: 'A',
      location: 'B',
    };
    const result = getReadableDateFromMissionData(missionData);
    expect(result).toBe('2020');
  });

  test('should return quarter and year for data that contains only quarter and year (1)', () => {
    const missionData: MissionData = {
      mission: 'abc',
      launch: {
        years: 2020,
        months: null,
        date: null,
        hours: null,
        minutes: null,
        quarter: 1,
      },
      vehicle: 'A',
      location: 'B',
    };
    const result = getReadableDateFromMissionData(missionData);
    expect(result).toBe('Q2 of 2020');
  });

  test('should return quarter and year for data that contains only quarter and year (2)', () => {
    const missionData: MissionData = {
      mission: 'abc',
      launch: {
        years: 2020,
        months: null,
        date: null,
        hours: null,
        minutes: null,
        quarter: 2,
      },
      vehicle: 'A',
      location: 'B',
    };
    const result = getReadableDateFromMissionData(missionData);
    expect(result).toBe('Q3 of 2020');
  });

  test('should return month and year for data that contains only month and year (1)', () => {
    const missionData: MissionData = {
      mission: 'abc',
      launch: {
        years: 2020,
        months: 0,
        date: null,
        hours: null,
        minutes: null,
        quarter: null,
      },
      vehicle: 'A',
      location: 'B',
    };
    const result = getReadableDateFromMissionData(missionData);
    expect(result).toBe('Jan 2020');
  });

  test('should return month and year for data that contains only month and year (1)', () => {
    const missionData: MissionData = {
      mission: 'abc',
      launch: {
        years: 2020,
        months: 4,
        date: null,
        hours: null,
        minutes: null,
        quarter: null,
      },
      vehicle: 'A',
      location: 'B',
    };
    const result = getReadableDateFromMissionData(missionData);
    expect(result).toBe('May 2020');
  });

  test('should ignore quarter if month is provided', () => {
    const missionData: MissionData = {
      mission: 'abc',
      launch: {
        years: 2020,
        months: 4,
        date: null,
        hours: null,
        minutes: null,
        quarter: 1,
      },
      vehicle: 'A',
      location: 'B',
    };
    const result = getReadableDateFromMissionData(missionData);
    expect(result).toBe('May 2020');
  });

  test('should return 13 Feb 2020', () => {
    const missionData: MissionData = {
      mission: 'abc',
      launch: {
        years: 2020,
        months: 1,
        date: 13,
        hours: null,
        minutes: null,
        quarter: 1,
      },
      vehicle: 'A',
      location: 'B',
    };
    const result = getReadableDateFromMissionData(missionData);
    expect(result).toBe('13 Feb 2020');
  });

  test('should return 13 Feb 2020 at 3:--', () => {
    const missionData: MissionData = {
      mission: 'abc',
      launch: {
        years: 2020,
        months: 1,
        date: 13,
        hours: 3,
        minutes: null,
        quarter: 1,
      },
      vehicle: 'A',
      location: 'B',
    };
    const result = getReadableDateFromMissionData(missionData);
    expect(result).toBe('13 Feb 2020 at 3:--');
  });

  test('should return 13 Feb 2020 at 13:--', () => {
    const missionData: MissionData = {
      mission: 'abc',
      launch: {
        years: 2020,
        months: 1,
        date: 13,
        hours: 13,
        minutes: null,
        quarter: 1,
      },
      vehicle: 'A',
      location: 'B',
    };
    const result = getReadableDateFromMissionData(missionData);
    expect(result).toBe('13 Feb 2020 at 13:--');
  });

  test('should return 13 Feb 2020 at 13:05', () => {
    const missionData: MissionData = {
      mission: 'abc',
      launch: {
        years: 2020,
        months: 1,
        date: 13,
        hours: 13,
        minutes: 5,
        quarter: 1,
      },
      vehicle: 'A',
      location: 'B',
    };
    const result = getReadableDateFromMissionData(missionData);
    expect(result).toBe('13 Feb 2020 at 13:05');
  });

  test('should return 13 Feb 2020 at 13:55', () => {
    const missionData: MissionData = {
      mission: 'abc',
      launch: {
        years: 2020,
        months: 1,
        date: 13,
        hours: 13,
        minutes: 55,
        quarter: 1,
      },
      vehicle: 'A',
      location: 'B',
    };
    const result = getReadableDateFromMissionData(missionData);
    expect(result).toBe('13 Feb 2020 at 13:55');
  });
});
