import BEARER_TOKEN from "./token";

export default function shortenLink(label, url) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${BEARER_TOKEN}`);
  
  var raw = JSON.stringify({
    "name": label,
    "originalUrl": url
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("https://ecxurls.com/api/v1/links/short-links", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}