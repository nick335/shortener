'use client'
import React from 'react'
import {  useSelector } from 'react-redux'
import UrlCard from './UrlCard'

export default function UrlsSection() {
  const { DisplayLinks } = useSelector((state) => state.urls)
  // the reason for reversing is because we want the new links at the top and older links at the bottom.
  const reverseLinks = [...DisplayLinks].reverse()
  const urlsCardElements = reverseLinks.map((each) => {
    return <UrlCard 
            key={each.id}
            data={each}  
          />
  })
  return (
    <>
      <p className='font-inter text-sm mt-[0.94rem] text-ecx-grey'>{DisplayLinks.length} URL(s)</p>
      <section className={`max-h-[calc(100vh-120px)] lg:max-h-[calc(100vh-390px)]  mt-[1.56rem] flex flex-col gap-y-[3.38rem] lg:gap-y-[1.88rem] grow overflow-y-auto scrollbar-thin scrollbar-track-[#E1E1E1]/[70%] scrollbar-thumb-dart scrollbar-thumb-rounded-2xl scrollbar-track-rounded-2xl  xl:max-w-[85%]`}>
        { 
          urlsCardElements.length > 0 ? urlsCardElements : <h3>No URL has been shortened</h3>
        }
      </section>
    </>
  )
}
