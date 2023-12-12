import {configureStore} from "@reduxjs/toolkit"
import appSlice from "./appSlice"
import searchSlice from "./searchSlice"
import selectedSearchOptionSlice from "./selectedSearchOptionSlice"
import searchBtnSlice from "./searchBtnSlice"
import chatSlice from "./chatSlice"


const store = configureStore({

reducer : {
    app : appSlice,
    search : searchSlice,
    selectedSearch : selectedSearchOptionSlice,
    searchBtn:searchBtnSlice,
    chat : chatSlice,
},
})

export default store