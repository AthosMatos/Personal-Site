import { createSlice } from '@reduxjs/toolkit'

export const PT = 'Português'
export const EN = 'English'
export const BrazilFlag = require('../assets/brasilFlag.png')
export const USFlag = require('../assets/unitedStatesFlag.png')

export const languageSlice = createSlice({
  name: 'language',
  initialState: 
  {
    language: '',
    flag:'',
    borderColor:'',
    sections:
    {
      welcome:'',
      location:'',
      Projects:
      {
        ButtonLabel:''
      },
      About:
      {
        ButtonLabel:''
      },
      Galery:
      {
        ButtonLabel:''
      },
      Curriculum:
      {
        ButtonLabel:''
      }   
    }
  },
  reducers: {
    setPT: (state) => 
    {
      state.language = PT
      state.flag = BrazilFlag
      state.borderColor = 'green'
    },
    setEN: (state) => 
    {
      state.language = EN
      state.flag = USFlag
      state.borderColor = 'red'
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPT,setEN } = languageSlice.actions

export default languageSlice.reducer