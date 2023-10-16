import React from 'react'
import styles from './urls.module.scss'

export default function URLStats({ isOpen, close }) {
  return (
    <div className={` ${ isOpen ? 'block' : 'hidden' } absolute top-[3rem] z-10 left-0  shadow-md w-full h-fit rounded-[0.625rem] bg-ecx-white pb-5 pt-[0.62rem] font-inter px-[0.94rem] flex flex-col gap-y-5`} onBlur={() => close('stats')}>
      <div>
        <p className={`${styles.statsQuestion}`}>Total number of clicks so far:</p>
        <h6 className={`${styles.statAns}`}>10</h6>
      </div>
      <div>
        <p className={`${styles.statsQuestion}`}>Total number of shares:</p>
        <h6 className={`${styles.statAns}`}>3</h6>
      </div>
      <div>
        <p className={`${styles.statsQuestion}`}>most active day:</p>
        <h6 className={`${styles.Ans2}`}>24/09/23</h6>
      </div>
      <div>
        <p className={`${styles.statsQuestion}`}>most active week:</p>
        <h6 className={`${styles.Ans2}`}>24/09/23 - 30/09/23</h6>
      </div>
      <div>
        <p className={`${styles.statsQuestion}`}>Most active month:</p>
        <h6 className={`${styles.Ans2}`}>September</h6>
      </div>
    </div>
  )
}
