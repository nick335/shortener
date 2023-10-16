"use client"
import React from 'react'
import Filters from '@/components/urls/Filters'
import URLS from '@/components/urls/URLS'
import { admins } from '@/components/urls/MockData'


// The max-h is a temporary fix
export default function URLSPage() {
  return (
    <main className='max-h-[calc(100vh-120px)] lg:max-h-[calc(100vh-200px)] flex flex-col grow'>
      <h3 className='text-xl leading-[1.375rem] text-ecx-grey mt-[1.56rem] lg:hidden'>URLs</h3>
      
      <Filters />

      <p className='font-inter text-sm mt-[0.94rem] text-ecx-grey'>{admins.length} URL(s)</p>

      <URLS />
    </main>
  )
}
