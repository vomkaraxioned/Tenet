import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/loginSlice";
import pageDataReducer from "./reducers/dataSlice";

const store = configureStore({
  reducer:{
    loginReducer,
    pageDataReducer
  }
});

export default store