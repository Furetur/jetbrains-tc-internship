import React, { ReactElement } from 'react';
import { MissionData } from '../../missionsData';
import './Mission.css';
import { useTimer } from '../../hooks/useTimer';

interface Props {
  missionData: MissionData;
}

export default function Mission({ missionData }: Props): ReactElement {
  const date = new Date('August 19, 2020 23:15:30');
  const countdown = useTimer(date);

  return (
    <div className="Mission">
      <span>Mission: {missionData.mission}</span>
      <span>Location: {missionData.location}</span>
      <span>Vehicle: {missionData.vehicle}</span>
      <span>Vehicle: {missionData.vehicle}</span>
      <span>TimeLeft: {Math.floor(countdown / 1000)}</span>
    </div>
  );
}
