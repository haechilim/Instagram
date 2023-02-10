import { combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit"
import profilePopUp from "@/modules/profilePopUp"

const rootReducers = combineReducers({
    profilePopUp
});

const store = configureStore({
    reducer: rootReducers
});

export default store;