import { createSlice } from '@reduxjs/toolkit';
const jwt = require("jsonwebtoken")
export const navSlice = createSlice({
  name: 'cart',
  initialState: {
    location : ''
  },
  reducers: {
    setNav: (state, action) => {
      let {location} = action.payload;
      state.location = location
    }, 
  },
});


export const { setNav } = navSlice.actions;

export default navSlice.reducer;