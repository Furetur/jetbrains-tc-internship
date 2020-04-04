import { useState, useEffect, useRef } from 'react';
import { getCurrentDateNoSeconds, areDatesEqual } from '../utils/date-utils';

const useCurrentDateNoSeconds = (updateEvery: number): Date => {
  const initialDateNoSeconds = getCurrentDateNoSeconds();
  // store date in state
  const [date, updateDate] = useState(initialDateNoSeconds);
  // ref to access actual (updated every second) date from the useEffect callback
  const currentDateRef = useRef(date);
  currentDateRef.current = date;

  useEffect(() => {
    const intervalId = setInterval(() => {
      // accessing the currentDate
      const currentDate = currentDateRef.current;
      const newDateNoSeconds = getCurrentDateNoSeconds();
      // if the current date without seconds != date, that is stored in state (without seconds) -> the state should be updated
      // it updated the state only when necessary
      if (!areDatesEqual(currentDate, newDateNoSeconds)) {
        updateDate(newDateNoSeconds);
      }
      console.log(
        `Updated internal time to ${new Date().getSeconds()} seconds`,
      );
    }, updateEvery);
    //clean up code that fires on componentWillUnmount
    return (): void => {
      clearInterval(intervalId);
    };
  }, [updateEvery]);

  return date;
};

export default useCurrentDateNoSeconds;
