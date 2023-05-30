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
  const loc = useLocation();

  const [property_id, setPropertyID] = useState("");

  useEffect(() => {
    const urldata = new URLSearchParams(window.location.search);
    setPropertyID(urldata.get("property_id"));
    socket.connect();
  }, [loc.search])

  socket.on("646e0c21eb04b792497da3f8", (msg) => {
    dispacher(getUserData());
    console.log("soket +++++++++++++++", msg)
  })

  

  return (
    <>
      <h1 className="text-2xl font-semibold mb-2 text-slate-700">Chats</h1>
      <div className="shadow-lg h-full  p-2 overflow-y-scroll ">
        {
          (admindata.property != undefined) && Object.keys(admindata.property[property_id]["Chat"]).map((data, index) => {
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

function ChatWidget({ id, ip, chatid ,chatsetter,property_id}) {
    const dispacher = useDispatch();
  return <div className="flex m-5 bg-blue-100 p-3 justify-between drop-shadow-md rounded-md">
    <div className="flex ">
      <img className="h-10 w-10" src="https://img.icons8.com/3d-fluency/94/user-male-circle.png" alt="person-male" />
      <div className="ml-3">
        <p className="text-blue-950 font-semibold ">Visitor {id}</p>
        <p className="text-blue-950 text-xs">{ip}</p>
      </div>

    </div>
    <button onClick={()=>{dispacher(getUserData()); chatsetter({ip:ip,widget_id:chatid,is_chat_started:true,property_id:property_id})}} className="bg-blue-900 text-white px-4 rounded-lg hover:bg-blue-950">Chat Now</button>

  </div>
}
