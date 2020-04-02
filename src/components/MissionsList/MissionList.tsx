import React, { ReactElement, useEffect } from 'react';
import { MissionData } from '../../missionsData';
import Mission from '../Mission/Mission';
import './MissionList.css';
import useCurrentDateNoSeconds from '../../hooks/useCurrentDate';
import isMissionFullDateGiven from '../../utils/isMissionFullDateGiven';

interface Props {
  missions: MissionData[];
}

export default function MissionList({ missions }: Props): ReactElement {
  const currentDateNoSeconds = useCurrentDateNoSeconds(1000);

  useEffect(() => {
    console.log('Mission list rendered');
  });

  return (
    <div className="MissionList">
      {missions.map((mission, index) =>
        isMissionFullDateGiven(mission) ? (
          <Mission
            key={index}
            missionData={mission}
            currentDate={currentDateNoSeconds}
            timer
          />
        ) : (
          <Mission key={index} missionData={mission} timer={false} />
        ),
      )}
    </div>
  );
}
