import { deleteURL } from '@/redux/features/urls/urlsSlice'
import useShareButton from '@/hooks/useShare'
import React from 'react'
import { useDispatch, } from 'react-redux'

export default function URLOptions({ isOpen,  id, link }) {
  const dispatch = useDispatch()
  const { share } = useShareButton(link)
  return (
    <ul className={` ${ isOpen ? 'block z-10' : 'hidden' } absolute top-[1rem] rounded-[0.625rem] shadow right-0 bg-ecx-white min-w-[5.925rem] p-[0.62rem] flex flex-col gap-y-[0.62rem] font-inter text-small`}>
     <li className='cursor-pointer'>Edit</li>
     <li className='cursor-pointer' onClick={share}  >Share URL</li>
     <li className='text-ruby cursor-pointer' onClick={() => dispatch(deleteURL(id))} >Delete</li>
    </ul>
  )
}
