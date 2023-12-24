import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Action: '',
  editId: '',
  longUrl: '',
  label: '',
  isDisplayCreatePopUp: false,
  isDisplayCreateSuccess: false,
}

// creating n action state to determine whether we are creating or editing
export const createUrlSlice = createSlice({
  name: 'createUrl',
  initialState,
  reducers: {
    showCreateUrlPopUp: (state, action) => {
      const Action = action.payload
      state.isDisplayCreatePopUp = true
      state.Action = Action
    },
    hideCreateUrlPopUp: (state) => {
      state.isDisplayCreatePopUp = false
    },

    showCreateUrlSuccess: (state) => {
      state.isDisplayCreateSuccess = true
    },
    hideCreateUrlSuccess: (state) => {
      state.isDisplayCreateSuccess = false
    },

    changeLongUrl: (state, action) => {
      state.longUrl = action.payload
    },
    changeLabel: (state, action) => {
      state.label = action.payload
    },
    setEditID: (state, action) => {
      state.editId = action.payload
    }
  },
})

export const {
  showCreateUrlPopUp,
  hideCreateUrlPopUp,
  showCreateUrlSuccess,
  hideCreateUrlSuccess,
  changeLongUrl,
  changeLabel,
  setEditID 
} = createUrlSlice.actions

export default createUrlSlice.reducer