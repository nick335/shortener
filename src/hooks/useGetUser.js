"use client"
import { useSelector } from "react-redux"

export function useGetUser() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)

  return isLoggedIn
}