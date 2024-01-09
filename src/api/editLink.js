import axios from "axios";
import getAccessToken from "./getAccessToken";
import { toast } from "react-toastify";

export default async function editLink(id, label, url){
 const Token = await getAccessToken()

 if(Token){
  try{
   const requestOptions = {
    method: 'PUT',
    headers: {
     'Content-Type': 'application/json',
     'Authorization': `Bearer ${Token}`
    },
   }

   const response = await axios.put(`https://ecxurls.com/api/v1/links/short-links/${id}`, {
    name: label,
    originalUrl: url,
   }, requestOptions)

  
   return  {
    success: true
    };
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
     })  }
 }
}