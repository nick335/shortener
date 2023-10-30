import { useDispatch, useSelector } from "react-redux";
import {
  hideCreateUrlPopUp,
  changeLongUrl,
  changeLabel,
  showCreateUrlSuccess
} from "@/app/redux/features/createUrl/createUrlSlice"

import { ClipboardExport, Link1 } from "iconsax-react";
import Button from "../../Button/Button";
import PopUpModal from "../PopUpModal";
import shortenLink from "@/api/shortenLink";

export default function CreateUrlPopUp() {
  const { isDisplayCreatePopUp, longUrl, label } = useSelector(state => state.createUrl)
  const dispatch = useDispatch()

  const handleCancel = () => {
    dispatch(hideCreateUrlPopUp())
    dispatch(changeLongUrl(''))
    dispatch(changeLabel(''))
  }

  const handleCreate = async () => {
    try {
      await shortenLink(label, longUrl); // Wait for the fetch to complete
      dispatch(hideCreateUrlPopUp());
      dispatch(showCreateUrlSuccess());
    } catch (error) {
      // Handle the error here if the fetch request fails
      console.error('Error:', error);
    }
  }

  const handleChangeLongUrl = ({ target }) => {
    dispatch(changeLongUrl(target.value))
  }

  const handleChangeLabel = ({ target }) => {
    dispatch(changeLabel(target.value))
  }

  return (
    <PopUpModal visibility={isDisplayCreatePopUp} wide close={handleCancel}>
      <p className="pop-up-modal_title">Create New URL</p>

      <div className="md:hidden flex flex-col gap-2.5">
        <div className="flex items-center gap-1">
          <Link1 size={20} className="-rotate-[60deg] text-swift" />
          <span className="text-ecx-grey/70">Enter your URL here</span>
        </div>

        <input
          className="modal-input"
          type="text"
          placeholder="Enter your long URL"
          value={longUrl}
          onChange={handleChangeLongUrl}
        />
      </div>
      
      <div className="hidden md:flex items-center md-white rounded-[5px] pe-5 gap-5">
        <input
          className="modal-input md:!bg-ecx-white"
          type="text"
          placeholder="Enter your long URL large"
          value={longUrl}
          onChange={handleChangeLongUrl}
        />
        <ClipboardExport size={19} />
      </div>

      <div className="flex flex-col gap-5 md:grid md:grid-cols-2 md:items-end">
        <div className="flex flex-col gap-2.5">
          <span className="text-ecx-grey/70">Label (optional)</span>

          <input
            className="modal-input md-white"
            type="text"
            placeholder="Your Label"
            value={label}
            onChange={handleChangeLabel}
          />
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <Button variant="danger" onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleCreate} disabled={!longUrl || !label}>Create</Button>
        </div>
      </div>
    </PopUpModal>
  )
}