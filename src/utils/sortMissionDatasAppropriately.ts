import { MissionData, DefinedTimeMissionData } from '../missionsData';
import isMissionFullDateGiven from './isMissionFullDateGiven';
import { getLaunchDate, compareDates } from './date-utils';
import launchAlreadyHappened from './launchAlreadyHappened';

const earlyLaunchesComeFirstComparator = (
  missionData1: DefinedTimeMissionData,
  missionData2: DefinedTimeMissionData,
): number => {
  const launchDate1 = getLaunchDate(missionData1);
  const launchDate2 = getLaunchDate(missionData2);
  return compareDates(launchDate1, launchDate2);
};

const lateLaunchesComeFirstComparator = (
  missionData1: DefinedTimeMissionData,
  missionData2: DefinedTimeMissionData,
): number => {
  return earlyLaunchesComeFirstComparator(missionData1, missionData2) * -1;
};

const sortMissionDatasAppripriately = (
  missionDatas: MissionData[],
  currentDate: Date,
): MissionData[] => {
  const knownDateLaunches: DefinedTimeMissionData[] = missionDatas.filter(
    isMissionFullDateGiven,
  ) as DefinedTimeMissionData[];
  const unknownDateLaunches = missionDatas.filter(
    (missionData) => !isMissionFullDateGiven(missionData),
  );
  const pastLaunches = knownDateLaunches.filter((missionData) =>
    launchAlreadyHappened(missionData, currentDate),
  );
  const futureLaunches = knownDateLaunches.filter(
    (missionData) => !launchAlreadyHappened(missionData, currentDate),
  );
  // sort to match [earlier launches ...... later launches]
  futureLaunches.sort(earlyLaunchesComeFirstComparator);
  pastLaunches.sort(lateLaunchesComeFirstComparator);

  return [...futureLaunches, ...pastLaunches, ...unknownDateLaunches];
};

export default sortMissionDatasAppripriately;
