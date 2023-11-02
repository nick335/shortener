import BEARER_TOKEN from "./token";

// export default async function shortenLink(label, url) {
//   var myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");
//   myHeaders.append("Authorization", `Bearer ${BEARER_TOKEN}`);
  
//   var raw = JSON.stringify({
//     "name": label,
//     "originalUrl": url
//   });
  
//   var requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     body: raw,
//     redirect: 'follow'
//   };
  
//   try {
//     const response = await fetch("https://ecxurls.com/api/v1/links/short-links", requestOptions);

//     if (!response.ok) {
//       // If the response status is not in the 2xx range, handle the error
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const result = await response.text();
//     // You can return a result here if needed
//     return result;
//   } catch (error) {
//     // Handle the error and possibly re-throw it
//     console.error('Error:', error);
//     throw error;
//   }
// }

export default async function shortenLink(label, url) {
  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${BEARER_TOKEN}`,
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