import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import globalReducer from "./globalReducer";

// CORE REDUCER
const reducer = combineReducers({ homeReducer, globalReducer });

export default reducer;
