import { createSlice } from "@reduxjs/toolkit";

const pageDataSlice = createSlice({
  name: "loginSlice",
  initialState: {data:[]},
  reducers: {
    pageData: (state, data) => {
      return { ...state, data: data.payload }
    }
  }
});

export const { pageData } = pageDataSlice.actions;

export default pageDataSlice.reducer;