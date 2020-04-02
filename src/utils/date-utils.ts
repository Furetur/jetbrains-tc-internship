import { MissionData } from '../missionsData';

const MILISECONDS_IN_MINUTE = 1000 * 60;
const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const MINUTES_IN_DAY = MINUTES_IN_HOUR * HOURS_IN_DAY;

export const differenceInMiliseconds = (
  earlierDate: Date,
  laterDate: Date,
): number => {
  return laterDate.getTime() - earlierDate.getTime();
};

export const differenceInMinutes = (
  earlierDate: Date,
  laterDate: Date,
): number => {
  const diff = differenceInMiliseconds(earlierDate, laterDate);
  return Math.floor(diff / MILISECONDS_IN_MINUTE);
};

export const differenceInHours = (
  earlierDate: Date,
  laterDate: Date,
): number => {
  const diffInMinutes = differenceInMinutes(earlierDate, laterDate);
  return Math.floor(diffInMinutes / MINUTES_IN_HOUR);
};

export const differenceInFullDays = (
  earlierDate: Date,
  laterDate: Date,
): number => {
  const diffInHours = differenceInHours(earlierDate, laterDate);
  return Math.floor(diffInHours / HOURS_IN_DAY);
};

export const differenceInDaysHoursMinutes = (
  earlierDate: Date,
  laterDate: Date,
): [number, number, number] => {
  const diffInDays = differenceInFullDays(earlierDate, laterDate);
  const remainderInHours =
    differenceInHours(earlierDate, laterDate) - diffInDays * HOURS_IN_DAY;
  const remainderInMinutes =
    differenceInMinutes(earlierDate, laterDate) -
    diffInDays * MINUTES_IN_DAY -
    remainderInHours * MINUTES_IN_HOUR;
  return [diffInDays, remainderInHours, remainderInMinutes];
};

export const getLaunchDate = (missionData: MissionData): Date => {
  const { years, months, date, hours, minutes } = missionData.launch;
  if (
    years === null ||
    months === null ||
    date === null ||
    hours === null ||
    minutes === null
  ) {
    throw new Error('Date is not filly provided');
  }
  const launchDateMiliseconds = Date.UTC(
    years,
    months - 1,
    date,
    hours,
    minutes,
  );
  return new Date(launchDateMiliseconds);
};

export const getCurrentDateNoSeconds = (): Date => {
  const curDate = new Date();
  curDate.setUTCSeconds(0);
  curDate.setUTCMilliseconds(0);
  return curDate;
};

export const compareDates = (date1: Date, date2: Date): number => {
  return date1.getTime() - date2.getTime();
};

export const areDatesEqual = (date1: Date, date2: Date): boolean => {
  return compareDates(date1, date2) === 0;
};
