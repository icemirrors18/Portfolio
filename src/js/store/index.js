// src/js/store/index.js

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware/middleware";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENTSION_COMPOSE
|| compose;

const store = createStore(
	rootReducer,
	applyMiddleware(forbiddenWordsMiddleware)
);

export default store;