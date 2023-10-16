import React from 'react'

export default function URLOptions({ isOpen }) {
  return (
    <ul className={` ${ isOpen ? 'block z-10' : 'hidden' } absolute top-[1rem] rounded-[0.625rem] shadow right-0 bg-ecx-white min-w-[5.825rem] p-[0.62rem] flex flex-col gap-y-[0.62rem] font-inter text-small`}>
     <li className='cursor-pointer'>Edit</li>
     <li className='cursor-pointer'>Share URL</li>
     <li className='text-ruby cursor-pointer'>Delete</li>
    </ul>
  )
}
