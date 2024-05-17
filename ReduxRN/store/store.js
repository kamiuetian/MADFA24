import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;

//Redux Thunk
//Redux saga   ----> Generator function
