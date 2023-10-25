'use client'
import React from 'react'
import { Link1, ChartCircle, ArrowDown2, More, UserTag, Copy, ArrowUp2 } from 'iconsax-react'
import { useState } from 'react'
import URLStats from './URLStats'
import URLOptions from './URLOptions'
import { useTitleCase } from '@/hooks/useTitleCase'
import { useDateString } from '@/hooks/useDateString'
import Copied from "@/components/common/pop-ups/Copied";


export default function UrlCard({
  name,
  originalUrl,
  shortUrl,
  createdBy,
  ...props
}) {
  const [modals, setmodals] = useState({
    options: false,
    stats: false,
  })

  const [isCopied, setIsCopied] = useState(false)

  const handleHideCopy = () => {
    setIsCopied(false)
    navigator.clipboard.writeText(shortUrl)
  }

  const handleCopyClick = () => {
    setIsCopied(true)
  }


  const { username, createdAt } = createdBy

  function toggleModals(key) {
    setmodals((prev) => {
      return{
        ...prev,
        [key]: !prev[key] 
      }
    })
  }


  return (
    <div className='lg:bg-ecx-white mr-[1.4rem] lg:mr-[3.68rem] lg:pl-[1.88rem] lg:pb-[1.62rem] lg:pt-[1.12rem] lg:pr-[3.12rem] lg:rounded-[0.3125rem] lg:shadow-urlCard'>
      <div className='flex items-center pb-[0.5rem] border-b border-[#E1E1E1]'>
        <Link1 size={20} className='text-swift -rotate-[50deg]' />
        
        <h3 className='font-inter text-normal ml-[0.31rem]'>
          {name}
        </h3>
        
        <div className='relative ml-auto'>
          <More size={20} onClick={() => toggleModals('options')} className='cursor-pointer' />
          
          <URLOptions 
            isOpen={modals.options}
          />
        </div>
      </div>

      <h5 className='font-inter mt-[0.62rem] text-small text-ecx-grey '>
        Original URL
      </h5>
      
      <p className='truncate mt-[0.62rem] py-[0.31rem] px-2.5 rounded-[0.3125rem] text-small bg-[#E1E1E1]/[50%] lg:mr-6'>
        {originalUrl}
      </p>

      <div className='mt-[0.94rem] flex items-center justify-between gap-x-3 lg:mr-6'>
        <div className='font-inter'>
          <h5 className='font-inter text-small text-ecx-grey'>Shortened URL</h5>
          <p className='text-sm mt-[0.62rem] text-dart'>
            {shortUrl}
          </p>
        </div>

        <button className='bg-[#E1E1E1]/[50%] rounded-[5px] p-2 relative'>
          {
            isCopied ? (
              <Copied onUnmount={handleHideCopy} visible={isCopied} className="!-top-1.5" />
            ) : (
              <Copy size={17} className="cursor-pointer" onClick={handleCopyClick} />
            )
          }
        </button>
      </div>

      <div className='relative mt-[0.94rem] border py-[0.62rem] rounded-[0.3125rem] border-[#E1E1E1] px-[0.94rem] flex items-center cursor-pointer font-inter lg:mr-6' onClick={() => toggleModals('stats')} >
        <ChartCircle size={20} />
        
        <h5 className='text-small ml-[0.44rem]' >Usuage Statistics</h5>

        {
          modals.stats ? (
            <ArrowUp2 size={15} className='ml-auto text-ecx-black' />
            ) : (
            <ArrowDown2 size={15} className='ml-auto text-ecx-black' />
          )
        }
        
        
        <URLStats isOpen={modals.stats} close={toggleModals} {...props} />
      </div>
      
      <div className='mt-5 flex items-center font-inter gap-x-[0.62rem]'>
        <UserTag size={20} />
        <p className='text-small text-ecx-grey'>
          Created by {useTitleCase(username)} - {useDateString(createdAt)}
        </p>
      </div>
    </div>
  )
}
