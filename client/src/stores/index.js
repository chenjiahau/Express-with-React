import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import loadingReducer from "./reducers/loading";
import counterReducer from "./reducers/counter";

const rootReducer = combineReducers({
  loading: loadingReducer,
  counter: counterReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
