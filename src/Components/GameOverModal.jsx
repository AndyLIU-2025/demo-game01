import React from 'react';
import { overlayStyle, modalStyle, closeButtonStyle } from '../styles/modalStyles';

function GameOverModal({ score, onClose }) {
  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2>Game Over</h2>
        <p>Your final score is: <strong>{score}</strong></p>
        <button onClick={onClose} style={closeButtonStyle}>Close</button>
      </div>
    </div>
  );
}

export default GameOverModal;
