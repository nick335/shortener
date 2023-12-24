import { useDispatch, useSelector } from "react-redux";
import {
  setAdmin,
  setRole,
  setUsername,
  hideInviteAdminPopUp,
  showInviteAdminSuccess
} from "@/redux/features/inviteAdmin/inviteAdminSlice";

import Button from "@/components/common/Button/Button";
import PopUpModal from "../PopUpModal";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import RoleSelect from "../../Select/RoleSelect";
import sendAdminInvitation from "@/api/sendAdminInvitation";

export default function InviteAdminPopUp() {
  const [isLoading, setIsLoading] = useState(false)
  const [invite, setInvite] = useState({
    isLoading: false,
    error: false,
    errorMessage: '',
  })
  const { admin, role, username, displayInviteAdminPopUp } = useSelector(state => state.inviteAdmin)
  const dispatch = useDispatch()

  const handleCancel = () => {
    dispatch(hideInviteAdminPopUp())
    dispatch(setAdmin(''))
    dispatch(setUsername(''))
  }

  const handleCreate =  async () => {
   setIsLoading(true)
   const response = await sendAdminInvitation(admin, username, role)
   if(response){
        dispatch(hideInviteAdminPopUp())
        dispatch(showInviteAdminSuccess())
        setIsLoading(false)
   }else{
    setIsLoading(false)
   }  
  }

  const handleSetAdmin = (event) => {
    dispatch(setAdmin(event.target.value))
  }

  const handleRoleChange = (role) => {
    dispatch(setRole(role))
  }

  const handleUsernameChange = (event) => {
    dispatch(setUsername(event.target.value))
  }




  return (
    <PopUpModal visibility={displayInviteAdminPopUp} className="md:!p-10" close={handleCancel}>
      <p className="pop-up-modal_title">Invite an Admin</p>

      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-1 justify-between">
          <span className="text-ecx-grey/70">Email Address</span>
          <span className="link link-dart">Copy invite link</span>
        </div>

        <input
          className="modal-input md-white"
          type="text"
          placeholder="example@email.com"
          value={admin}
          onChange={handleSetAdmin}
        />
        <input
          className="modal-input md-white"
          type="text"
          placeholder="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <RoleSelect selectedData={role} data={['ADMIN', 'SUPER_ADMIN']} setData={handleRoleChange} />
        
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <Button variant="danger" onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleCreate} disabled={!admin || !username} className="cursor-pointer">
        { isLoading ? (
              <Icon icon="line-md:loading-loop" className="text-xl" />
            ) : "Invite" }
        </Button>
      </div>
    </PopUpModal>
  )
}