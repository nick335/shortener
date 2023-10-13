import React from 'react'
import styles from './urls.module.scss'
import URL from './URL'

export default function URLS() {
  return (
    <section className={` mt-[1.56rem] flex flex-col gap-y-[3.38rem] lg:gap-y-[1.88rem] min-h-screen max-h-screen overflow-y-scroll scrollbar-thin scrollbar-track-[#E1E1E1]/[70%] scrollbar-thumb-dart scrollbar-thumb-rounded-2xl scrollbar-track-rounded-2xl pb-8 xl:max-w-[80%]`}>
     <URL />
     <URL />
     <URL />
     <URL />
     <URL />
     <URL />
    </section>
  )
}
