import { useDispatch, useSelector } from "react-redux";
import {
  hideCreateUrlPopUp,
  changeLongUrl,
  changeLabel,
  showCreateUrlSuccess
} from "@/redux/features/createUrl/createUrlSlice"
import { ClipboardExport, Link1 } from "iconsax-react";
import Button from "../../Button/Button";
import PopUpModal from "../PopUpModal";
import shortenLink from "@/api/shortenLink";
import { useState } from "react";
import { Icon } from "@iconify/react";
import editLink from "@/api/editLink";

export default function CreateUrlPopUp() {
  const { isDisplayCreatePopUp, longUrl, label, editId, Action } = useSelector(state => state.createUrl)
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)

  const handleCancel = () => {
    setIsLoading(false)
    dispatch(hideCreateUrlPopUp())
    dispatch(changeLongUrl(''))
    dispatch(changeLabel(''))
  }

  const handleCreate = async () => {
    setIsLoading(true)
    const response = await shortenLink(label, longUrl)
    if(response){
      dispatch(hideCreateUrlPopUp());
      dispatch(showCreateUrlSuccess());
      setIsLoading(false)
    }else{
      setIsLoading(false)
    }
  }
  const handleEdit = async () => {
    setIsLoading(true)
    const response = await editLink(editId, label, longUrl)
    if(response){
      dispatch(hideCreateUrlPopUp());
      dispatch(showCreateUrlSuccess());
      setIsLoading(false)
    }else{
      setIsLoading(false)
    }
  }

  const handleClick = () => {
    if(Action === 'CREATE'){
      handleCreate()
    }
    if(Action === 'EDIT'){
      handleEdit()
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
          <Button className=" !capitalize " onClick={handleClick} disabled={!longUrl || !label}>
            { isLoading ? (
              <Icon icon="line-md:loading-loop" className="text-xl" />
            ) :  Action }
          </Button>
        </div>
      </div>
    </PopUpModal>
  )
}