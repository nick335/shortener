import React, { useEffect, useRef } from 'react'
import styles from './urls.module.scss'
import addDaysToDate from '@/hooks/useAddDaysToDate'
import getMonthInWords from '@/hooks/getMonthsInWords'

export default function URLStats({ isOpen, close, clickCount, formattedDate }) {
  const AddDate = addDaysToDate(formattedDate)
  const month = getMonthInWords(formattedDate)
  const stats = useRef(null)

  const handleClickOutside = (event) => {
    if(stats.current && !stats.current.contains(event.target)){
      if(isOpen){
        close('stats')
      }
    }
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
    <div ref={stats}  className={` ${ isOpen ? 'block' : 'hidden' } absolute top-[3rem] z-10 left-0  shadow-md w-full h-fit rounded-[0.625rem] bg-ecx-white pb-5 pt-[0.62rem] font-inter px-[0.94rem] flex flex-col gap-y-5`} onBlur={() => close('stats')}>
      <div>
        <p className={`${styles.statsQuestion}`}>Total number of clicks so far:</p>
        <h6 className={`${styles.statAns}`}>{clickCount}</h6>
      </div>
      <div>
        <p className={`${styles.statsQuestion}`}>Total number of shares:</p>
        <h6 className={`${styles.statAns}`}>3</h6>
      </div>
      <div>
        <p className={`${styles.statsQuestion}`}>most active day:</p>
        <h6 className={`${styles.Ans2}`}>{formattedDate}</h6>
      </div>
      <div>
        <p className={`${styles.statsQuestion}`}>most active week:</p>
        <h6 className={`${styles.Ans2}`}>{formattedDate} - {AddDate}</h6>
      </div>
      <div>
        <p className={`${styles.statsQuestion}`}>Most active month:</p>
        <h6 className={`${styles.Ans2}`}>{month}</h6>
      </div>
    </div>
  )
}
