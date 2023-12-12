import {createSlice} from "@reduxjs/toolkit"
const chatSlice = createSlice({
    name:"chat",
    initialState:{
        chatmessages:[]
    },
    reducers : {
     addMessages : (state,actions) => {
        state.chatmessages.splice(10,1)
        state.chatmessages.push(actions.payload)
    }
    }

})

export const {addMessages} = chatSlice.actions

export default chatSlice.reducer