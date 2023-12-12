import { createSlice } from "@reduxjs/toolkit";

const selectedSearchOptionSlice= createSlice({
    name : "selectedSearch" ,
    initialState:{
        selectedValue : ""
    },


    reducers : {
        selectedMenu :  (state,action) => {
        //   console.log(state.selectedValue,"in",state)
        state.selectedValue = (action.payload)
    },
}

})

export const {selectedMenu}  = selectedSearchOptionSlice.actions

export default selectedSearchOptionSlice.reducer

// selectedValue : ""