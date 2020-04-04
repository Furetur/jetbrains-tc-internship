import { compareDates, getLaunchDate } from './date-utils';
import { DefinedTimeMissionData } from '../missionsData';

const launchAlreadyHappened = (
  missionData: DefinedTimeMissionData,
  currentDate: Date,
): boolean => {
  const launchDate = getLaunchDate(missionData);
  return compareDates(launchDate, currentDate) < 0;
};

export default launchAlreadyHappened;
