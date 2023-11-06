import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  admin: '',
  role: '',
  username: '',
  displayInviteAdminPopUp: false,
  displayInviteAdminSuccess: false,
}


export const inviteAdminSlice = createSlice({
  name: 'inviteAdmin',
  initialState,
  reducers: {
    inviteAdmin: (state, action) => {
      state.admin = action.payload
    },
    setAdmin: (state, action) => {
      state.admin = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setUsername: (state, action) => {
       state.username = action.payload;
    },
    showInviteAdminPopUp: (state) => {
        state.displayInviteAdminPopUp = true
    },
    hideInviteAdminPopUp: (state) => {
        state.displayInviteAdminPopUp = false
    },

    showInviteAdminSuccess: (state) => {
        state.displayInviteAdminSuccess = true
    },
    hideInviteAdminSuccess: (state) => {
        state.displayInviteAdminSuccess = false
    }
  }
})

export const {
  inviteAdmin,
  setAdmin,
  setRole,
  setUsername,
  showInviteAdminPopUp,
  hideInviteAdminPopUp,
  showInviteAdminSuccess,
  hideInviteAdminSuccess
} = inviteAdminSlice.actions

export default inviteAdminSlice.reducer