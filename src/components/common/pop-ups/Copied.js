import { useEffect } from "react";

export default function Copied({ visible, onUnmount, className="" }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onUnmount();
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [onUnmount]);

  return (
    <div className={`
      px-4 py-1.5 text-small bg-[#E1E1E150] rounded-[5px] absolute right-0 top-1 cursor-default
      ${!visible? "hidden" : "block"} ${className}
    `}>
      Copied!
    </div>
  )
}