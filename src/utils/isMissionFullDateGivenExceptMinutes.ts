import {
  MissionData,
  DefinedTimeMissionDataWithoutMinutes,
} from '../missionsData';

const isMissionFullDateGivenExceptMinutes = (
  missionData: MissionData,
): missionData is DefinedTimeMissionDataWithoutMinutes => {
  const { months, date, hours, minutes, quarter } = missionData.launch;
  return (
    months !== null &&
    date !== null &&
    hours !== null &&
    minutes === null &&
    quarter !== null
  );
};

export default isMissionFullDateGivenExceptMinutes;
