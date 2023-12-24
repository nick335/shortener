import React from 'react'
import { Listbox } from '@headlessui/react'
import { ArrowDown2 } from 'iconsax-react'

const RoleSelect = ({data, setData, selectedData}) => {
  return (
   <div className='relative w-fit h-fit'>
    <Listbox value={selectedData}>
      <Listbox.Button className={`py-2 px-5 min-w-[9.4375rem]  rounded-[0.3125rem] flex items-center justify-between gap-x-[0.62rem] bg-ecx-grey/10  md:bg-ecx-white md:shadow-[0_2px_16px_0_rgba(0,0,0,0.10)]`}>
        <span>{selectedData}</span>
        <ArrowDown2 size={15} />
      </Listbox.Button>

     <Listbox.Options className={`absolute mt-2 bg-ecx-white shadow flex flex-col w-full rounded-[0.3125rem] py-[0.62rem] z-20`}>
       {
         data.map((each, idx) => (
           <Listbox.Option
             key={idx}
             value={each}
             className={({ selected }) => `cursor-pointer px-2.5 py-[0.3125rem] text-small hover:bg-ecx-grey/10 transition-all ${selected ? 'text-dart' : ''}`}
           >
           <p onClick={() => setData(each)}>{each}</p>
           </Listbox.Option>
         ))
       }
     </Listbox.Options>
    </Listbox>
   </div>
  )
}

export default RoleSelect;