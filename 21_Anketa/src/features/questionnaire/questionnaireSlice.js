import { createSlice } from "@reduxjs/toolkit";

import initialState from "./initialState";

const questionnaireSlice = createSlice({
    name: "questionnaire",
    initialState: initialState,
    reducers: {
        addSelectAnswer: (store, { payload }) => {
            const questionItem = store.questions.find(item => item.id === payload.id);
            if (questionItem) {
                questionItem.selectedAnswerIndex = payload.index
            }
        },
        addResult: (store) => {
            const result = store.questions.reduce((acc, elem) => {
                if (elem.selectedAnswerIndex === elem.correctAnswerIndex) {
                    return acc + 1
                }
                return acc;
            }, 0);
            store.score = result;
            store.isSubmitted = true;
        },
        setValidationErrors: (store) => {
            store.questions.forEach(q => {
                q.hasError = q.selectedAnswerIndex === null;
            });
        },
        resetQuestionnaire: () => initialState
    }
});

export const { addSelectAnswer, addResult, setValidationErrors, resetQuestionnaire } = questionnaireSlice.actions;

export default questionnaireSlice.reducer;