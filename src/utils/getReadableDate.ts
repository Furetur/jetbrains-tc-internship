import {
  MissionData,
  DefinedTimeMissionData,
  DefinedTimeMissionDataWithoutMinutes,
} from '../missionsData';
import { getLaunchDate } from './date-utils';

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const formatMinutes = (minutes: number): string => {
  if (minutes < 10) {
    return `0${minutes}`;
  }
  return minutes.toString();
};

export const getReadableDateFromMissionData = (
  missionData: MissionData,
): string => {
  const { years, months, date, hours, minutes, quarter } = missionData.launch;
  const monthIsNotGiven = months === null;
  const dateIsNotGiven = date === null;
  const hoursAreNotGiven = hours === null;
  const minutesAreNotGiven = minutes === null;
  const quarterIsNotGiven = quarter === null;

  // nothing is given but year
  if (
    monthIsNotGiven &&
    dateIsNotGiven &&
    hoursAreNotGiven &&
    minutesAreNotGiven &&
    quarterIsNotGiven
  ) {
    return years.toString();
  }
  // if only year and quarter are given
  if (
    !quarterIsNotGiven &&
    monthIsNotGiven &&
    dateIsNotGiven &&
    hoursAreNotGiven &&
    minutesAreNotGiven
  ) {
    return `Q${(quarter as number) + 1} of ${years}`;
  }
  // only year and month are given
  if (
    !monthIsNotGiven &&
    dateIsNotGiven &&
    hoursAreNotGiven &&
    minutesAreNotGiven
  ) {
    return `${monthNames[months as number]} ${years}`;
  }
  // only year, month and date are given
  if (
    !monthIsNotGiven &&
    !dateIsNotGiven &&
    hoursAreNotGiven &&
    minutesAreNotGiven
  ) {
    return `${date} ${monthNames[months as number]} ${years}`;
  }
  // year, month, date, hours are given (minutes can be giver or not)
  if (!monthIsNotGiven && !dateIsNotGiven && !hoursAreNotGiven) {
    return `${date} ${monthNames[months as number]} ${years} at ${hours}:${
      minutesAreNotGiven ? '--' : formatMinutes(minutes as number)
    }`;
  }
  return years.toString();
};

export const getReadableLocalDate = (
  missionData: DefinedTimeMissionData | DefinedTimeMissionDataWithoutMinutes,
): string => {
  const minutesAreNotGiven = missionData.launch.minutes === null;

  // we copy mission data to avoid mutating the original
  const copyMissionData = { ...missionData, launch: { ...missionData.launch } };
  // if minutes are not given replace them with 0
  copyMissionData.launch.minutes = minutesAreNotGiven
    ? 0
    : copyMissionData.launch.minutes;

  const launchDate = getLaunchDate(copyMissionData as DefinedTimeMissionData);
  const date = launchDate.getDate();
  const month = monthNames[launchDate.getMonth()];
  const year = launchDate.getFullYear();
  const hours = launchDate.getHours();
  const minutes = launchDate.getMinutes();

  return `${date} ${month} ${year} at ${hours}:${
    minutesAreNotGiven ? '--' : formatMinutes(minutes)
  }`;
};
