import { configureStore } from '@reduxjs/toolkit'
import ThemeReducer from './ThemeDealer'
import TempBackColor from './TempBackColor'
import PageSaver from './PageSaver'

export default configureStore({
  reducer: 
  {
    Personalization:ThemeReducer,
    TempBackColor:TempBackColor,
    PageSaver:PageSaver
  },
})