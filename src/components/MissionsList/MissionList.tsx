import React, { ReactElement } from 'react';
import { MissionData } from '../../missionsData';
import Mission from '../Mission/Mission';
import './MissionList.css';

interface Props {
  missions: MissionData[];
}

export default function MissionList({ missions }: Props): ReactElement {
  return (
    <div className="MissionList">
      {missions.map((mission, index) => (
        <Mission key={index} missionData={mission} />
      ))}
    </div>
  );
}
