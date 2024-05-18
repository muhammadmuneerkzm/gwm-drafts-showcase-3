import { createSlice } from '@reduxjs/toolkit';
const jwt = require("jsonwebtoken")
export const userSlice = createSlice({
  name: 'cart',
  initialState: {
    loading: false,
    showNav: true
  },
  reducers: {
    setUser: (state, action) => {
      let {token, email} = action.payload;
      state.token = token
      state.email = email
    }, 
  },
});


export const { setUser } = userSlice.actions;

export default userSlice.reducer;