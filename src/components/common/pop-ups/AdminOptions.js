import Link from "next/link";

export default function AdminOptions({ hide }) {
  return (
    <div
      onMouseLeave={hide}
      className="py-2 text-small bg-ecx-white border rounded-[10px] absolute right-0 top-0 flex flex-col  gap-1 text-start">
      <Link href="" className="hover:bg-[#E1E1E150] px-3">View Admin</Link>
      <Link href="" className="text-ruby hover:bg-[#E1E1E150] px-3">Remove Admin</Link>
    </div>
  )
}