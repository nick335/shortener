'use client'
import React from 'react'
import chain from '../../../public/images/urls/link.svg'
import more from '../../../public/images/urls/more.svg'
import clip from '../../../public/images/urls/clip.svg'
import stats from '../../../public/images/urls/chart.svg'
import profile from '../../../public/images/urls/user-tag.svg'
import arrowDown from '../../../public/images/urls/arrow-down.svg'
import Image from 'next/image'
import { useState } from 'react'
import URLStats from './URLStats'
import URLOptions from './URLOptions'

export default function URL() {
 const [modals, setmodals] = useState({
  options: false,
  stats: false,
 })

 
 function toggleModals(key){
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
      <Image src={chain} width={20} height={20} alt='chain' />
      <h4 className='font-inter text-base font-normal'>ECX Git</h4>
      <div className='relative ml-auto'>
       <Image src={more} width={20} height={20} alt='more' onClick={() => toggleModals('options')} />
       <URLOptions 
         isOpen={modals.options}
       />
      </div>
     </div>
     <h5 className='mt-[0.62rem] text-sm font-inter font-normal text-ecx-grey '>Original URL</h5>
     <p className='whitespace-nowrap overflow-hidden text-ellipsis max-w-[100%] mt-[0.62rem] py-[0.31rem] px-[0.62rem] rounded-[0.3125rem] font-inter text-sm bg-[#E1E1E1]/[50%] lg:mr-6'>https://www.figma.com/file/saX2ZKNFIoJ3ImZ9fkGNRp/ECX-Projects-(Copy)?node-id=129%3A5146&mode=dev</p>
     <div className='mt-[0.94rem] flex items-center justify-between gap-x-3 lg:mr-6'>
      <div className='font-inter'>
       <h5 className='text-sm font-normal text-ecx-grey'>Shortened URL</h5>
       <p className='text-sm mt-[0.62rem] text-dart'>https://www.figma.com/</p>
      </div>
      <Image src={clip} width={30} height={30} alt='Copy' />
     </div>
     <div className='relative mt-[0.94rem] border py-[0.62rem] rounded-[0.3125rem] border-[#E1E1E1] px-[0.94rem] flex items-center cursor-pointer font-inter lg:mr-6' onClick={() => toggleModals('stats')} >
      <Image src={stats} width={20} height={20} alt='stats' />
      <h5 className='text-small ml-[0.44rem]' >Usuage Statistics</h5>
      <Image src={arrowDown} width={15} height={15} alt='ArrowDown' className='ml-auto'/>
      <URLStats isOpen={modals.stats} />
     </div>
     <div className='mt-5 flex items-center font-inter gap-x-[0.62rem]'>
      <Image src={profile} width={20} height={20} alt='profile' />
      <p className='text-small text-ecx-grey'>Created by Admin 1 - 23/09/23</p>
     </div>
    </div>
  )
}
