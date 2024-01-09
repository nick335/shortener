"use client"
import { ClipboardExport } from "iconsax-react";
import { useDispatch, useSelector } from "react-redux";
import {
  showCreateUrlPopUp,
  changeLongUrl
} from "@/redux/features/createUrl/createUrlSlice";
import { showInviteAdminPopUp } from "@/redux/features/inviteAdmin/inviteAdminSlice";

import Button from "../Button/Button";
import CreateUrlPopUp from "@/components/common/PopUpModal/modals/CreateUrlPopUp";
import CreateUrlSuccess from "@/components/common/PopUpModal/modals/CreateUrlSuccess";
import InviteAdminPopUp from "@/components/common/PopUpModal/modals/InviteAdminPopUp";
import InviteAdminSuccess from "../PopUpModal/modals/InviteAdminSuccess";
import { usePathname } from "next/navigation";


export default function CreateUrl() {
  const pathname = usePathname()
  const hideOnAdmins = pathname === '/home/admins'
  const hideOnUrls = pathname === '/home/urls'

  const { longUrl } = useSelector(state => state.createUrl)
  const role = useSelector(state => state.user.userDetails.role)
  const dispatch = useDispatch()

  const handleLongUrl = ({ target }) => {
    dispatch(changeLongUrl(target.value))
  }


  const handleDisplayCreatePopUp = () => {
    dispatch(showCreateUrlPopUp('CREATE'))
  }

  const handleDisplayInviteAdminPopUp = () => {
    dispatch(showInviteAdminPopUp())
  }


  async function handlePaste() {
    try {
      const pasteValue = await navigator.clipboard.readText();
      dispatch(changeLongUrl(pasteValue))
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <div className="bg-ecx-white w-full max-w-[700px] mx-auto z-10 relative hidden lg:flex items-center shadow-[0_2px_16px_0_rgba(0,0,0,0.10)] gap-5 ps-5 rounded-[5px]">
        <input 
          type="text"
          className="grow outline-none text-small placeholder:text-ecx-grey/70 placeholder:select-none"
          placeholder="Enter your long URL"
          value={longUrl}
          onChange={handleLongUrl}
        />

        <ClipboardExport onClick={handlePaste} className="cursor-pointer hover:opacity-75" size={20} />

        <Button onClick={handleDisplayCreatePopUp} className="h-full !w-fit !px-2.5 !grow-0" icon="link">
          Create new URL
        </Button>
      </div>
      
      <div className="flex w-full lg:hidden items-center gap-x-4 mx-auto max-w-[400px]">
        <Button
          icon="link"
          onClick={handleDisplayCreatePopUp}
          hidden={hideOnAdmins}
          >
          Create new URL
        </Button>
        { role === 'SUPER_ADMIN' && <Button
          variant="ruby"
          icon="people"
          hidden={hideOnUrls}
          onClick={handleDisplayInviteAdminPopUp}
        >
          Invite Admin
        </Button>}
      </div>

      <CreateUrlPopUp />
      <CreateUrlSuccess />
      <InviteAdminPopUp />
      <InviteAdminSuccess />
    </>
  )
}