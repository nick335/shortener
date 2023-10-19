import BEARER_TOKEN from "./token";

export function getAllLinks(functional) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${BEARER_TOKEN}`);
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("https://ecxurls.com/api/v1/links/short-links", requestOptions)
    .then(response => response.text())
    .then(result => JSON.parse(result))
    .then(result => functional(result))
    .catch(error => functional('error', error));
}