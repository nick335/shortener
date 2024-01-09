'use client'
import React from 'react'
import UrlRow from '../common/cards/HomeCard/card-rows/UrlRow';
import useSWR from 'swr';
import fetcher from '@/hooks/useFetcher';
import { useDispatch, useSelector } from 'react-redux';
import { setURLS } from '@/redux/features/urls/urlsSlice';
import { Icon } from '@iconify/react';
import { useEffect } from 'react'

const UrlsHomeCard = () => {
 const dispatch = useDispatch()
 const { AllLinks } = useSelector((state) => state.urls)
 const { data, error, isLoading } = useSWR('https://ecx-shortener-api-0ab392f6811d.herokuapp.com/api/v1/links/short-links', fetcher)

 useEffect(() => {

  if( data && data !== AllLinks){
    dispatch(setURLS(data))
  }
}, [data])
 if(isLoading) return <div className='flex justify-center mt-6'><Icon icon="line-md:loading-loop" className='text-5xl'/></div>
 if(error) return <h3>Error: Something went Wrong Refresh</h3>
 const fetchedData = [...data]
 const dataElements = fetchedData.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
})
.slice(0, 3)
.map(({...props}, index) => (
  <UrlRow key={index} {...props} />
))
  return (
   <div className="flex flex-col gap-5">
    {
      dataElements.length > 0 ? dataElements : <h4>No url has been shortened</h4>
    }
  </div> 
  )
}

export default UrlsHomeCard