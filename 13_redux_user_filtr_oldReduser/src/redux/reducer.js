import { SET_FILTER  } from "./types";
const initialState = {
    users: [
      { id: 1, name: 'Alex Johnson'},
      { id: 2, name: 'Maria Smith' },
      { id: 3, name: 'Dmitry Kuznetsov'},
      { id: 4, name: 'Elena Popova'},
      { id: 5, name: 'Sergey Sokolov'}
    ],
    filter: ''
  };
  
const reducer = (store = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...store,
        filter: action.payload
      };
    default:
      return store;
  }
 
}
export default reducer;