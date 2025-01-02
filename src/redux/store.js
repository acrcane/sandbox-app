import { devToolsEnhancer } from "@redux-devtools/extension";
import { combineReducers, createStore } from "redux";
import { friendsReducer } from "./friendsReducer";

const rootReducer = combineReducers({
    profiles: friendsReducer,
})
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);