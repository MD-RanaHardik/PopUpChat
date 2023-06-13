import {configureStore}  from "@reduxjs/toolkit"
import adminDataReducer from "../Reducers/adminDataReducer";
import chatDataReducer from "../Reducers/chatDataReducer";

export const store = configureStore({
    reducer:{
        adminData:adminDataReducer,
        chatData:chatDataReducer
    }
});