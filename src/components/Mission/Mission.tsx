import React, { ReactElement, memo, useEffect } from 'react';
import { MissionData, DefinedTimeMissionData } from '../../missionsData';
import './Mission.css';
import { areDatesEqual, getLaunchDate } from '../../utils/date-utils';
import areMissionDatasEqual from '../../utils/areMissionDatasEqual';
import Timer from '../Timer/Timer';
import {
  getReadableDateFromMissionData,
  getReadableLocalDate,
} from '../../utils/getReadableDate';
import launchAlreadyHappened from '../../utils/launchAlreadyHappened';
import isMissionFullDateGiven from '../../utils/isMissionFullDateGiven';
import isMissionFullDateGivenExceptMinutes from '../../utils/isMissionFullDateGivenExceptMinutes';

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

const launchIsNow = (
  missionData: DefinedTimeMissionData,
  currentDate: Date,
): boolean => {
  const launchDate = getLaunchDate(missionData);
  return areDatesEqual(launchDate, currentDate);
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
            <span>Vehicle </span>
            {missionData.vehicle}
          </li>
          <li>
            <span>Location </span>
            {missionData.location}
          </li>
          {isMissionFullDateGiven(missionData) ||
          isMissionFullDateGivenExceptMinutes(missionData) ? (
            <li>
              <span>Launch Date (Local) </span>
              {getReadableLocalDate(missionData)}
            </li>
          ) : null}
          <li>
            <span>Launch Date (UTC) </span>
            {getReadableDateFromMissionData(missionData)}
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
              : launchIsNow(
                  missionData as DefinedTimeMissionData,
                  currentDate as Date,
                )
              ? 'The launch is'
              : 'The launch is in'}
          </span>
          <Timer
            currentDate={currentDate as Date}
            eventDate={getLaunchDate(missionData as DefinedTimeMissionData)}
          />
        </div>
      ) : null}
    </div>
  );
}

export default memo(Mission, areMissionPropsEqual);
