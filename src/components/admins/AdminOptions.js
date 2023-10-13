
export default function AdminOptions({isOpen}){
    return(
        <div>
            <ul className={`${isOpen ? 'block z-50' : 'hidden'} flex flex-col p-4 absolute bg-white lg:text-[16px] gap-y-[3px] whitespace-nowrap rounded-lg shadow text-sm right-0`}>
                <li>View Admin</li>
                <li className="text-ruby">Remove Admin</li>
            </ul>
        </div>
    )
}