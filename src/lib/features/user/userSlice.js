import { createSlice } from '@reduxjs/toolkit';
const jwt = require("jsonwebtoken")
export const userSlice = createSlice({
  name: 'cart',
  initialState: {
    token: null,
    email: null,
    name: null

  },
  reducers: {
    setUser: (state, action) => {
      let {token, email, name} = action.payload;
      state.token = token
      state.email = email
      state.name = name
    }, 
  },
});


export const { setUser } = userSlice.actions;

export default userSlice.reducer;