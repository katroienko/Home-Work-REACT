import { createAsyncThunk } from "@reduxjs/toolkit";

import { getQuoteApi } from "../../api/quote-api";

export const fetchQuote = createAsyncThunk(
    "quote/fetch",
    async (_, { rejectWithValue }) => {
        try {
            const data = await getQuoteApi();
            return data
        } catch (error) {
            return rejectWithValue(error?.message)
        }
    }
);