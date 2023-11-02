'use client'
import { redirect,  } from 'next/navigation'
import { useEffect, useState } from 'react'
import {  getCookie } from 'cookies-next'
import { useDispatch, useSelector } from 'react-redux'
import { Login } from '@/redux/features/user/userSlice'


export default function withAuth(WrappedComponent){
 return function withAuth(props){
  const isLoggedIn = useSelector(state => state.user)
  // const [authorized, setAuthorized] = useState(false)
  const userToken = getCookie('userToken')
  const dispatch = useDispatch()
  
  useEffect(() => {

     if (!userToken) {
       redirect('/?auth=login');
     }else{
      const userTokenData = JSON.parse(userToken)
      dispatch(Login({...userTokenData}))
     }
   }, [isLoggedIn]);

   if(!isLoggedIn){
    return null
   }

   return <WrappedComponent {...props}/>
 }
}