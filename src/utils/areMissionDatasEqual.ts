import { MissionData } from '../missionsData';

const areObjectPropsEqual = (
  obj1: Record<string, unknown>,
  obj2: Record<string, unknown>,
): boolean => {
  const props1 = Object.keys(obj1);
  const props2 = Object.keys(obj2);

  if (props1.length !== props2.length) {
    return false;
  }

  for (const prop of props1) {
    if (obj1[prop] !== obj2[prop]) {
      return false;
    }
  }
  return true;
};

const areMissionDatasEqual = (
  missionData1: MissionData,
  missionData2: MissionData,
): boolean => {
  return (
    missionData1.mission === missionData2.mission &&
    missionData1.location === missionData2.location &&
    missionData1.vehicle === missionData2.vehicle &&
    areObjectPropsEqual(missionData1.launch, missionData2.launch)
  );
};

export default areMissionDatasEqual;
