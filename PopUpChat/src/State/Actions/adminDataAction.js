/* eslint-disable no-unused-vars */
import axios from "axios";
import { API_HOST } from "../../setting";
import {createAsyncThunk} from "@reduxjs/toolkit"

export const getUserData = createAsyncThunk("admindata/getalldata",async ()=>{

    let userdata = await axios.post(`${API_HOST}/admindata/getalldata`,{Email:"hardik.rana@minddeft.net"});
    
    return userdata.data[0];

})

export const getUserEmail = createAsyncThunk("getUserEmail",async()=>{
    let token = sessionStorage.getItem("loginSession");
    let data = await axios.post(`${API_HOST}/getDecryptedData`,{token:token});
    return data.data
});

export function setLoggedInUser(state,action){
    console.log(action.payload.Email);
    state.loggedin_user = action.payload.Email;
}