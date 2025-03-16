import React, { useState, useEffect } from "react";
import styles from "./MathQuiz.module.css";
import Answer from "../Answer/Answer";

const MathQuiz = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [score, setScore] = useState(0);
  // const [message, setMessage] = useState("");
  useEffect(() => {

    generateQuestion();
    
  }, []);

  const generateQuestion = () => {
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
    // setMessage("");
  };

  const updatePoints = (points) => {
    setScore(score + points);
    setTimeout(generateQuestion, 2000);
  };

  return (
    // 
    <div className={styles.container}>
      <div className={styles.loader}></div>
      <h3>Реши пример</h3>
      <p>
        {num1} + {num2} = ?
      </p>
      <Answer correctAnswer={num1 + num2} updatePoints={updatePoints} />
      <p>Счёт: {score}</p>
    </div>
  );
};

export default MathQuiz;