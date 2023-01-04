import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  listProducts: []
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateListProducts: (state, action) => {
      state.listProducts = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { updateListProducts } = productSlice.actions;

export default productSlice.reducer;
