'use client'
import React, { useState } from 'react'
import { admins, times } from './MockData'
import Filter from './Filter'

export default function Filters() {
 const [admin, setAdmin] = useState(admins[0])
 const [time, setTime] = useState(times[0])

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
