import React from 'react'
import { Listbox } from '@headlessui/react'
import { ArrowDown2 } from 'iconsax-react'

export default function Filter({ data, setData, selectedData }) {
  return (
    <div className='relative w-fit h-fit'>
      <Listbox value={selectedData} onChange={setData}>
        <Listbox.Button className={`py-[0.31rem] px-2.5 min-w-[6.4375rem] border border-[#E1E1E1] rounded-[0.3125rem] flex items-center gap-x-[0.62rem] lg:bg-ecx-white`}>
          <span>{selectedData}</span>
          <ArrowDown2 size={15} />
        </Listbox.Button>

      <Listbox.Options className={`absolute mt-2 bg-ecx-white shadow flex flex-col w-full rounded-[0.625rem] py-[0.62rem] z-20`}>
        {
          data.map((each, idx) => (
            <Listbox.Option
              key={idx}
              value={each}
              className={({ selected }) => `cursor-pointer px-2.5 py-[5px] text-small hover:bg-ecx-grey/10 transition-all ${selected ? 'text-dart' : ''}`}
            >
            {each}
            </Listbox.Option>
          ))
        }
      </Listbox.Options>
    </Listbox>
    </div>
  )
}
