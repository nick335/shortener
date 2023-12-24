"use client"
import React, { useEffect, useState } from 'react'
import Filters from '@/components/urls/Filters'
import { useDispatch, useSelector } from 'react-redux'
import { setURLS } from '@/redux/features/urls/urlsSlice'
import UrlsSection from '@/components/urls/UrlsSection'
import useSWR from 'swr'
import fetcher from '@/hooks/useFetcher'
import { Icon } from '@iconify/react'


export default function URLSPage() {
  const dispatch = useDispatch()
  const { AllLinks } = useSelector((state) => state.urls)
  const { data, error, isLoading } = useSWR('https://ecx-shortener-api-0ab392f6811d.herokuapp.com/api/v1/links/short-links', fetcher, {
        revalidateOnFocus: false,
        refreshInterval: 3000,
    })
    useEffect(() => {
      if( data && data !== AllLinks){
        dispatch(setURLS(data))
      }
    }, [data])
    if(error) return <h3>Error: Something went Wrong Refresh</h3>
  return (
    <main className='flex flex-col grow min-h-[300px]'>
      <h3 className='text-xl leading-[1.375rem] text-ecx-grey mt-[1.56rem] lg:hidden'>URLs</h3>
       <Filters AllLinks={AllLinks}/>
      { isLoading ? <div className='flex justify-center mt-6'><Icon icon="line-md:loading-loop" className='text-5xl' /></div> : <UrlsSection />}
    </main>
  )
}
