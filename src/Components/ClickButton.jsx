import React from 'react';
import { clickButtonStyles, clickButtonDisabledStyles } from '../styles/buttonStyles';

function ClickButton({ onClick, isPlaying }) {
  return (
    <button
      onClick={onClick}
      disabled={!isPlaying}
      style={isPlaying ? clickButtonStyles : clickButtonDisabledStyles}
    >
      Click Me!
    </button>
  );
}

export default ClickButton;
