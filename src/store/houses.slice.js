import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { urls } from '../constants'

export const getHouses = createAsyncThunk(
  'houses/getHouses',
  async (name, { rejectWithValue }) => {
    const res = await fetch(urls.houses)
    const data = await res.json()
    if (res.status < 200 || res.status >= 300) {
      return rejectWithValue(data)
    }
    return data
  },
)

const initialState = {
  reqStatus: 'initial',
  houses: {
    byId: {},
    allIds: [],
    byCity: [],
    byType: [],
  },
}

const housesSlice = createSlice({
  name: 'houses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHouses.pending, (state) => {
        state.reqStatus = 'loading'
      })
      .addCase(getHouses.fulfilled, (state, action) => {
        state.reqStatus = 'success'
        action.payload.forEach((house) => {
          state.houses.byId[house.id] = house
          if (!state.houses.allIds.includes(house.id)) {
            state.houses.allIds.push(house.id)
          }
          if (!state.houses.byCity.includes(house.city)) {
            state.houses.byCity.push(house.city)
          }
          if (!state.houses.byType.includes(house.type)) {
            state.houses.byType.push(house.type)
          }
        })
      })
      .addCase(getHouses.rejected, (state) => {
        state.reqStatus = 'failed'
      })
  },
})

export default housesSlice.reducer
