import { getCookie } from 'cookies-next'
import React from 'react'
// import { useSelector } from 'react-redux'

const getAccessToken = async () => {
 const Token = getCookie('userToken')
 // const refreshToken = useSelector(state => state.user.refreshToken)

 if(Token){
  const UserToken = JSON.parse(Token)
  return UserToken.accessToken
 }else {
  // refetch acesss token using refresh token
  try {
   const accessToken = await fetch('')
  }catch(error){
   // if there is any error occurs logout users(go to landing page), notify that session has expired
   console.log(error)
  }
 }
}

export default getAccessToken