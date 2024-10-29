import getAccessToken from "./getAccessToken";
import {toast } from 'react-toastify'
import axios from "axios";

export default async function shortenLink(label, url) {
  const Token = await getAccessToken()

  if(Token){
   try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Token}`,
      },
    };

    const response = await axios.post('https://ecx-url-shortener.azurewebsites.net/api/v1/links/short-links', {
      name: label,
      originalUrl: url,
    }, requestOptions);
   
    return {
      success: true
    };
    } catch (error) {
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
        });
    } 
  }
  
}