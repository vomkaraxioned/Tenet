import { createSlice } from "@reduxjs/toolkit";

const isLogin = () => {
  const loginDetails = localStorage.getItem("tenet");
  if (loginDetails) {
    return JSON.parse(loginDetails)
  }

  return false
}

const setStorage = (data) => {
  localStorage.setItem("tenet", JSON.stringify(data[0]));
}

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: { login: isLogin() },
  reducers: {
    login: (state, data) => {
      setStorage(data.payload);
      return { ...state, login: isLogin() }
    },
    logout: (state) => {
      localStorage.removeItem("tenet");
      return { ...state, login: false }
    }
  }
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
