import { createSlice } from '@reduxjs/toolkit'

export const ChooseColor_PAGE = 0,  ChooseLanguage_PAGE = 1


export const PageSaver = createSlice({
  name: 'PageSaver',
  initialState: {
    Page:ChooseColor_PAGE
  },
  reducers: {
    setPage:(state,newpage) => 
    {
      state.Page = newpage.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPage } = PageSaver.actions

export default PageSaver.reducer