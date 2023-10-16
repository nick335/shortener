import { useDispatch, useSelector } from "react-redux";
import {
  setAdmin,
  hideInviteAdminPopUp,
  showInviteAdminSuccess
} from "@/app/redux/features/inviteAdmin/inviteAdminSlice";

import Button from "@/components/common/Button/Button";
import PopUpModal from "../PopUpModal";


export default function InviteAdminPopUp() {
  const { admin, displayInviteAdminPopUp } = useSelector(state => state.inviteAdmin)
  const dispatch = useDispatch()

  const handleCancel = () => {
    dispatch(hideInviteAdminPopUp())
    dispatch(setAdmin(''))
  }

  const handleCreate = () => {
    dispatch(hideInviteAdminPopUp())
    dispatch(showInviteAdminSuccess())
  }

  const handleSetAdmin = ({ target }) => {
    dispatch(setAdmin(target.value))
  }

  return (
    <PopUpModal visibility={displayInviteAdminPopUp} className="md:!p-10">
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
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <Button variant="danger" onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleCreate} disabled={!admin}>Invite</Button>
      </div>
    </PopUpModal>
  )
}