import axios from "axios"


export const userLogin = async (username, password) => {
    try{
        const response = await axios.post("https://ecx-url-shortener.azurewebsites.net/api/v1/auth/login", {
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
     }catch(error){
        console.log(error)
        return { 
          success: false,
          error: error.response ? error.response.data.error : "Network error"
        }

     }
}


