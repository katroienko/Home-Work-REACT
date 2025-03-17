import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageProvider";
import styles from "./Button.module.css"
const Button = () => {
    const { language, toggleLanguage } = useContext(LanguageContext);

    return <button className={styles.btn} onClick={toggleLanguage}>{language}</button>;
};

export default Button;