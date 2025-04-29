import React, { useState, useEffect } from 'react';
import ClickButton from './Components/ClickButton';
import Scoreboard from './Components/Scoreboard';
import Timer from './Components/Timer';
import StartButton from './Components/StartButton';
import ProgressBar from './Components/ProgressBar';
import GameOverModal from './Components/GameOverModal';
import { appContainerStyles } from './styles/appStyles';

function App() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const totalTime = 10;

  useEffect(() => {
    let timer;
    if (isPlaying && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (isPlaying && timeLeft === 0) {
      setIsPlaying(false);
      setShowModal(true);  // 👈 show the custom modal
    }
    return () => clearTimeout(timer);
  }, [timeLeft, isPlaying]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(totalTime);
    setIsPlaying(true);
    setShowModal(false);
  };

  const handleClick = () => {
    if (isPlaying) {
      setScore(score + 1);
    }
  };

  return (
    <div style={appContainerStyles}>
      <h1>Click Game!</h1>
      <ProgressBar timeLeft={timeLeft} totalTime={totalTime} />
      <Timer timeLeft={timeLeft} />
      <Scoreboard score={score} />
      <StartButton onStart={startGame} />
      <br />
      <ClickButton onClick={handleClick} isPlaying={isPlaying} />
      {showModal && <GameOverModal score={score} onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default App;
