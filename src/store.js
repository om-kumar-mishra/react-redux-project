// import { createStoreHook } from "react-redux";
import {applyMiddleware, createStore } from 'redux';
import rootReducer  from "./reducers/index";
import thunk from 'redux-thunk';

const store=createStore(
    rootReducer,
    applyMiddleware(thunk)
    );

export default store;