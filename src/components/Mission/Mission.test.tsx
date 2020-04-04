import React from 'react';
import { MissionData } from '../../missionsData';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Mission from './Mission';

describe('Mission', () => {
  let container: Element | null = null;

  const missionData: MissionData = {
    mission: 'The Best Mission',
    vehicle: 'Falcon',
    location: 'SpaceX',
    launch: {
      years: 2020,
      months: 2,
      date: 3,
      hours: 4,
      minutes: 5,
      quarter: 2,
    },
  };

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    if (container === null) {
      return;
    }
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test('should display the mission name', () => {
    act(() => {
      render(
        <Mission timer={false} missionData={missionData} />,
        container as Element,
      );
    });
    expect(container?.querySelector('h1')).toHaveTextContent(
      'The Best Mission',
    );
  });

  test('should display the mission location', () => {
    act(() => {
      render(
        <Mission timer={false} missionData={missionData} />,
        container as Element,
      );
    });
    expect(container?.querySelectorAll('.data-list li')[1]).toHaveTextContent(
      'Location SpaceX',
    );
  });

  test('should display the mission vehicle', () => {
    act(() => {
      render(
        <Mission timer={false} missionData={missionData} />,
        container as Element,
      );
    });
    expect(container?.querySelectorAll('.data-list li')[0]).toHaveTextContent(
      'Vehicle Falcon',
    );
  });

  test('should display full mission utc date', () => {
    act(() => {
      render(
        <Mission timer={false} missionData={missionData} />,
        container as Element,
      );
    });
    expect(container?.querySelectorAll('.data-list li')[3]).toHaveTextContent(
      'Launch Date (UTC) 3 Mar 2020 at 4:05',
    );
  });

  test('should display full mission utc date without minutes', () => {
    const missionData1: MissionData = {
      mission: 'The Best Mission',
      vehicle: 'Falcon',
      location: 'SpaceX',
      launch: {
        years: 2020,
        months: 2,
        date: 3,
        hours: 4,
        minutes: null,
        quarter: 2,
      },
    };
    act(() => {
      render(
        <Mission timer={false} missionData={missionData1} />,
        container as Element,
      );
    });
    expect(container?.querySelectorAll('.data-list li')[3]).toHaveTextContent(
      'Launch Date (UTC) 3 Mar 2020 at 4:--',
    );
  });

  test('should display timer if timer=true', () => {
    const curDate = new Date();
    act(() => {
      render(
        <Mission
          timer={true}
          missionData={missionData}
          currentDate={curDate}
        />,
        container as Element,
      );
    });
    expect(container?.querySelector('.Timer')).toBeInTheDocument();
  });
});
