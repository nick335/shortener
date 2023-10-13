import React from 'react'

export default function URLOptions({ isOpen }) {
  return (
    <ul className={` ${ isOpen ? 'block z-10' : 'hidden' } absolute top-[1rem] rounded-[0.625rem] shadow right-0 bg-ecx-white w-[5.625rem] p-[0.62rem] flex flex-col gap-y-[0.62rem] font-inter text-small`}>
     <li>Edit</li>
     <li>Share URL</li>
     <li className='text-ruby'>Delete</li>
    </ul>
  )
}
