/* eslint-disable no-unused-vars */
import {createSlice} from "@reduxjs/toolkit";
import { getUserData, getUserEmail, setLoggedInUser } from "../Actions/adminDataAction";



const adminDataSlice = createSlice({
    name:"adminDataReducer",
    initialState:{
        loggedin_user:"",
        data:{},
    },
    reducers:{
        setNewLoggedInUser:(state,action)=>{
            state.loggedin_user =action.payload;
        }
    },extraReducers:(builder)=>{
        builder.addCase(getUserData.fulfilled,(state,action)=>{
            state.data = action.payload;
        }),
        builder.addCase(getUserEmail.fulfilled,(state,action)=>{
            state.loggedin_user = action.payload.email;
            state.data =action.payload.data;
        })
    }
});


export const {setNewLoggedInUser} = adminDataSlice.actions;

export default adminDataSlice.reducer;