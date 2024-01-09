import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    name: 'Ifihan Oluseye',
    dateJoined: new Date('2023-10-12T20:00:00.00Z')
  },
  {
    name: 'Emmanuel',
    dateJoined: new Date('2023-10-10T20:00:00.00Z')
  },
  {
    name: 'David Dada',
    dateJoined: new Date('2023-10-01T20:00:00.00Z')
  },
  {
    name: 'Admin 4',
    dateJoined: new Date('2023-09-25T20:00:00.00Z')
  },
  {
    name: 'Admin 5',
    dateJoined: new Date('2023-09-23T21:00:00.00Z')
  },
  {
    name: 'Admin 6',
    dateJoined: new Date('2023-09-13T20:00:00.00Z')
  },
  {
    name: 'Admin 7',
    dateJoined: new Date('2023-09-13T19:00:00.00Z')
  },
  {
    name: 'Admin 8',
    dateJoined: new Date('2023-09-13T10:00:00.00Z')
  },
]


export const adminsSlice = createSlice({
  name: 'admins',
  initialState,
  reducers: {},
})

export const { countAdmins } = adminsSlice.actions

export default adminsSlice.reducer