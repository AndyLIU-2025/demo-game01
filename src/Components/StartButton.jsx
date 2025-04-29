import React from 'react';
import { startButtonStyles } from '../styles/buttonStyles';

function StartButton({ onStart }) {
  return (
    <button
      onClick={onStart}
      style={startButtonStyles}
    >
      Start Game
    </button>
  );
}

export default StartButton;
