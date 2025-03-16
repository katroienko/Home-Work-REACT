import MathQuiz from "../MathQuiz/MathQuiz"; 
import React, { useState, useEffect } from "react";
import styles from "./Answer.module.css";

const Answer = ({ correctAnswer, updatePoints }) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (userAnswer) {
      const timeout = setTimeout(() => {
        setUserAnswer("");
        setMessage("");
      }, 4000);

      return () => clearTimeout(timeout);
    }
  }, [userAnswer]);

  const checkAnswer = () => {
    if (parseInt(userAnswer) === correctAnswer) {
      updatePoints(1);
      setMessage("Правильно!");
    } else {
      setMessage("Неправильно!");
    }
  };

  return (
    <div className={styles.answerContainer}>
      <input
        type="number"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
      <button onClick={checkAnswer}>Ответить</button>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default Answer;
