import { createSlice } from '@reduxjs/toolkit'
import useDataFilter from '@/hooks/useFilterDataByPeriod'
import useFilterArrayByUserName from '@/hooks/useFilterDataByUsername'

const initialState = {
  AllLinks: [],
  DisplayLinks: [],
  sharing: false,
 }



export const urlsSlice = createSlice({
  name: 'urls',
  initialState,
  reducers: {
    setURLS: (state, action) => {
     const incomingData = action.payload
     state.AllLinks = incomingData
     state.DisplayLinks = incomingData
    },
    deleteURL: (state, action) => {
     const deleteID = action.payload
     const updatedURLS = state.AllLinks
     const indexToDelete = updatedURLS.findIndex(item => item.id === deleteID);
     updatedURLS.splice(indexToDelete, 1)
     state.AllLinks = updatedURLS
     state.DisplayLinks = updatedURLS
    },
    setSharing: (state, action) => {
     const newSharingState = action.payload
     state.sharing = newSharingState
    },
    // filterLinks: (state, action) => {
    //  const { filterData } = useDataFilter()
    //  const period = action.payload.period
    //  const who = action.payload.who
    // if(period !== 'All time' && who !=='Everyone'){
    //   const intialFilter = filterData(state.AllLinks, period)
    //   const finalFilter = useFilterArrayByUserName(intialFilter, who)
      
    //   state.DisplayLinks = finalFilter
    // }else if(period === 'All time' && who !== 'Everyone'){
    //   const filteredData = useFilterArrayByUserName(state.AllLinks, who)
    //   state.DisplayLinks = filteredData
    // } else if(period !== 'All time' && who === 'Everyone'){
    //   const filteredData = filterData(state.AllLinks, period)
    //    state.DisplayLinks = filteredData
    // }else{
    //   state.DisplayLinks = state.AllLinks
    // }
    // }
   },
})

export default urlsSlice.reducer
export const  { setURLS, deleteURL, setSharing, } = urlsSlice.actions