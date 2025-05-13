import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectQuote } from "../../redux/quote/quote-selector";
import { fetchQuote } from "../../redux/quote/quote-thunks";

import styles from "./Quote.module.css";

const Quote = () => {

    const { quote, author, loading, error } = useSelector(selectQuote);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchQuote())
    }, [dispatch]);

    const onChangeQuote = () => {
        dispatch(fetchQuote())
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Random Quote Generator</h2>
            <p className={styles.text}>"{quote}"</p>
            <p className={styles.author}>- {author}</p>
            {loading && <p className={styles.loading}>Loading...</p>}
            {error && <p className={styles.error}>{error}</p>}
            <button onClick={onChangeQuote} className={styles.btn}>New Quote</button>
        </div>
    );
};

export default Quote;