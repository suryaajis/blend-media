import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  listFavorites: []
}

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    updateListFavs: (state, action) =>{
      state.listFavorites = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {  updateListFavs } = favoriteSlice.actions

export default favoriteSlice.reducer