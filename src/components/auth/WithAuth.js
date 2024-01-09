'use client'
import { redirect, usePathname  } from 'next/navigation'
import { useEffect, useState } from 'react'
import {  getCookie } from 'cookies-next'
import { useDispatch, useSelector } from 'react-redux'
import { Login } from '@/redux/features/user/userSlice'


export default function WithAuth(WrappedComponent){
 return function WithAuth(props){
  const pathname = usePathname()
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  const role = useSelector(state => state.user.userDetails.role)  
  const userToken = getCookie('userToken')
  const dispatch = useDispatch()
  
  useEffect(() => {

     if (!userToken) {
       redirect('/?auth=login');
     }else{
      const userTokenData = JSON.parse(userToken)
      if(pathname === '/home/admins'){
        if(userTokenData.role === 'SUPER_ADMIN'){
          redirect('/home')  
        }
      }
      dispatch(Login({...userTokenData}))
     }
   }, [isLoggedIn]);

   // check if the user is logged in 
   if(!isLoggedIn){
    return null
   }else {
    // if user is logged in check if he is trying to access super admin pages 
    if(pathname === '/home/admins'){
      // if he is check if he is a super admin
      if(role !== 'SUPER_ADMIN'){
        return null   
      }else {
        // if he is trying to super admin pages allow him to access desired pages
        return <WrappedComponent {...props}/>
      }
    }else {
      return <WrappedComponent {...props}/>
    }
   }
 }
}