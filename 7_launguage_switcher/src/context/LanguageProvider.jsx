import { createContext, useState } from "react";


export const LanguageContext = createContext();
console.log(LanguageContext);

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("ukrainian");

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "ukrainian" ? "english" : "ukrainian"));
    };


    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageProvider;