// lib/store.js

// import { configureStore } from '@reduxjs/toolkit';
// import todosReducer from './features/cart/cartSlice';

// export const makeStore = () => {
//   return configureStore({
//     reducer: {
//       todos: todosReducer,
//     },
//   });
// };
 
// lib/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice'; // Adjust the import based on your actual reducer path
import userReducer from './features/user/userSlice'; // Adjust the import based on your actual reducer path
import uiReducer from './features/ui/uiSlice'; // Adjust the import based on your actual reducer path
import navReducer from './features/nav/navSlice'; // Adjust the import based on your actual reducer path

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      user: userReducer,
      ui: uiReducer,
      nav: navReducer,
    },
  });
};
