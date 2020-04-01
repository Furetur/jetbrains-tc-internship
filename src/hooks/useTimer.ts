import { useState } from 'react';

export const useTimer = (until: Date) => {
  const start = Date.now();
  const initialTimer = until.getTime() - start;
  const [curTimer, updateTimer] = useState(initialTimer);

  setInterval(() => {
    const curDiff = until.getTime() - Date.now();
    updateTimer(curDiff);
  }, 1000);
  return curTimer;
};
