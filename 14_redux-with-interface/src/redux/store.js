import { legacy_createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

import reducer from "./reducer";

const enhancer = devToolsEnhancer();

const store = legacy_createStore(reducer, enhancer);
/*
const lagacy_createStore = (reducer, initialStore) => {
    if(initialStore) {
        return reducer(initialStore);
    }
    return reducer();
}
*/

export default store;
