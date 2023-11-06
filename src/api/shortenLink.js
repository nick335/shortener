import getAccessToken from "./getAccessToken";

export default async function shortenLink(label, url) {
  console.log('working')
  const Token = await getAccessToken()

  if(Token){
   try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Token}`,
      },
      body: JSON.stringify({
        name: label,
        originalUrl: url,
      }),
    };

    const response = await fetch('https://ecxurls.com/api/v1/links/short-links', requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.text();
    } catch (error) {
      throw new Error(`Failed to shorten the link: ${error.message}`);
    } 
  }
  
}