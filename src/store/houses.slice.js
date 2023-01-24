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
  isLoading: false,
  isSuccess: false,
  isError: false,
  houses: {
    byId: {},
    allIds: [],
    byCity: [],
    byType: [],
    filter: {
      city: 'x',
      type: 'z',
    },
  },
}

const housesSlice = createSlice({
  name: 'houses',
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.houses.filter.city = action.payload
    },
    setType: (state, action) => {
      state.houses.filter.type = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHouses.pending, (state) => {
        state.reqStatus = 'loading'
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
      })
      .addCase(getHouses.fulfilled, (state, action) => {
        state.reqStatus = 'success'
        state.isSuccess = true
        state.isLoading = false
        state.isError = false
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
        state.isError = true
        state.isLoading = false
        state.isSuccess = false
      })
  },
})
export const { setCity, setType } = housesSlice.actions
export default housesSlice.reducer
