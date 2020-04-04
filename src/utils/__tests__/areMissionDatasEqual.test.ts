import { MissionData } from '../../missionsData';
import areMissionDatasEqual from '../areMissionDatasEqual';

describe('areMissionDatasEqual()', () => {
  test('should return true if objects are equal ==', () => {
    const missionData: MissionData = {
      mission: 'a',
      launch: {
        years: 1,
        months: 2,
        date: 3,
        hours: 10,
        minutes: 1,
        quarter: 3,
      },
      vehicle: 'ad',
      location: 'ab',
    };

    expect(areMissionDatasEqual(missionData, missionData)).toBeTruthy();
  });

  test('should return true if objects are not equal but represent the same mission', () => {
    const missionData1: MissionData = {
      mission: 'a',
      launch: {
        years: 1,
        months: 2,
        date: 3,
        hours: 10,
        minutes: 1,
        quarter: 3,
      },
      vehicle: 'ad',
      location: 'ab',
    };

    const missionData2: MissionData = {
      mission: 'a',
      launch: {
        years: 1,
        months: 2,
        date: 3,
        hours: 10,
        minutes: 1,
        quarter: 3,
      },
      vehicle: 'ad',
      location: 'ab',
    };

    expect(areMissionDatasEqual(missionData1, missionData2)).toBeTruthy();
  });

  test('should return true if objects are not equal but represent the same mission with nulls', () => {
    const missionData1: MissionData = {
      mission: 'a',
      launch: {
        years: 1,
        months: null,
        date: 3,
        hours: 10,
        minutes: 1,
        quarter: 3,
      },
      vehicle: 'ad',
      location: 'ab',
    };

    const missionData2: MissionData = {
      mission: 'a',
      launch: {
        years: 1,
        months: null,
        date: 3,
        hours: 10,
        minutes: 1,
        quarter: 3,
      },
      vehicle: 'ad',
      location: 'ab',
    };

    expect(areMissionDatasEqual(missionData1, missionData2)).toBeTruthy();
  });

  test('should return true if objects are not equal but represent the same mission with all nulls', () => {
    const missionData1: MissionData = {
      mission: 'a',
      launch: {
        years: 1,
        months: null,
        date: null,
        hours: null,
        minutes: null,
        quarter: null,
      },
      vehicle: 'ad',
      location: 'ab',
    };

    const missionData2: MissionData = {
      mission: 'a',
      launch: {
        years: 1,
        months: null,
        date: null,
        hours: null,
        minutes: null,
        quarter: null,
      },
      vehicle: 'ad',
      location: 'ab',
    };

    expect(areMissionDatasEqual(missionData1, missionData2)).toBeTruthy();
  });

  test('should return false if objects are not the same', () => {
    const missionData1: MissionData = {
      mission: 'a',
      launch: {
        years: 1,
        months: null,
        date: null,
        hours: 2,
        minutes: null,
        quarter: null,
      },
      vehicle: 'ad',
      location: 'ab',
    };

    const missionData2: MissionData = {
      mission: 'a',
      launch: {
        years: 1,
        months: null,
        date: null,
        hours: 1,
        minutes: null,
        quarter: null,
      },
      vehicle: 'ad',
      location: 'ab',
    };

    expect(areMissionDatasEqual(missionData1, missionData2)).toBeFalsy();
  });
});
