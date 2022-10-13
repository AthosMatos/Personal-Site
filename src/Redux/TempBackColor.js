import { createSlice } from '@reduxjs/toolkit'
import { STANDARDLIGHT_BACKCOLOR } from './ThemeDealer'

export const TempBackColor = createSlice({
  name: 'TempBackColor',
  initialState: {
    BackColor:STANDARDLIGHT_BACKCOLOR
  },
  reducers: {
    setBackColor:(state,color) => 
    {
      state.BackColor = color.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setBackColor } = TempBackColor.actions

export default TempBackColor.reducer