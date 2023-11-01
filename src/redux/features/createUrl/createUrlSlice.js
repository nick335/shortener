import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  longUrl: '',
  label: '',
  isDisplayCreatePopUp: false,
  isDisplayCreateSuccess: false,
}


export const createUrlSlice = createSlice({
  name: 'createUrl',
  initialState,
  reducers: {
    showCreateUrlPopUp: (state) => {
      return {
        ...state,
        isDisplayCreatePopUp: true
      }
    },
    hideCreateUrlPopUp: (state) => {
      return {
        ...state,
        isDisplayCreatePopUp: false
      }
    },

    showCreateUrlSuccess: (state) => {
      return {
        ...state,
        isDisplayCreateSuccess: true
      }
    },
    hideCreateUrlSuccess: (state) => {
      return {
        ...state,
        isDisplayCreateSuccess: false
      }
    },

    changeLongUrl: (state, action) => {
      return {
        ...state,
        longUrl: action.payload
      }
    },
    changeLabel: (state, action) => {
      return {
        ...state,
        label: action.payload
      }
    }
  },
})

export const {
  showCreateUrlPopUp,
  hideCreateUrlPopUp,
  showCreateUrlSuccess,
  hideCreateUrlSuccess,
  changeLongUrl,
  changeLabel 
} = createUrlSlice.actions

export default createUrlSlice.reducer