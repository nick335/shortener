import React from 'react'
import styles from './urls.module.scss'

export default function URLStats({
  isOpen,
  close,
  clicksCount,

}) {
  return (
    <div className={` ${ isOpen ? 'block' : 'hidden' } absolute top-[3rem] z-30 left-0  shadow-md w-full h-fit rounded-[0.625rem] bg-ecx-white pb-5 pt-[0.62rem] font-inter px-[0.94rem] flex flex-col gap-y-5`} onMouseLeave={() => close('stats')}>
      <div className='cursor-text'>
        <p className={`${styles.statsQuestion}`}>Total number of clicks so far:</p>
        <h5 className={`${styles.statAns}`}>{clicksCount}</h5>
      </div>
      <div>
        <p className={`${styles.statsQuestion}`}>Total number of shares:</p>
        <h5 className={`${styles.statAns}`}>3</h5>
      </div>
      <div>
        <p className={`${styles.statsQuestion}`}>Most active day:</p>
        <span className={`${styles.Ans2}`}>24/09/23</span>
      </div>
      <div>
        <p className={`${styles.statsQuestion}`}>Most active week:</p>
        <span className={`${styles.Ans2}`}>24/09/23 - 30/09/23</span>
      </div>
      <div>
        <p className={`${styles.statsQuestion}`}>Most active month:</p>
        <span className={`${styles.Ans2}`}>September</span>
      </div>
    </div>
  )
}
