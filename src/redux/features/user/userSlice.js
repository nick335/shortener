import { createSlice } from '@reduxjs/toolkit'
import { useRouter } from 'next/navigation'


const initialState = {
  isLoggedIn: false,
  userDetails: {
    name: "",
    role: "Super Admin",
  },
  accessToken: "",
  refreshToken:"",
  refreshTokenExpiration: "",
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    Login: (state, action) => {
      state.isLoggedIn = true
      state.userDetails.name = action.payload.name
      state.userDetails.role = action.payload.role
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken
      state.refreshTokenExpiration = action.payload.refreshTokenExpiration
    },
    LogOut: (state) => {
      // const router = useRouter()
      // router.push('/')
      state.isLoggedIn = false
      state.userDetails.name = ""
      state.userDetails.role = ""
      state.accessToken = ""
      state.refreshToken = ""
      state.refreshTokenExpiration = ""
    }
  },
})

export const {
  Login,
  LogOut
} = userSlice.actions

export default userSlice.reducer