import React, { useState, useEffect } from 'react';
import ResponseForm from '../ResponseForm';

const DifficileMathTest = () => {
  const numberArray = [];
  for (let i = -999; i <= 999; i++) {
    if (i !== 0) {
      numberArray.push(i);
    }
  }
  
  const [randomNumber, setRandomNumber] = useState(0);
  const [result, setResult] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);



  const handleStartStop = () => {
    const newArray = Array.from({ length: 7 }, () => {
      return numberArray[Math.floor(Math.random() * numberArray.length)];
    });
    console.log(newArray)

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
        // Réinitialisez currentIndex ici si vous souhaitez répéter l'opération après l'arrêt
      }
    }, 1000);
  };
  
  console.log(result)

  return (
    <div>
      <h2>{randomNumber || 'Ready to play...'}</h2>
      <button onClick={handleStartStop}>
        Prêt ?
      </button>
      {!formSubmitted && <ResponseForm result={result} niveau={'100'} setFormSubmitted={setFormSubmitted} />}
    </div>
  );
};

export default DifficileMathTest;
