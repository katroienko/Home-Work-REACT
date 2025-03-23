import { useState, useEffect } from "react";
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
    if (userAnswer == correctAnswer) {
      updatePoints(1);
      setMessage("Правильно!");
    } else {
      setMessage("Неправильно!");
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        checkAnswer();
      }}
      className={styles.answerContainer}
    >
      <input
        type="number"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
      <button type="submit">Ответить</button>
      <p className={styles.message}>{message}</p>
    </form>
  );
};

export default Answer;
