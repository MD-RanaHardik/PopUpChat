/* eslint-disable no-unused-vars */
import axios from "axios";
import { API_HOST } from "../../setting";
import {createAsyncThunk} from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux";

export const getUserData = createAsyncThunk("admindata/getalldata",async (email)=>{
    // console.log("dispacher called ")
    let userdata = await axios.post(`${API_HOST}/admindata/getalldata`,{Email:email});
    
    return userdata.data[0];

})

export const getUserDataT = async (email)=>{
    // console.log("dispacher called ")
    let userdata = await axios.post(`${API_HOST}/admindata/getalldata`,{Email:email});
    
    return userdata.data[0];

}

export const getUserEmail = createAsyncThunk("getUserEmail",async()=>{
    
   
    let token = sessionStorage.getItem("loginSession");
    let data = await axios.post(`${API_HOST}/getDecryptedData`,{token:token});
    let admindata = await getUserDataT(data.data);
    return {email:data.data,data:admindata};
});

export function setLoggedInUser(state,action){
    console.log(action.payload.Email);
    state.loggedin_user = action.payload.Email;
}