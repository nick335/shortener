'use client'
import React, { useState, useEffect } from 'react'
import { admins, times } from './MockData'
import Filter from './Filter'
import { useDispatch, useSelector } from 'react-redux'
import { filterLinks } from '@/app/redux/features/urls/urlsSlice'

export default function Filters({ AllLinks}) {
const dispatch = useDispatch()
 const [admin, setAdmin] = useState(admins[0])
 const [time, setTime] = useState(times[0])

 useEffect(() => {
  if(AllLinks?.length || 0 > 0){
    dispatch(filterLinks({ period:time, who:admin }))
  }
}, [time, AllLinks, admin])


  return (
    <div className='flex items-center gap-x-[0.62rem] mt-[0.94rem]'>
      <Filter 
       data={admins}
       setData={setAdmin}
       selectedData={admin}
      />
      
      <Filter 
       data={times}
       setData={setTime}
       selectedData={time}
      />
    </div>
  )
}
