import BEARER_TOKEN from "./token";

export default function login(username, password, handleLoginData) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${BEARER_TOKEN}`);

  var raw = JSON.stringify({
    "username": username,
    "password": password
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://ecx-shortener-api-0ab392f6811d.herokuapp.com/api/v1/auth/login", requestOptions)
    .then(response => {handleLoginData(); return response.text()})
    .then(result => JSON.parse(result))
    .then(parsed => handleLoginData(parsed))
    .catch(error => handleLoginData(error))
}