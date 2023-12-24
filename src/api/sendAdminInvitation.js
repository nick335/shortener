import axios from "axios";
import getAccessToken from "./getAccessToken";
import { toast } from "react-toastify";

export default async function sendAdminInvitation(email, username, as){
 const Token = await getAccessToken()

 if(Token){
  try {
   const requestOptions = {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
     'Authorization': `Bearer ${Token}`
    },
   }

   const response = await axios.post('https://ecxurls.com/api/v1/users/invites',{
    email: email,
    username: username,
    as: as,
   }, requestOptions)

   return true;
  } catch(error){
    const message = error.response ? error.response.data.error : 'something went wrong try again'
    toast.error( message, {
     position: "top-right",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "light",
     })
  }
 }
}