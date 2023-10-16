
export default function AdminOptions({ isOpen, toggleOptions }){
  return(
    <ul onMouseLeave={toggleOptions} className={`${isOpen ? 'block z-50' : 'hidden'} flex flex-col py-2.5 absolute bg-white lg:text-[16px] gap-y-[3px] whitespace-nowrap rounded-lg shadow text-small right-0 text-start`}>
      <li className="px-2.5 hover:bg-ecx-grey/[0.05]">View Admin</li>
      <li className="px-2.5 hover:bg-ecx-grey/[0.05] text-ruby">Remove Admin</li>
    </ul>
  )
}