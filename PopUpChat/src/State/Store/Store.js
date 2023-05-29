import {configureStore}  from "@reduxjs/toolkit"
import adminDataReducer from "../Reducers/adminDataReducer";

export const store = configureStore({
    reducer:{
        adminData:adminDataReducer
    }
});