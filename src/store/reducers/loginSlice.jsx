import { createSlice } from "@reduxjs/toolkit";

const isLogin = ()=>{
  const loginDetails = localStorage.getItem("tenet");
  if(loginDetails) {
    // window.location.href = "dashboard";
    return JSON.parse(loginDetails)
  }
  return {}
}

const setStorage = (data)=>{
  localStorage.setItem("tenet",JSON.stringify(data));
}

const loginSlice = createSlice({
  name:"loginSlice",
  initialState:isLogin(),
  reducers:{
    login:(state,data)=>{
      setStorage(data.payload);
      state = isLogin();
    }
  }
});

export const { login } = loginSlice.actions;

export default loginSlice.reducer;
