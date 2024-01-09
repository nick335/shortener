import { getCookie } from 'cookies-next'
import { redirect, } from 'next/navigation'
import { toast } from 'react-toastify'
import React from 'react'
// import { useSelector } from 'react-redux'

const getAccessToken = async () => {
 const Token = getCookie('userToken')
 // const refreshToken = useSelector(state => state.user.refreshToken)

 if(Token){
  const UserToken = JSON.parse(Token)
  return UserToken.accessToken
 }else {
    //since there is no refresh token endpoint lets redirect to the login page
    // return redirect('/')
    toast.error('session has timed out refresh to login', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    })
  // refetch access token using refresh token
//   try {
//    const accessToken = await fetch('')
//   }catch(error){
//    // if there is any error occurs logout users(go to landing page), notify that session has expired
//    console.log(error)
//   }
 }
}

export default getAccessToken