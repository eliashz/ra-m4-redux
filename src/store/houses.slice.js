import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { urls } from '../constants'

const getHouses = createAsyncThunk('houses/getHouses', async () => {
  const res = await fetch(urls.houses)
  const data = await res.json()
  return data
})

const initialState = {
  reqStatus: 'loading',
  houses: [],
}

const housesSlice = createSlice({
  name: 'houses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHouses.pending, (state, action) => {
      state.entities.push(action.payload)
    })
    builder.addCase(getHouses.fulfilled, (state, action) => {
      state.entities.push(action.payload)
    })
    builder.addCase(getHouses.rejected, (state, action) => {
      state.entities.push(action.payload)
    })
  },
})

export const {} = housesSlice.actions
export default housesSlice.reducer
