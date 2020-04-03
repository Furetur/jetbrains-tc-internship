import React, { ReactElement } from 'react';
import logo from './logo.svg';
import './theme.css';
import './App.css';
import Header from './components/Header/Header';
import MissionList from './components/MissionsList/MissionList';
import data from './missionsData';

function App(): ReactElement {
  return (
    <div className="App">
      <Header />
      <main>
        <MissionList missions={data} />
      </main>
    </div>
  );
}

export default App;
