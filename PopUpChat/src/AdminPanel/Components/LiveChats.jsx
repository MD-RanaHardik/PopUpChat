/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { socket } from "../../socket";
import { getUserData } from "../../State/Actions/adminDataAction";

export default function LiveChats({ chatdata, chatsetter }) {

  const dispacher = useDispatch();
  const admindata = useSelector(state => state.adminData.data);
  const userdata = useSelector(state => state.adminData);
  
  const loc = useLocation();

  const [property_id, setPropertyID] = useState("");

  var audio = document.getElementById('audio');
 

  useEffect(() => {
    const urldata = new URLSearchParams(window.location.search);
    if(urldata.get("property_id") != null){
      setPropertyID(urldata.get("property_id"));
    }else{
        setPropertyID(urldata.get(""));
    }
    
  }, [dispacher,loc.search])


 



  socket.on(property_id, (msg) => {
    dispacher(getUserData(userdata.loggedin_user));
    playPause();
    
    console.log("soket chats  +++++++++++++++", msg)
  })




  function playPause() {
    audio.play();
  }

  function stop() {
    // playPause()
    audio.pause();
    audio.currentTime = 0;
    
  }



  return (
    <>
      <audio id="audio">
        <source src="Vintage-bell-ringtone.mp3" type="audio/mpeg" />
      </audio>
      <button onClick={()=>{playPause()}}>Test</button>
      <h1 className="text-2xl font-semibold mb-2 text-slate-700">Chats</h1>
      <div className="shadow-lg h-96  p-2 overflow-y-scroll ">
        {
         (admindata != undefined) && (admindata.property != undefined) && (admindata.property[property_id] != undefined) && 
         
          (admindata.property[property_id]["Chat"] != undefined) &&
            Object.keys(admindata.property[property_id]["Chat"]).map((data, index) => {
              if (!admindata.property[property_id]["Chat"][data]["is_completed"]) {
                return <ChatWidget key={data} id={index} ip={data} property_id={property_id} chatsetter={chatsetter} chatid={admindata.property[property_id]["Chat"][data]["_id"]} />
              }
            }
          )
        }

      </div>
    </>

  )
}

function ChatWidget({ id, ip, chatid, chatsetter, property_id }) {
  const dispacher = useDispatch();
  const userdata = useSelector(state => state.adminData);
  return <div className="grid grid-cols-4 m-5 bg-blue-100 p-3  drop-shadow-md rounded-md">
    <div className="flex col-span-3">
      <img className="h-10 w-10" src="https://img.icons8.com/3d-fluency/94/user-male-circle.png" alt="person-male" />
      <div className="ml-3">
        <p className="text-blue-950 font-semibold ">Visitor {id}</p>
        <p className="text-blue-950 text-xs break-words ">{ip}</p>
      </div>

    </div>
    <div className="col-span-1 mx-auto">
      <button onClick={() => { dispacher(getUserData(userdata.loggedin_user)); chatsetter({ ip: ip, widget_id: chatid, is_chat_started: true, property_id: property_id }) }} className="h-10 bg-blue-900 text-white px-4 rounded-lg hover:bg-blue-950">Chat Now</button>
    </div>
    
    

  </div>
}
