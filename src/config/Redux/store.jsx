import { combineReducers, createStore } from "redux";
import reducer from "./Reducer/Reducer";

const store = createStore(reducer);

export default store;
