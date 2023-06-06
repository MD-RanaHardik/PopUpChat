/* eslint-disable no-unused-vars */
import {createSlice} from "@reduxjs/toolkit";
import { getUserData, getUserEmail, setLoggedInUser } from "../Actions/adminDataAction";



const adminDataSlice = createSlice({
    name:"adminDataReducer",
    initialState:{
        live_visitor:0,
        live_visitor_data:[],
        loggedin_user:"",
        data:{},
    },
    reducers:{
        setNewLoggedInUser:(state,action)=>{
            state.loggedin_user =action.payload;
        },
        setLiveVisitor:(state)=>{
            state.live_visitor +=1;
        },
        setLiverUserData:(state,action)=>{
           
           
            if(action.payload.split("::")[2] == "liveuser"){
                if(!state.live_visitor_data.includes(`${action.payload.split("::")[0]}::${action.payload.split("::")[1]}`)){
                    state.live_visitor_data.push(`${action.payload.split("::")[0]}::${action.payload.split("::")[1]}`);
                    state.live_visitor +=1;
                }
            }
          

            if(action.payload.split("::")[2] == "offlineuser"){
            
                if(state.live_visitor_data.includes(`${action.payload.split("::")[0]}::${action.payload.split("::")[1]}`)){
                    let data = state.live_visitor_data.filter(user => {
                        return user != `${action.payload.split("::")[0]}::${action.payload.split("::")[1]}`
                    })
                    state.live_visitor_data = data;
                    state.live_visitor -=1;
                }
            }

            
            
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


export const {setNewLoggedInUser,setLiveVisitor,setLiverUserData} = adminDataSlice.actions;

export default adminDataSlice.reducer;