import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageProvider";
import styles from "./Text.module.css";
const Text = () => {

    const { language } = useContext(LanguageContext);


    return (
        <div className={styles.text}>
            {language === "ukrainian"
                ? "Встановлена Українська мова"
                : "The English language is set"}
        </div>
    );
};

export default Text;