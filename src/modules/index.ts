import { combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit"
import profilePopup from "@/modules/profilePopup"

const rootReducers = combineReducers({
    profilePopup
});

const store = configureStore({
    reducer: rootReducers
});

export default store;