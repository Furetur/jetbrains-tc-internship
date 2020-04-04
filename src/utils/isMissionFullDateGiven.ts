import { MissionData, DefinedTimeMissionData } from '../missionsData';

const isMissionFullDateGiven = (
  missionData: MissionData,
): missionData is DefinedTimeMissionData => {
  const { months, date, hours, minutes, quarter } = missionData.launch;
  return (
    months !== null &&
    date !== null &&
    hours !== null &&
    minutes !== null &&
    quarter !== null
  );
};

export default isMissionFullDateGiven;
