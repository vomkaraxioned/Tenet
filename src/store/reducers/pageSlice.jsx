import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name:"pageSlice",
  initialState:{websiteName:"",pageName:""},
  reducers:{
    speedTest:(state,data)=>{
      const {website,page} = data.payload;
      // setTimeout(()=>window.location.href = "page-speed",1000)
      alert("called1")
      return { ...state,websiteName:website,pageName:page }
    }
  }
});

export const { speedTest } = pageSlice.actions;
export default pageSlice.reducer;
