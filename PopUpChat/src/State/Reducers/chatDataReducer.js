/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const chatDataReducer = createSlice({
    name:"chatDataReducer",
    initialState:{
        chats:[],
        showchat:false,
    },reducers:{
        setNewChat:(state,action)=>{
            console.log("Payload ++++++++++",action.payload);
            state.chats = action.payload;
            state.showchat = true;
        },
        setNewMessage:(state,action)=>{
            state.chats.push(action.payload);
        }
    }
});

export default chatDataReducer.reducer;
export const {setNewChat,setNewMessage} = chatDataReducer.actions;