import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  listProducts: [],
  detailProduct: null
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateListProducts: (state, action) => {
      state.listProducts = action.payload
    },
    updateDetailProduct: (state, action) => {
      state.detailProduct = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { updateListProducts, updateDetailProduct } = productSlice.actions;

export default productSlice.reducer;
