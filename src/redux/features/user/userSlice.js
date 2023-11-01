import { createSlice } from '@reduxjs/toolkit'
import { useRouter } from 'next/navigation'


const initialState = {
  isLoggedIn: false,
  "message": "Login successful.",
  "data": {
      "user": {
          "username": "ifihan",
          "email": "ecxunilag@gmail.com",
          "isCompleted": false,
          "role": "SUPER_ADMIN",
          "createdAt": "2023-09-06T02:42:24.470Z",
          "updatedAt": "2023-09-06T02:42:24.470Z"
      },
      "tokens": {
          "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiaWZpaGFuIiwicm9sZSI6IlNVUEVSX0FETUlOIn0sImlhdCI6MTY5NzYyMTYxNSwiZXhwIjoxNzAxMDE2ODU5MjE2fQ.iAyfxHj5vitgP1RAF7wPEq_CvMxwJCjw1vkHLBrCGwY",
          "accessTokenExpiresIn": 1699319237601,
          "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiaWZpaGFuIiwicm9sZSI6IlNVUEVSX0FETUlOIn0sImlhdCI6MTY5NzYyMTYxNSwiZXhwIjoxNzAxMDE2ODU5MjE2fQ.FYBB17sLkP-zqA6niO7ubGn5YeNwW57bQyKp4VkhjYI",
          "refreshTokenExpiresIn": 1699319237601
      },
      "links": [
          {
              "name": "kafka",
              "shortUrl": "ecxurls.com/kafka",
              "originalUrl": "https://www.freecodecamp.org/news/build-a-real-time-notification-system-with-go-and-kafka",
              "createdBy": "64f7e71097fbbe3e3f936dd5",
              "clicksCount": 0,
              "createdAt": "2023-09-06T16:35:13.135Z",
              "updatedAt": "2023-09-06T16:35:13.135Z",
              "id": "64f8aa4153a6800f53c6f566"
          },
          {
              "name": "newkafa",
              "shortUrl": "ecxurls.com/newkafa",
              "originalUrl": "https://www.freecodecamp.org/news/build-a-real-time-notification-system-with-go-and-kafkart",
              "createdBy": "64f7e71097fbbe3e3f936dd5",
              "clicksCount": 1,
              "createdAt": "2023-10-16T15:08:35.171Z",
              "updatedAt": "2023-10-16T18:04:05.177Z",
              "id": "652d51f36b408e9ad638dd77"
          },
          {
              "name": "test",
              "shortUrl": "ecxurls.com/test",
              "originalUrl": "https://firebase.com",
              "createdBy": "64f7e71097fbbe3e3f936dd5",
              "clicksCount": 1,
              "createdAt": "2023-10-16T15:08:51.719Z",
              "updatedAt": "2023-10-17T18:14:19.008Z",
              "id": "652d52036b408e9ad638dd7c"
          },
          {
              "name": "newkafadfgf",
              "shortUrl": "ecxurls.com/newkafadfgf",
              "originalUrl": "https://www.freecodecamp.org/news/build-a-real-time-notification-system-with-go-and-kafkart4756475",
              "createdBy": "64f7e71097fbbe3e3f936dd5",
              "clicksCount": 0,
              "createdAt": "2023-10-16T15:32:38.609Z",
              "updatedAt": "2023-10-16T15:32:38.609Z",
              "id": "652d57966b408e9ad638dd84"
          },
          {
              "name": "trainings",
              "shortUrl": "ecxurls.com/trainings",
              "originalUrl": "https://training.engcareerexpo.com",
              "createdBy": "64f7e71097fbbe3e3f936dd5",
              "clicksCount": 1,
              "createdAt": "2023-10-16T17:57:07.585Z",
              "updatedAt": "2023-10-16T17:57:45.862Z",
              "id": "652d7973e00c090693c7251a"
          },
          {
              "name": "newsletter",
              "shortUrl": "ecxurls.com/newsletter",
              "originalUrl": "https://newsletter.engcareerexpo.com",
              "createdBy": "64f7e71097fbbe3e3f936dd5",
              "clicksCount": 1,
              "createdAt": "2023-10-16T17:59:45.159Z",
              "updatedAt": "2023-10-16T18:00:06.181Z",
              "id": "652d7a11e00c090693c72521"
          },
          {
              "name": "firebase",
              "shortUrl": "ecxurls.com/firebase",
              "originalUrl": "https://firebase2.com",
              "createdBy": "64f7e71097fbbe3e3f936dd5",
              "clicksCount": 0,
              "createdAt": "2023-10-17T18:22:44.524Z",
              "updatedAt": "2023-10-17T18:22:44.524Z",
              "id": "652ed0f43f18bd5f6df33b65"
          },
          {
              "name": "abisola",
              "shortUrl": "ecxurls.com/abisola",
              "originalUrl": "http://abisola.com",
              "createdBy": "64f7e71097fbbe3e3f936dd5",
              "clicksCount": 0,
              "createdAt": "2023-10-17T18:32:12.421Z",
              "updatedAt": "2023-10-17T18:32:12.421Z",
              "id": "652ed32c3f18bd5f6df33b6e"
          }
      ]
  }
}


export const userSlice = createSlice({
  name: 'urls',
  initialState,
  reducers: {
    Login: (state) => {
      return {
        ...state,
        isLoggedIn: true
      }
    },
    LogOut: (state) => {
      const router = useRouter()
      router.push('/')
      return {
        ...state,
        isLoggedIn: false
      }

    }
  },
})

export const {
  Login,
  LogOut
} = userSlice.actions

export default userSlice.reducer