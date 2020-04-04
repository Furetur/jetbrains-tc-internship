import React, { ReactElement } from 'react';
import './theme.css';
import './App.css';
import Header from './components/Header/Header';
import MissionList from './components/MissionsList/MissionList';
import data from './missionsData';
import sortMissionDatasAppripriately from './utils/sortMissionDatasAppropriately';
import { getCurrentDateNoSeconds } from './utils/date-utils';

function App(): ReactElement {
  const appOpenDate = getCurrentDateNoSeconds();
  const dataSortedAppripriately = sortMissionDatasAppripriately(
    data,
    appOpenDate,
  );

  return (
    <div className="App">
      <Header />
      <main>
        <MissionList missions={dataSortedAppripriately} />
      </main>
    </div>
  );
}

export default App;
