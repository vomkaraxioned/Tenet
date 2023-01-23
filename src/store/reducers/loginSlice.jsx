import { createSlice } from "@reduxjs/toolkit"

const isLogin = ()=>{
  const loginDetails = localStorage.getItem("tenet");
  // loginDetails?
}

const loginSlice = createSlice({
  name:"loginSlice",
  initialState:isLogin(),
  reducers:{
    submit:(state,data)=>{}
  }
});