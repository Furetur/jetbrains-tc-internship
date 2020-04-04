import React, { ReactElement } from 'react';
import {
  compareDates,
  areDatesEqual,
  differenceInDaysHoursMinutes,
} from '../../utils/date-utils';
import './Timer.css';

interface Props {
  eventDate: Date;
  currentDate: Date;
}

export default function Timer({ eventDate, currentDate }: Props): ReactElement {
  const countDown = compareDates(eventDate, currentDate) > 0;
  const eventIsNow = !countDown ? areDatesEqual(eventDate, currentDate) : false;

  const [daysLeft, hoursLeft, minutesLeft] = !countDown
    ? differenceInDaysHoursMinutes(eventDate, currentDate)
    : differenceInDaysHoursMinutes(currentDate, eventDate);

  return eventIsNow ? (
    <p className="Timer">
      <span className="number">Now</span>
    </p>
  ) : (
    <p className="Timer">
      <span id="number-of-days" className="number">
        {daysLeft}
      </span>
      <span className="unit"> {daysLeft === 1 ? 'day' : 'days'} </span>
      <span className="number">{hoursLeft}</span>
      <span className="unit"> {hoursLeft === 1 ? 'hour' : 'hours'} </span>
      <span className="number">{minutesLeft}</span>
      <span className="unit"> {minutesLeft === 1 ? 'minute' : 'minutes'}</span>
      {!countDown ? <span className="optional-ago"> ago</span> : null}
    </p>
  );
}
