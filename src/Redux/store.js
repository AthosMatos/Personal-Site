import { configureStore } from '@reduxjs/toolkit'
import ThemeReducer from './ThemeDealer'
import TempBackColor from './TempBackColor'
import PageSaver from './PageSaver'
import LanguageDealer from './LanguageDealer'

export default configureStore({
  reducer: 
  {
    Personalization:ThemeReducer,
    TempBackColor:TempBackColor,
    PageSaver:PageSaver,
    LanguageDealer:LanguageDealer
  },
})