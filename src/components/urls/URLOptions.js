import { deleteURL } from '@/redux/features/urls/urlsSlice'
import useShareButton from '@/hooks/useShare'
import React, { useEffect, useRef } from 'react'
import { useDispatch, } from 'react-redux'
import { changeLabel, changeLongUrl, setEditID, showCreateUrlPopUp } from '@/redux/features/createUrl/createUrlSlice'

export default function URLOptions({ isOpen,  id, link, close, name, originalURL }) {
  const options = useRef(null)
  const dispatch = useDispatch()
  const { share } = useShareButton(link)

  const handleClickOutside = (event) => {
    if(options.current && !options.current.contains(event.target)){
      if(isOpen){
        close('options')
      }
    }
  }
  const handleDisplayCreatePopUp = () => {
    dispatch(showCreateUrlPopUp('EDIT'))
    dispatch(setEditID(id))
    dispatch(changeLabel(name))
    dispatch(changeLongUrl(originalURL))
    close('options')
  }

  useEffect(() => {
    if(isOpen){
      document.addEventListener('mousedown', handleClickOutside);
    }else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    };
  }, [isOpen])

  return (
    <ul ref={options} className={` ${ isOpen ? 'block z-10' : 'hidden' } absolute top-[1rem] rounded-[0.625rem] shadow right-0 bg-ecx-white min-w-[5.925rem] p-[0.62rem] flex flex-col gap-y-[0.62rem] font-inter text-small`}>
     <li className='cursor-pointer' onClick={handleDisplayCreatePopUp}>Edit</li>
     <li className='cursor-pointer' onClick={share}  >Share URL</li>
     <li className='text-ruby cursor-pointer' onClick={() => dispatch(deleteURL(id))} >Delete</li>
    </ul>
  )
}
