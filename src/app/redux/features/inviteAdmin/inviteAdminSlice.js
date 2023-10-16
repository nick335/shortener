import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  admin: '',
  displayInviteAdminPopUp: false,
  displayInviteAdminSuccess: false,
}


export const inviteAdminSlice = createSlice({
  name: 'createUrl',
  initialState,
  reducers: {
    inviteAdmin: (state, action) => {
      return {
        ...state,
        admin: action.payload
      }
    },
    setAdmin: (state, action) => {
      return {
        ...state,
        admin: action.payload
      }
    },

    showInviteAdminPopUp: (state) => {
      return {
        ...state,
        displayInviteAdminPopUp: true
      }
    },
    hideInviteAdminPopUp: (state) => {
      return {
        ...state,
        displayInviteAdminPopUp: false
      }
    },

    showInviteAdminSuccess: (state) => {
      return {
        ...state,
        displayInviteAdminSuccess: true
      }
    },
    hideInviteAdminSuccess: (state) => {
      return {
        ...state,
        displayInviteAdminSuccess: false
      }
    }
  }
})

export const {
  inviteAdmin,
  setAdmin,
  showInviteAdminPopUp,
  hideInviteAdminPopUp,
  showInviteAdminSuccess,
  hideInviteAdminSuccess
} = inviteAdminSlice.actions

export default inviteAdminSlice.reducer