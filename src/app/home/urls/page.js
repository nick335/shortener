import Filters from '@/components/urls/Filters'
import URLS from '@/components/urls/URLS'
import React from 'react'

export default function page() {
  return (
    <main>
     <h3 className='text-xl leading-[1.375rem] text-ecx-grey mt-[1.56rem]'>URLs</h3>
     <Filters />
     <p className='font-inter text-sm mt-[0.94rem] text-ecx-grey'>54 URL(s)</p>
     <URLS />
    </main>
  )
}
