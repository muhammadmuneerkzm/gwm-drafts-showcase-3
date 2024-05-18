import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: {},
    openState: false,
    subtotal: 0
  },
  reducers: {
    toggleloading: (state ,action) =>{
      if(state.loading){
        state.loading = false
      }else{
        state.loading = true
      }
    },

    setCart: (state, action) => {
      state.items = action.payload;
      localStorage.setItem('cart', JSON.stringify(state.items));
      state.subtotal = 0;
      Object.keys(state.items).map((key)=>{
        let product = JSON.parse(JSON.stringify(state.items[key]))
        state.subtotal += product['price'] * product['qty']
      })
      // console.log("SUBTOTAL: ", state.subtotal)
    }, 

    open: (state, action) => {
      // console.log("I am open")
      if(!state.openState){
        // console.log("now this is false I changed into true")
        state.openState = true;
      } else{
        // console.log("now this is true I changed into false")
        state.openState = false;
      }
    }, 

    saveCart: (state, action) => {
      const {cart} = action.payload
      // console.log("the cart", cart)
      localStorage.setItem('cart', JSON.stringify(cart));
      // console.log("I am  inside SaveCart state.items: ", state.items)
      state.subtotal = 0;
      Object.keys(state.items).map((key)=>{
        // console.log("THIS IS ",key, JSON.parse(JSON.stringify(state.items[key])))
        let product = JSON.parse(JSON.stringify(state.items[key]))
        state.subtotal += product['price'] * product['qty']
      })
      // console.log("SUBTOTAL: ", state.subtotal)
    },


    addToCart: (state, action) => {
      const { itemCode, qty, price, name, size, variant } = action.payload;
      // console.log("Add to cart", itemCode, qty, price, name, size, variant, JSON.stringify(state.items) )
      if (itemCode in state.items) {
        state.items[itemCode].qty += qty;
      } else {
          state.items[itemCode] = { qty, price, name, size, variant };
      }
      localStorage.setItem('cart', JSON.stringify(state.items));
      
      // console.log("hello from AddtoCart", JSON.parse(JSON.stringify(state.items)));

      state.subtotal = 0;
      Object.keys(state.items).map((key)=>{
        // console.log("THIS IS ",key, JSON.parse(JSON.stringify(state.items[key])))
        let product = JSON.parse(JSON.stringify(state.items[key]))
        state.subtotal += product['price'] * product['qty']
      })
      // console.log("SUBTOTAL: ", state.subtotal)
    },
    
    removeFromCart: (state, action) => {
      const { itemCode, qty } = action.payload;
      if (itemCode in state.items) {
        state.items[itemCode].qty -= qty;
        if (state.items[itemCode].qty <= 0) {
          delete state.items[itemCode];
        }
        localStorage.setItem('cart', JSON.stringify(state.items));
      }
      // console.log("This is from Remove")
      state.subtotal = 0;
      Object.keys(state.items).map((key)=>{
        // console.log("THIS IS ",key, JSON.parse(JSON.stringify(state.items[key])))
        let product = JSON.parse(JSON.stringify(state.items[key]))
        state.subtotal += product['price'] * product['qty']
      })
      // console.log("SUBTOTAL: ", state.subtotal)
    },
  },
});


export const { setCart, saveCart, addToCart, removeFromCart , open} = cartSlice.actions;

export default cartSlice.reducer;