const fetcher = (url) => 
 fetch(url, {
  method: 'GET',
  headers: {
    'accept': 'application/json',
    'Authorization': process.env.NEXT_PUBLIC_BEARER_Token 
  }
 }).then((response) => {
  if(!response.ok){
   throw new Error(`HTTP error! Status: ${response.status}`)
  }
  return response.json()
 }).then((data) => data.data)

 export default fetcher
 