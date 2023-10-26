import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  urlsCreated: [
    {
      name: "ECX Git",
      shortLink: "https://ecx.com/Bn4Olnxj",
      href: ""
    },
    {
      name: "ECX Newsletter",
      shortLink: "https://ecx.com/Co5Pmoyk",
      href: ""
    },
    {
      name: "ECX 30 Days of Code",
      shortLink: "https://ecx.com/Dp6Qnpzl",
      href: ""
    }
  ],
  urlClicks: new Array(20),
  urlShares : new Array(10)
}



export const urlsDemoSlice = createSlice({
  name: 'urlsDemo',
  initialState,
  reducers: {},
})

export default urlsDemoSlice.reducer