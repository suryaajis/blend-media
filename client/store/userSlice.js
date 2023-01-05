import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userDetail: null,
  token: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
    setUser: (state, action) => {
      state.userDetail = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setToken, setUser } = userSlice.actions

export default userSlice.reducer