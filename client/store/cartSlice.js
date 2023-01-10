import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  listCart: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateListCarts: (state, action) =>{
      state.listCart = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {  updateListCarts } = cartSlice.actions

export default cartSlice.reducer