'use client'
import React from 'react'
import {  useSelector } from 'react-redux'
import UrlCard from './UrlCard'

export default function UrlsSection() {
  const { DisplayLinks } = useSelector((state) => state.urls)
  return (
    <>
      <p className='font-inter text-sm mt-[0.94rem] text-ecx-grey'>{DisplayLinks.length} URL(s)</p>
      <section className={`max-h-[calc(100vh-120px)] lg:max-h-[calc(100vh-390px)]  mt-[1.56rem] flex flex-col gap-y-[3.38rem] lg:gap-y-[1.88rem] grow overflow-y-auto scrollbar-thin scrollbar-track-[#E1E1E1]/[70%] scrollbar-thumb-dart scrollbar-thumb-rounded-2xl scrollbar-track-rounded-2xl  xl:max-w-[85%]`}>
        { DisplayLinks.map((each, idx) => {
          return <UrlCard 
                    key={each.id}
                    data={each}
                  />
        }) }
      </section>
    </>
  )
}
