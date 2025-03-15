import styles from './MathQuiz.module.css';

import React, { useState, useEffect } from "react";

const MathQuiz = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    
    setTimeout(() => {
      generateQuestion();
    }, 3000);
    
    // setTimeout
  }, [message]);

  const generateQuestion = () => {
    const newNum1 = Math.floor(Math.random() * 10) + 1;
    const newNum2 = Math.floor(Math.random() * 10) + 1;
    setNum1(newNum1);
    setNum2(newNum2);
    setUserAnswer("");
    setMessage("");
   
  };

  const checkAnswer = () => {
    const correctAnswer = num1 + num2;
    if (parseInt(userAnswer) === correctAnswer) {
      setScore(score + 1);
      setMessage("Правильно!");
    } else {
      setMessage("Неправильно!");
    }

    
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.loader}></h2>
      <p>
        {num1} + {num2} = ?
      </p>
      <input
        type="number"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
      <button onClick={checkAnswer}>Ответить</button>
      <p>Счёт: {score}</p>
      <div className={styles.message}><p>{message}</p></div>
     
    </div>
  );
};

export default MathQuiz;