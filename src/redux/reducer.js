import { nanoid } from "nanoid";

import { ADD_ITEM, DELETE_ITEM } from "./types";

const initialStore = {
  buyList: [
    {
      id: nanoid(),
      name: "Корм для котов",
      urgency: true,
      type: "food",
    },
    {
      id: nanoid(),
      name: "Стиральный порошок",
      urgency: false,
      type: "spend",
    },
  ],
  notes: []
};

const reducer = (store = initialStore, {type, payload}) => {
  switch(type) {
    case ADD_ITEM:
      return {...store, buyList: [...store.buyList, payload]};
    case DELETE_ITEM:
      console.log(payload);
      return {...store, buyList: store.buyList.filter(item => item.id !== payload)};
    default:
      return store;
  }
};

export default reducer;
