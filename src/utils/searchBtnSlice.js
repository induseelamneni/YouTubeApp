import { createSlice } from "@reduxjs/toolkit";

const searchBtnSlice = createSlice({
    name : "searchBtn" ,
    initialState : {
        isBtnClicked : false

    },


    reducers : {
        btnClicked :  (state) => {
            state.isBtnClicked  =  true
        },
       
       

    },

})

export const {btnClicked}  = searchBtnSlice.actions

export default searchBtnSlice.reducer