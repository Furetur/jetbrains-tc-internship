import React, { ReactElement, memo, useEffect } from 'react';
import { MissionData } from '../../missionsData';
import './Mission.css';
import { areDatesEqual, getLaunchDate } from '../../utils/date-utils';
import areMissionDatasEqual from '../../utils/areMissionDatasEqual';
import Timer from '../Timer/Timer';

interface Props {
  missionData: MissionData;
  currentDate?: Date;
  timer: boolean;
}

const areMissionPropsEqual = (prevProps: Props, newProps: Props): boolean => {
  const prevPropsHaveNoDate = prevProps.currentDate === undefined;
  const newPropsHaveNoDate = newProps.currentDate === undefined;

  if (prevProps.timer !== newProps.timer) {
    return false;
  }

  if (prevPropsHaveNoDate && newPropsHaveNoDate) {
    return areMissionDatasEqual(prevProps.missionData, newProps.missionData);
  }
  if (prevPropsHaveNoDate !== newPropsHaveNoDate) {
    return false;
  }
  return (
    areDatesEqual(
      prevProps.currentDate as Date,
      newProps.currentDate as Date,
    ) && areMissionDatasEqual(prevProps.missionData, newProps.missionData)
  );
};

function Mission({ missionData, currentDate, timer }: Props): ReactElement {
  useEffect(() => {
    console.log(`Mission for ${missionData.mission} rendered`);
  });

  if (timer && currentDate === undefined) {
    throw new Error('Countdown is enabled but currentDate is not defined');
  }

  return (
    <div className="Mission">
      <span>Mission: {missionData.mission}</span>
      <span>Location: {missionData.location}</span>
      <span>Vehicle: {missionData.vehicle}</span>
      <span>Vehicle: {missionData.vehicle}</span>
      {timer ? (
        <Timer
          currentDate={currentDate as Date}
          eventDate={getLaunchDate(missionData)}
        />
      ) : null}
    </div>
  );
}

export default memo(Mission, areMissionPropsEqual);
