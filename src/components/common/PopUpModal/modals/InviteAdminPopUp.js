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

export default function InviteAdminPopUp() {
  const [invite, setInvite] = useState({
    isLoading: false,
    error: false,
    errorMessage: '',
    isDisabled: true
  })
const {isLoading, error, errorMessage, isDisabled} = invite
  const { admin, role, username, displayInviteAdminPopUp } = useSelector(state => state.inviteAdmin)
  const dispatch = useDispatch()

  const handleCancel = () => {
    dispatch(hideInviteAdminPopUp())
    dispatch(setAdmin(''))
  }

  const handleCreate = () => {
    dispatch(hideInviteAdminPopUp())
    dispatch(showInviteAdminSuccess())
  }

  const handleSetAdmin = (event) => {
    dispatch(setAdmin(event.target.value))
  }

  const handleRoleChange = (event) => {
    dispatch(setRole(event.target.value))
  }

  const handleUsernameChange = (event) => {
    dispatch(setUsername(event.target.value))
  }

  useEffect(() => {
    if(admin && role && username){
      setInvite({...invite, isDisabled: false})
    }else{
      setInvite({...invite, isDisabled: true})
    }
  }, [admin, role, username])


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
        <select className="modal-input md-white" value={role} onChange={handleRoleChange}>
        <option value="" disabled>role</option>
        <option value="volvo">Super Admin</option>
         <option value="saab">Admin</option>
        </select>
        <input
          className="modal-input md-white"
          type="text"
          placeholder="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <Button variant="danger" onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleCreate} disabled={isDisabled} className="cursor-pointer">
        { isLoading ? (
              <Icon icon="line-md:loading-loop" className="text-xl" />
            ) : "Invite" }
        </Button>
      </div>
    </PopUpModal>
  )
}