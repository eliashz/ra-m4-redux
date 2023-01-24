import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  city: '',
  type: '',
}

// Este slice no es necesario, pasar setCity y setType a houses.slice
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
