import { useDispatch, useSelector } from "react-redux";
import { setSharing } from "@/app/redux/features/urls/urlsSlice";

const useShareButton = (link) => {
 const dispatch = useDispatch()
 const { sharing } = useSelector((state) => state.urls)

  const share = async () => {
    if (sharing) {
      return; // Prevent multiple simultaneous shares
    }

    try {
      dispatch(setSharing(true))
      if (navigator.share) {
        await navigator.share({
          title: document.title,
          url: link,
        });
        console.log('Shared successfully');
      } else {
        alert('Sharing is not supported on this browser.');
      }
    } catch (error) {
      console.error('Sharing failed:', error);
    } finally {
      dispatch(setSharing(false))
    }
  };

  return { share };
};

export default useShareButton;
