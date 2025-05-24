import { useSelector } from "react-redux";

import { selectScore } from "../../features/questionnaire/questionnaireSelector";

import styles from "./Result.module.css";

const Result = () => {

    const result = useSelector(selectScore);

    return (
        <div className={styles.container}>
            <p className={styles.text}>
                Your Score: <span className={styles.text}>{result}</span>
            </p>
        </div>
    )
};

export default Result;