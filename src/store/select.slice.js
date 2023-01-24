import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  city: '',
  type: '',
}

export const selectSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload
    },
    setType: (state, action) => {
      state.type = action.payload
    },
  },
})

export const { setCity, setType } = selectSlice.actions

export default selectSlice.reducer
