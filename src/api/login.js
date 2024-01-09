import axios from "axios"


export const userLogin = async (username, password) => {
    try{
        const response = await axios.post("https://ecx-shortener-api-0ab392f6811d.herokuapp.com/api/v1/auth/login", {
         username,
         password
    })
    if (response && response.data && response.data.message === "Login successful.") {
      const { data } = response.data;
      const { user, tokens } = data;

      return {
        success: true,
        name: user.username,
        error: null, // No error for a successful login
        status: response.data.status,
        accessToken: tokens.accessToken,
        accessTokenExpiration: tokens.accessTokenExpiresIn,
        refreshToken: tokens.refreshToken,
        refreshTokenExpiration: tokens.refreshTokenExpiresIn,
        role: user.role
      }; 
    } 
    // no need for the else if and else statement, catch handles errors that occur during the API request or if an error response is received.
     }catch(error){
        console.log(error)
        return { 
          success: false,
          error: error.response ? error.response.data.error : "Network error"
        }

     }
}


