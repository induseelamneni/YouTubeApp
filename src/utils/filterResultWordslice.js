import { createSlice } from "@reduxjs/toolkit";

const filterResultWordSlice = createSlice({
    name:"filterWord",
    initialState :{
        resultedWord:[]

    },
    reducers:(state,action)=>{
      state.resultedWord = resultedWord.push(action.payload)

    }
})

export const {resultedWord} = filterResultWordSlice.actions

export default filterResultWordSlice.reducer