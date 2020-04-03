import React, { ReactElement, memo, useEffect } from 'react';
import { MissionData, DefinedTimeMissionData } from '../../missionsData';
import './Mission.css';
import {
  areDatesEqual,
  getLaunchDate,
  compareDates,
} from '../../utils/date-utils';
import areMissionDatasEqual from '../../utils/areMissionDatasEqual';
import Timer from '../Timer/Timer';
import isMissionFullDateGiven from '../../utils/isMissionFullDateGiven';
import getReadableDateFromMissionData from '../../utils/getReadableDateFromMissionData';

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

const launchAlreadyHappened = (
  missionData: DefinedTimeMissionData,
  currentDate: Date,
): boolean => {
  const launchDate = getLaunchDate(missionData);
  return compareDates(launchDate, currentDate) < 0;
};

function Mission({ missionData, currentDate, timer }: Props): ReactElement {
  useEffect(() => {
    console.log(`Mission for ${missionData.mission} rendered`);
  });

  if (timer && currentDate === undefined) {
    throw new Error('Countdown is enabled but currentDate is not defined');
  }

  return (
    <div className="Mission card">
      <h1>{missionData.mission}</h1>
      <div className="body">
        <ul className="data-list">
          <li>
            <span>Vehicle</span>
            {missionData.vehicle}
          </li>
          <li>
            <span>Location</span>
            {missionData.location}
          </li>
          <li>
            <span>Launch Date</span>{getReadableDateFromMissionData(missionData)}
          </li>
        </ul>
      </div>
      {timer ? (
        <div className="footer">
          <span className="timer-label">
            {launchAlreadyHappened(
              missionData as DefinedTimeMissionData,
              currentDate as Date,
            )
              ? 'The launch was'
              : 'The launch is in'}
          </span>
          <Timer
            currentDate={currentDate as Date}
            eventDate={getLaunchDate(missionData)}
          />
        </div>
      ) : null}
    </div>
  );
}

export default memo(Mission, areMissionPropsEqual);
