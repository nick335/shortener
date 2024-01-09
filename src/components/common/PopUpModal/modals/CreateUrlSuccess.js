import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { changeLabel, changeLongUrl, hideCreateUrlSuccess } from "@/redux/features/createUrl/createUrlSlice";

import { ArrowLeft2, Copy, ExportSquare, } from "iconsax-react";
import PopUpModal from "../PopUpModal";
import Copied from "@/components/common/pop-ups/Copied";
import useCopyToClipboard from "@/hooks/copyToClipboard";


export default function CreateUrlSuccess() {
  const { isDisplayCreateSuccess, longUrl, label } = useSelector(state => state.createUrl)
  const dispatch = useDispatch()
  const { copied, copyText } = useCopyToClipboard()

  const handleHideSuccess = () => {
    dispatch(hideCreateUrlSuccess())
    dispatch(changeLongUrl(''))
    dispatch(changeLabel(''))
  }
  const handleRedirect = () => {
    dispatch(changeLongUrl(''))
    dispatch(changeLabel(''))
    dispatch(hideCreateUrlSuccess())
  }


  return (
    <PopUpModal visibility={isDisplayCreateSuccess} close={handleHideSuccess}>
      <p className="text-normal">Successfully Created!</p>

      <div className="flex flex-col gap-2.5">
        <span className="text-ecx-grey">{label}</span>

        <div className="md-white bg-ecx-grey/10 rounded-[5px] px-2.5 py-1.5 flex gap-2">
          <span className="grow truncate link link-dart">
            ecxurls.com/{label}
          </span>

          <div className="relative">
            {
              copied ? (
                <Copied  visible={copied} className="!-top-1.5"  />
              ) : (
                <Copy size={17} className="-scale-x-[1] cursor-pointer" onClick={() => copyText(`ecxurls.com/${label}`)} />
              )
            }
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <button onClick={handleHideSuccess} className="flex gap-1 items-center link">
          <ArrowLeft2 size={20} />
          <span>Back</span>
        </button>

        <Link onClick={handleRedirect} href="/home/urls" className="flex gap-2 items-center justify-end text-third-blue link">
          <span>Go to URLs</span>
          <ExportSquare size={15} />
        </Link>
      </div>
    </PopUpModal>
  )
}