'use client'
import React from 'react'
import { Link1, ChartCircle, ArrowDown2, More, UserTag, Copy } from 'iconsax-react'
import { useState } from 'react'
import URLStats from './URLStats'
import URLOptions from './URLOptions'
import { useDateFormat } from '@/hooks/useDateFormat'
import useCopyToClipboard from '@/hooks/copyToClipboard'
import Copied from "@/components/common/pop-ups/Copied";




export default function UrlCard({ data }) {
  const formattedDate = useDateFormat(data.createdAt)
  const { copied, copyText } = useCopyToClipboard()
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
        
        <h4 className='font-inter text-base font-normal ml-[0.31rem]'>{data.name}</h4>
        
        <div className='relative ml-auto'>
          <More size={20} onClick={() => toggleModals('options')} className='cursor-pointer' />
          
          <URLOptions 
            isOpen={modals.options}
            id={data.id}
            name={data.name}
            originalURL={data.originalUrl}
            link={data.shortUrl}
            close={toggleModals}
          />
        </div>
      </div>

      <h5 className='mt-[0.62rem] text-sm font-inter font-normal text-ecx-grey '>Original URL</h5>
      
      <p className='whitespace-nowrap overflow-hidden text-ellipsis max-w-[100%] mt-[0.62rem] py-[0.31rem] px-[0.62rem] rounded-[0.3125rem] font-inter text-sm bg-[#E1E1E1]/[50%] lg:mr-6'>
        {data.originalUrl}
      </p>

      <div className='mt-[0.94rem] flex items-center justify-between gap-x-3 lg:mr-6'>
        <div className='font-inter'>
          <h5 className='text-sm font-normal text-ecx-grey'>Shortened URL</h5>
          <p className='text-sm mt-[0.62rem] text-dart'>{data.shortUrl}</p>
        </div>

        <div className="relative">
        {
          copied ? (
            <Copied  visible={copied} />
          ) : (
            <button
              className="bg-[#E1E1E150] hover:brightness-90 transition-all w-[30px] aspect-square rounded-[5px] mt-1 flex-center-center"
              onClick={() => copyText(data.shortUrl)}
            >
              <Copy size="15"/>
            </button>
          )
        }
      </div>

      </div>

      <div className='relative mt-[0.94rem] border py-[0.62rem] rounded-[0.3125rem] border-[#E1E1E1] px-[0.94rem] flex items-center cursor-pointer font-inter lg:mr-6' onClick={() => toggleModals('stats')} >
        <ChartCircle size={20} />
        
        <h5 className='text-small ml-[0.44rem]' >Usuage Statistics</h5>
        
        <ArrowDown2 size={15} className='ml-auto text-ecx-black' />
        
        <URLStats isOpen={modals.stats} close={toggleModals} clickCount={data.clicksCount} formattedDate={formattedDate} />
      </div>
      
      <div className='mt-5 flex items-center font-inter gap-x-[0.62rem]'>
        <UserTag size={20} />
        <p className='text-small text-ecx-grey'>Created by {data.createdBy.username} - {formattedDate}</p>
      </div>
    </div>
  )
}
