"use client"
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  setAdmin,
  hideInviteAdminSuccess,
} from "@/app/redux/features/inviteAdmin/inviteAdminSlice";

import PopUpModal from "../PopUpModal";
import { ArrowLeft2, ExportSquare } from "iconsax-react";

export default function InviteAdminSuccess() {
  const { admin, displayInviteAdminSuccess } = useSelector(state => state.inviteAdmin)
  const dispatch = useDispatch()

  const handleCancel = () => {
    dispatch(hideInviteAdminSuccess())
    dispatch(setAdmin(''))
  }
  
  const handleRedict = () => {
    dispatch(hideInviteAdminSuccess())
  }


  return (
    <PopUpModal visibility={displayInviteAdminSuccess} className="md:!p-10" wide  close={handleCancel}>
      <p className="text-normal">You successfully sent an invite to:</p>

      <p className="flex">
        <span className="text-dart">{admin}</span>
        <span>&nbsp;!</span>
      </p>

      <div className="grid grid-cols-2 gap-2.5">
        <button onClick={handleCancel} className="flex gap-1 items-center link">
          <ArrowLeft2 size={20} />
          <span>Back</span>
        </button>

        <Link onClick={handleRedict} href="/home/admins" className="flex gap-2 items-center justify-end text-third-blue link">
          <span>Go to Admins</span>
          <ExportSquare size={15} />
        </Link>
      </div>
    </PopUpModal>
  )
}