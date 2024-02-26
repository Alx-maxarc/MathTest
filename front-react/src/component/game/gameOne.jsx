import React, { useState, useEffect } from 'react';
import ResponseForm from '../ResponseForm';

const SimpleMathTest = () => {
  const numberArray = [-9, -8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [randomNumber, setRandomNumber] = useState(0);
  const [result, setResult] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleStartStop = () => {
    const newArray = Array.from({ length: 7 }, () => {
      return numberArray[Math.floor(Math.random() * numberArray.length)];
    });
    setFormSubmitted(false);
    const newResult = newArray.reduce((acc, valeur) => acc + valeur, 0);
    setResult(newResult);
  
    let currentIndex = 0;
  
    const intervalId = setInterval(() => {
      const newRandomNumber = newArray[currentIndex];
      setRandomNumber(newRandomNumber);
  
      currentIndex++;
  
      if (currentIndex === 7) {
        clearInterval(intervalId);
      }
    }, 1000);
  };

  return (
    <div> 
      <h2>{randomNumber || 'Ready to play...'}</h2>
      <button onClick={handleStartStop}>
        Prêt ?
      </button>
      {!formSubmitted && <ResponseForm result={result} niveau={'1'} setFormSubmitted={setFormSubmitted} />}
    </div>
  );
};

export default SimpleMathTest;
