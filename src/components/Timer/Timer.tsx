import React, { ReactElement } from 'react';
import {
  compareDates,
  areDatesEqual,
  differenceInDaysHoursMinutes,
} from '../../utils/date-utils';

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
    <div>The event is now</div>
  ) : (
    <div>
      {!countDown ? 'The event was ' : 'The event is in '}
      {daysLeft} days {hoursLeft} hours {minutesLeft} minutes
      {!countDown ? ' ago' : ''}
    </div>
  );
}
