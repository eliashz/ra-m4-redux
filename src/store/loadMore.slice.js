import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 1,
}

export const loadMoreSlice = createSlice({
  name: 'loadMore',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  },
})

export const { increment } = loadMoreSlice.actions

export default loadMoreSlice.reducer
