const initialState = {
    questions: [
      {
        id: 1,
        question: "Question 1?",
        options: ["Option 1", "Option 2"],
        correctAnswerIndex: 0,
        selectedAnswerIndex: null,
        hasError: false,
      },
      {
        id: 2,
        question: "Question 2?",
        options: ["Option 1", "Option 2"],
        correctAnswerIndex: 1,
        selectedAnswerIndex: null,
        hasError: false,
      },
      {
        id: 3,
        question: "Question 3?",
        options: ["Option 1", "Option 2"],
        correctAnswerIndex: 0,
        selectedAnswerIndex: null,
        hasError: false,
      },
      {
        id: 4,
        question: "Question 4?",
        options: ["Option 1", "Option 2"],
        correctAnswerIndex: 0,
        selectedAnswerIndex: null,
        hasError: false,
      },
      {
        id: 5,
        question: "Question 5?",
        options: ["Option 1", "Option 2"],
        correctAnswerIndex: 1,
        selectedAnswerIndex: null,
        hasError: false,
      },
    ],
    score: 0,
    isSubmitted: false
  };

  export default initialState;