import { legacy_createStore,applyMiddleware,combineReducers } from "redux";
import { stockReducer } from "./stock/stockReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({stockReducer})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))