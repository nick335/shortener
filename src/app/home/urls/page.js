"use client"
import React, { useEffect, useRef, useState } from 'react'
import Filters from '@/components/urls/Filters'
import { getAllLinks } from '@/api/getAllLinks'
import UrlsSection from '@/components/urls/UrlsSection'


export default function URLSPage() {
  const sample = {
    "message": "All links.",
    "data": [
        {
            "name": "kafka",
            "shortUrl": "ecxurls.com/kafka",
            "originalUrl": "https://www.freecodecamp.org/news/build-a-real-time-notification-system-with-go-and-kafka",
            "createdBy": {
                "username": "ifihan",
                "email": "ecxunilag@gmail.com",
                "isCompleted": false,
                "role": "SUPER_ADMIN",
                "createdAt": "2023-09-06T02:42:24.470Z",
                "updatedAt": "2023-09-06T02:42:24.470Z",
                "id": "64f7e71097fbbe3e3f936dd5"
            },
            "clicksCount": 0,
            "createdAt": "2023-09-06T16:35:13.135Z",
            "updatedAt": "2023-09-06T16:35:13.135Z",
            "id": "64f8aa4153a6800f53c6f566"
        },
        {
            "name": "newkafa",
            "shortUrl": "ecxurls.com/newkafa",
            "originalUrl": "https://www.freecodecamp.org/news/build-a-real-time-notification-system-with-go-and-kafkart",
            "createdBy": {
                "username": "ifihan",
                "email": "ecxunilag@gmail.com",
                "isCompleted": false,
                "role": "SUPER_ADMIN",
                "createdAt": "2023-09-06T02:42:24.470Z",
                "updatedAt": "2023-09-06T02:42:24.470Z",
                "id": "64f7e71097fbbe3e3f936dd5"
            },
            "clicksCount": 1,
            "createdAt": "2023-10-16T15:08:35.171Z",
            "updatedAt": "2023-10-16T18:04:05.177Z",
            "id": "652d51f36b408e9ad638dd77"
        },
        {
            "name": "test",
            "shortUrl": "ecxurls.com/test",
            "originalUrl": "https://firebase.com",
            "createdBy": {
                "username": "ifihan",
                "email": "ecxunilag@gmail.com",
                "isCompleted": false,
                "role": "SUPER_ADMIN",
                "createdAt": "2023-09-06T02:42:24.470Z",
                "updatedAt": "2023-09-06T02:42:24.470Z",
                "id": "64f7e71097fbbe3e3f936dd5"
            },
            "clicksCount": 2,
            "createdAt": "2023-10-16T15:08:51.719Z",
            "updatedAt": "2023-10-18T17:47:28.221Z",
            "id": "652d52036b408e9ad638dd7c"
        },
        {
            "name": "newkafadfgf",
            "shortUrl": "ecxurls.com/newkafadfgf",
            "originalUrl": "https://www.freecodecamp.org/news/build-a-real-time-notification-system-with-go-and-kafkart4756475",
            "createdBy": {
                "username": "ifihan",
                "email": "ecxunilag@gmail.com",
                "isCompleted": false,
                "role": "SUPER_ADMIN",
                "createdAt": "2023-09-06T02:42:24.470Z",
                "updatedAt": "2023-09-06T02:42:24.470Z",
                "id": "64f7e71097fbbe3e3f936dd5"
            },
            "clicksCount": 0,
            "createdAt": "2023-10-16T15:32:38.609Z",
            "updatedAt": "2023-10-16T15:32:38.609Z",
            "id": "652d57966b408e9ad638dd84"
        },
        {
            "name": "trainings",
            "shortUrl": "ecxurls.com/trainings",
            "originalUrl": "http://training.engcareerexpo.com",
            "createdBy": {
                "username": "ifihan",
                "email": "ecxunilag@gmail.com",
                "isCompleted": false,
                "role": "SUPER_ADMIN",
                "createdAt": "2023-09-06T02:42:24.470Z",
                "updatedAt": "2023-09-06T02:42:24.470Z",
                "id": "64f7e71097fbbe3e3f936dd5"
            },
            "clicksCount": 3,
            "createdAt": "2023-10-16T17:57:07.585Z",
            "updatedAt": "2023-10-18T17:22:25.426Z",
            "id": "652d7973e00c090693c7251a"
        },
        {
            "name": "newsletter",
            "shortUrl": "ecxurls.com/newsletter",
            "originalUrl": "https://newsletter.engcareerexpo.com",
            "createdBy": {
                "username": "ifihan",
                "email": "ecxunilag@gmail.com",
                "isCompleted": false,
                "role": "SUPER_ADMIN",
                "createdAt": "2023-09-06T02:42:24.470Z",
                "updatedAt": "2023-09-06T02:42:24.470Z",
                "id": "64f7e71097fbbe3e3f936dd5"
            },
            "clicksCount": 5,
            "createdAt": "2023-10-16T17:59:45.159Z",
            "updatedAt": "2023-10-18T17:45:00.520Z",
            "id": "652d7a11e00c090693c72521"
        },
        {
            "name": "firebase",
            "shortUrl": "ecxurls.com/firebase",
            "originalUrl": "https://firebase2.com",
            "createdBy": {
                "username": "ifihan",
                "email": "ecxunilag@gmail.com",
                "isCompleted": false,
                "role": "SUPER_ADMIN",
                "createdAt": "2023-09-06T02:42:24.470Z",
                "updatedAt": "2023-09-06T02:42:24.470Z",
                "id": "64f7e71097fbbe3e3f936dd5"
            },
            "clicksCount": 0,
            "createdAt": "2023-10-17T18:22:44.524Z",
            "updatedAt": "2023-10-17T18:22:44.524Z",
            "id": "652ed0f43f18bd5f6df33b65"
        },
        {
            "name": "abisola",
            "shortUrl": "ecxurls.com/abisola",
            "originalUrl": "http://abisola.com",
            "createdBy": {
                "username": "ifihan",
                "email": "ecxunilag@gmail.com",
                "isCompleted": false,
                "role": "SUPER_ADMIN",
                "createdAt": "2023-09-06T02:42:24.470Z",
                "updatedAt": "2023-09-06T02:42:24.470Z",
                "id": "64f7e71097fbbe3e3f936dd5"
            },
            "clicksCount": 1,
            "createdAt": "2023-10-17T18:32:12.421Z",
            "updatedAt": "2023-10-18T17:31:42.129Z",
            "id": "652ed32c3f18bd5f6df33b6e"
        },
        {
            "name": "training",
            "shortUrl": "ecxurls.com/training",
            "originalUrl": "https://docs.google.com/forms/d/e/1FAIpQLSfqQN5x9IGv6IgR5fhBNmGUA4K2_AI8laMYaARF3d1aV0-bqw/viewform",
            "createdBy": {
                "username": "ifihan",
                "email": "ecxunilag@gmail.com",
                "isCompleted": false,
                "role": "SUPER_ADMIN",
                "createdAt": "2023-09-06T02:42:24.470Z",
                "updatedAt": "2023-09-06T02:42:24.470Z",
                "id": "64f7e71097fbbe3e3f936dd5"
            },
            "clicksCount": 7,
            "createdAt": "2023-10-18T17:35:08.508Z",
            "updatedAt": "2023-10-18T17:43:13.937Z",
            "id": "6530174c45658a1d0b17fd6f"
        }
    ]
}

  const [allLinks, setAllLinks] = useState(sample.data)

  function logger(res) {
    const { data } = res
    setAllLinks(data)
  }

  useEffect(() => {
    // getAllLinks(logger)
  }, [])

  const filteredData = [...allLinks]

  
  // The max-h is a temporary fix
  return (
    <main className='max-h-[calc(100vh-200px)] lg:max-h-[calc(100vh-300px)] flex flex-col gap-[15px] grow  relative h-full'>
      <h6 className='text-ecx-grey lg:hidden'>URLs</h6>
      
      <Filters />

      <p className='text-sm mt-[0.94rem] text-ecx-grey'>{allLinks.length || '...'} URL(s)</p>

      <UrlsSection data={filteredData || []} />
    </main>
  )
}
