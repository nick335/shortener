'use client'
import React from 'react'
import { Link1, ChartCircle, ArrowDown2, More, UserTag, Copy } from 'iconsax-react'
import { useState } from 'react'
import URLStats from './URLStats'
import URLOptions from './URLOptions'

export default function URL() {
  const [modals, setmodals] = useState({
    options: false,
    stats: false,
  })

 
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
        
        <h4 className='font-inter text-base font-normal ml-[0.31rem]'>ECX Git</h4>
        
        <div className='relative ml-auto'>
          <More size={20} onClick={() => toggleModals('options')} className='cursor-pointer' />
          
          <URLOptions 
            isOpen={modals.options}
          />
        </div>
      </div>

      <h5 className='mt-[0.62rem] text-sm font-inter font-normal text-ecx-grey '>Original URL</h5>
      
      <p className='whitespace-nowrap overflow-hidden text-ellipsis max-w-[100%] mt-[0.62rem] py-[0.31rem] px-[0.62rem] rounded-[0.3125rem] font-inter text-sm bg-[#E1E1E1]/[50%] lg:mr-6'>
        https://www.figma.com/file/saX2ZKNFIoJ3ImZ9fkGNRp/ECX-Projects-(Copy)?node-id=129%3A5146&mode=dev
      </p>

      <div className='mt-[0.94rem] flex items-center justify-between gap-x-3 lg:mr-6'>
        <div className='font-inter'>
          <h5 className='text-sm font-normal text-ecx-grey'>Shortened URL</h5>
          <p className='text-sm mt-[0.62rem] text-dart'>https://www.figma.com/</p>
        </div>

        <button className='bg-ecx-grey/[0.05] rounded-[5px] p-2'>
          <Copy size={16} />
        </button>
      </div>

      <div className='relative mt-[0.94rem] border py-[0.62rem] rounded-[0.3125rem] border-[#E1E1E1] px-[0.94rem] flex items-center cursor-pointer font-inter lg:mr-6' onClick={() => toggleModals('stats')} >
        <ChartCircle size={20} />
        
        <h5 className='text-small ml-[0.44rem]' >Usuage Statistics</h5>
        
        <ArrowDown2 size={15} className='ml-auto text-ecx-black' />
        
        <URLStats isOpen={modals.stats} close={toggleModals} />
      </div>
      
      <div className='mt-5 flex items-center font-inter gap-x-[0.62rem]'>
        <UserTag size={20} />
        <p className='text-small text-ecx-grey'>Created by Admin 1 - 23/09/23</p>
      </div>
    </div>
  )
}
