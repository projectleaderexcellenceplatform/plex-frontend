import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

// IMPORTING REDUCERS
import prodjectListRed from "./reducer";

const middleware = applyMiddleware(thunk, logger);

const rootReducer = combineReducers({
	prodjectListRed,
});

const store = createStore(rootReducer, middleware);
export default store;
