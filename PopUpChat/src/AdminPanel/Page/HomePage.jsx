/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { socket } from "../../socket";
import { setLiveVisitor, setLiverUserData } from "../../State/Reducers/adminDataReducer";
import LiveVisitorsList from "../Components/LiveVisitorsList";

export default function HomePage() {

  const admindata = useSelector(state => state.adminData);
  const dispach = useDispatch();
  const [property_id, setPropertyID] =useState("");
  
  const urldata = new URLSearchParams(window.location.search);
  
  useEffect(() => {
    socket.connect();
    if(urldata.get("property_id") != null){
      setPropertyID(urldata.get("property_id"));
    }else{
      setPropertyID(urldata.get(""));
    }
    
    
  }, [])

 

  socket.on((property_id != "" && property_id != null) ? `${property_id}::liveuser` : "nothing",(msg)=>{
    // console.log("rre ++++++++++++++" + `${msg.split("::")[0]}::${msg.split("::")[1]}::${msg.split("::")[3]}`);
    dispach(setLiverUserData(`${msg.split("::")[0]}::${msg.split("::")[1]}::${msg.split("::")[3]}`));
   
  })

  

  return (
   
    <div className="col-span-5 h-full p-10">
       <button onClick={()=>dispach(setLiveVisitor())}>test</button>
      <h2 className="text-2xl font-bold text-blue-950 dark:text-slate-300">Welcome to Chat.io</h2>
      <p className="text-blue-900 text-sm font-medium dark:text-slate-300">grow your buisness with chat.io</p>

      <div className="bg-white p-5 rounded-lg drop-shadow-lg mt-5 dark:bg-slate-800">
          <p className="text-blue-900 text-sm dark:text-slate-300">Loggedin with</p>
          <p className="text-2xl font-semibold text-blue-950 dark:text-slate-300">{
            (Object.keys(admindata).length >0 && admindata.loggedin_user != "") && admindata.loggedin_user
          }</p>
      </div>

      <div className="grid grid-cols-2 gap-4 py-5"> 
    
        <div className="bg-white p-5 rounded-lg drop-shadow-lg dark:bg-slate-800">
          <p className="text-blue-900 text-sm dark:text-slate-300">Total Properties</p>
          <p className="text-5xl font-semibold text-blue-950 dark:text-slate-300">{
            (Object.keys(admindata).length >0 && admindata.data != undefined &&  admindata.data.property != undefined)&& Object.keys(admindata.data.property).length
          }</p>
        </div>

       

        <div className="bg-white p-5 rounded-lg drop-shadow-lg dark:bg-slate-800">
          <p className="text-blue-900 text-sm dark:text-slate-300">Live Visitors</p>
          <p className="text-5xl font-semibold text-blue-950 dark:text-slate-300">{admindata.live_visitor}</p>
        </div>

        

      </div>
      <LiveVisitorsList />

      {/* <div className="h-full bg-white rounded-lg p-52 mb-10">

      </div> */}

    </div>
  )
}
