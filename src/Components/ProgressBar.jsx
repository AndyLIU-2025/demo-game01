import React from 'react';
import { progressBarContainer, progressBarFiller } from '../styles/progressBarStyles';

function ProgressBar({ timeLeft, totalTime }) {
  const width = (timeLeft / totalTime) * 100;

  return (
    <div style={progressBarContainer}>
      <div style={{ ...progressBarFiller, width: `${width}%` }} />
    </div>
  );
}

export default ProgressBar;
