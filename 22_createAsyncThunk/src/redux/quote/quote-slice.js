import { createSlice } from "@reduxjs/toolkit";

import { fetchQuote } from "./quote-thunks";

const initialState = {
    quote: "",
    author: "",
    loading: false,
    error: null
}

const pending = (store) => {
    store.loading = true;
    store.error = null;
};

const rejected = (store, { payload }) => {
    store.loading = false;
    store.error = payload;
};

const quoteSlice = createSlice({
    name: "quote",
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuote.pending, pending)
            .addCase(fetchQuote.fulfilled, (store, { payload }) => {
                store.loading = false;
                store.quote = payload.q;
                store.author = payload.a;
            },)
            .addCase(fetchQuote.rejected, rejected)
    }
});

export default quoteSlice.reducer;