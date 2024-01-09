'use client'

import { redirect,  } from 'next/navigation'
import { useEffect, useState } from 'react'
import {  hasCookie } from 'cookies-next'

export default function LandingPageCheck(WrappedComponent){
 return function LandingPageCheck(props){
  const [ authorized, setAuthorized] = useState(true)
  const userToken = hasCookie('userToken')

  useEffect(() => {
   if(userToken){
    redirect('/home')
   }else{
    setAuthorized(false)
   }
  }, []) 

  if(authorized){
   return null
  }else{
   return <WrappedComponent {...props}/>
  }
  
 }
}