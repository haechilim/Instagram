import { combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit"
import profilePopup from "@/modules/profilePopup"
import postPopup from "@/modules/postPopup"

const rootReducers = combineReducers({
    profilePopup,
    postPopup
});

const store = configureStore({
    reducer: rootReducers
});

export default store;