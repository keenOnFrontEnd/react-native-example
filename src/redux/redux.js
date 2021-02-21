import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import { photoReducer } from "./reducers";

const rootReducer = combineReducers({
    data: photoReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
