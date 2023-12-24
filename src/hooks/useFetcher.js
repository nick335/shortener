import getAccessToken from "@/api/getAccessToken";

const fetcher = async (url) =>{ 
  try {
    const token = await getAccessToken();
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'Authorization': token
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred while fetching the data.');
  }
};

export default fetcher;
 