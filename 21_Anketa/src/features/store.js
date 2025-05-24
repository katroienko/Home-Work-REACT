import { configureStore } from "@reduxjs/toolkit";

import questionnaireReducer from "./questionnaire/questionnaireSlice";

const store = configureStore({
    reducer: {
        questionnaire: questionnaireReducer
    }
})

export default store;