import { createSlice } from '@reduxjs/toolkit'
import { useRouter } from 'next/navigation'


const initialState = {
  isLoggedIn: false,
  userDetails: {
    name: "Ifihanagbara Oluseye",
    title: "Super Admin",
  }
}


export const userSlice = createSlice({
  name: 'urls',
  initialState,
  reducers: {
    Login: (state) => {
      return {
        ...state,
        isLoggedIn: true
      }
    },
    LogOut: (state) => {
      const router = useRouter()
      router.push('/')
      return {
        ...state,
        isLoggedIn: false
      }

    }
  },
})

export const { Login, LogOut } = userSlice.actions

export default userSlice.reducer