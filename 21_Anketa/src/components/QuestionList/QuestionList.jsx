import { useSelector, useDispatch } from "react-redux";

import Question from "../Question/Question";
import Result from "../Result/Result";

import { selectAllQuestions, selectIsSubmitted } from "../../features/questionnaire/questionnaireSelector";
import { addResult, setValidationErrors, resetQuestionnaire } from "../../features/questionnaire/questionnaireSlice";

import styles from "./QuestionList.module.css";

const QuestionList = () => {

    const questionList = useSelector(selectAllQuestions);
    const isFormSubmitted = useSelector(selectIsSubmitted);
    const dispatch = useDispatch();

    const questionElements = questionList.map(question => (
        <Question key={question.id} question={question} />
    ));

    const handleSubmit = () => {
        dispatch(setValidationErrors());
        const allQuestionsAnswered = questionList.every(question => question.selectedAnswerIndex !== null);

        if (allQuestionsAnswered) {
            dispatch(addResult());
        }
    };

    const handleReset = () => {
        dispatch(resetQuestionnaire());
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Questionnaire</h1>

            <ul className={styles.ul}>
                {questionElements}
            </ul>

            <div className={styles.btnBox}>
                <button
                    className={styles.btn}
                    onClick={isFormSubmitted ? handleReset : handleSubmit}
                >
                    {isFormSubmitted ? "Reset" : "Submit"}
                </button>
            </div>

            <Result />
        </div>
    );
};

export default QuestionList;
