import { createSlice } from "@reduxjs/toolkit";

const searchValueSlice = createSlice({
    name : "searchBtn" ,
    initialState : {
        searchedWord : ""

    },


    reducers : {
        userSearchedValue :  (state,action) => {
            state.searchedWord  =  action.payload
        },
       
       

    },

})

export const {userSearchedValue}  = searchValueSlice.actions

export default searchValueSlice.reducer