import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/loginSlice";
import pageDataReducer from "./reducers/dataSlice";
import speedTestReducer from "./reducers/pageSlice";

const store = configureStore({
  reducer:{
    loginReducer,
    pageDataReducer,
    speedTestReducer
  }
});

export default store;
