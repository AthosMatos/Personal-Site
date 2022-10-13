import { createSlice } from '@reduxjs/toolkit'

export const LightTheme = 'light'
export const DarkTheme = 'dark'

export const LIGHTMODE_BACKCOLOR = '#EDF2F4'
export const DARKMODE_BACKCOLOR = '#0E0E0E'
export const STANDARDLIGHT_BACKCOLOR = 'white'
export const STANDARDDARK_BACKCOLOR = 'black'
export const SECONDARYCOLOR = '#EF233C'

export const ThemeSlice = createSlice({
  name: 'theme',
  initialState: 
  {
    theme: 
    {
        name:'',
        stdBackColor:'',
        PrimaryButtonColor:'',
        SecondaryButtonColor:'',

    },
  },
  reducers: {
    setDark: (state) => 
    {
      state.theme.name = DarkTheme
      state.theme.stdBackColor = DARKMODE_BACKCOLOR
      state.theme.PrimaryButtonColor = LIGHTMODE_BACKCOLOR
      state.theme.SecondaryButtonColor = SECONDARYCOLOR
    },
    setLight: (state) => 
    {
      state.theme.name = LightTheme
      state.theme.stdBackColor = LIGHTMODE_BACKCOLOR
      state.theme.PrimaryButtonColor = DARKMODE_BACKCOLOR
      state.theme.SecondaryButtonColor = SECONDARYCOLOR
    },
  },
})

// Action creators are generated for each case reducer function
export const { setDark,setLight } = ThemeSlice.actions

export default ThemeSlice.reducer