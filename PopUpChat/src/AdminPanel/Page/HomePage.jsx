/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { socket } from "../../socket";

export default function HomePage() {

  const admindata = useSelector(state => state.adminData);
  const dispach = useDispatch();
  const [property_id, setPropertyID] =useState("");
  const [liverusercount,setLiveUserCount] =useState(0);
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
    setLiveUserCount(liverusercount+1);
   
  })

  

  return (
    <div className="col-span-5 h-screen p-10">
      <h2 className="text-2xl font-bold text-blue-950">Welcome to Chat.io</h2>
      <p className="text-blue-900 text-sm font-medium">grow your buisness with chat.io</p>

      <div className="bg-white p-5 rounded-lg drop-shadow-lg mt-5">
          <p className="text-blue-900 text-sm ">Loggedin with</p>
          <p className="text-2xl font-semibold text-blue-950">{
            (Object.keys(admindata).length >0 && admindata.loggedin_user != "") && admindata.loggedin_user
          }</p>
      </div>

      <div className="grid grid-cols-2 gap-4 py-5"> 
    
        <div className="bg-white p-5 rounded-lg drop-shadow-lg">
          <p className="text-blue-900 text-sm ">Total Properties</p>
          <p className="text-5xl font-semibold text-blue-950">{
            (Object.keys(admindata).length >0 && admindata.data != undefined &&  admindata.data.property != undefined)&& Object.keys(admindata.data.property).length
          }</p>
        </div>

       

        <div className="bg-white p-5 rounded-lg drop-shadow-lg">
          <p className="text-blue-900 text-sm ">Live Visitors</p>
          <p className="text-5xl font-semibold text-blue-950">{liverusercount}</p>
        </div>

        

      </div>

      {/* <div className="h-full bg-white rounded-lg p-52 mb-10">

      </div> */}

    </div>
  )
}
