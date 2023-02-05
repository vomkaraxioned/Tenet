import { createSlice } from "@reduxjs/toolkit";

const isLogin = ()=>{
  const loginDetails = localStorage.getItem("tenet");
  if(loginDetails) {
    return JSON.parse(loginDetails)
  }
  
  return false
}

const setStorage = (data)=>{
  localStorage.setItem("tenet",JSON.stringify(data));
}

const loginSlice = createSlice({
  name:"loginSlice",
  initialState:{login:isLogin()},
  reducers:{
    login:(state,data)=>{
      setStorage(data.payload);
      return { ...state, login: isLogin() }
    }
  }
});

export const { login } = loginSlice.actions;

export default loginSlice.reducer;
