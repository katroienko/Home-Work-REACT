import { nanoid } from "nanoid";

import { ADD_ITEM, DELETE_ITEM } from "./types";

export const addBuListItem = data => ({
    type: ADD_ITEM,
    payload: {
        ...data,
        id: nanoid(),
    },
});

export const deleteBuyListItem = payload => ({
    type: DELETE_ITEM,
    payload,
})