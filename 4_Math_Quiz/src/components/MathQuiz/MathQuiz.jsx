import React, { useState, useEffect } from "react";
import styles from "./MathQuiz.module.css";
import Answer from "../Answer/Answer";

const MathQuiz = () => {
  const [question, setQuestion] = useState({ num1: 0, num2: 0 });
  const [score, setScore] = useState(0);

  useEffect(() => {
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    setQuestion({
      num1: Math.floor(Math.random() * 10) + 1,
      num2: Math.floor(Math.random() * 10) + 1,
    });
  };

  const updatePoints = (points) => {
    setScore((prevScore) => prevScore + points);
    setTimeout(generateQuestion, 2000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
      <h3>Реши пример</h3>
      <p>
        {question.num1} + {question.num2} = ?
      </p>
      <Answer correctAnswer={question.num1 + question.num2} updatePoints={updatePoints} />
      <p>Счёт: {score}</p>
    </div>
  );
};

export default MathQuiz;
