import React, { useRef, useEffect } from "react";
// import styles from './ValueDisplay.module.css'

const ValueDisplay = ({ inputValue }) => {
    const prevValueRef = useRef();
      useEffect(() => {
        prevValueRef.current = inputValue;     
    }, [inputValue]);

    return (
        <div>
            <p>Текущее значение: {inputValue}</p>
            <p>Предыдущее значение: {prevValueRef.current ?? "Нет предыдущего значения"}</p>
        </div>
    );
};

export default ValueDisplay;
