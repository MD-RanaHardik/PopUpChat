/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import { socket } from "../../socket"
import axios from "axios";
import { API_HOST } from "../../setting";
import { useDispatch, useSelector } from "react-redux";

export default function MessageCom({ chatdata, chatsetter }) {

    let [message, setMessage] = useState("")
    let [chats, setChats] = useState([]);
    let messageContainer = document.getElementById("msg");

    const dispacher = useDispatch();
    const admindata = useSelector(state => state.adminData.data);
    var audio = document.getElementById('audio');

    useEffect(() => {
        if (admindata.property != undefined & chatdata.property_id != "") {
            setChats(admindata.property[chatdata.property_id]["Chat"][chatdata.ip]["ChatData"]);

        }

        // console.log(admindata.property[chatdata.property_id]["Chat"][chatdata.widget_id]);

    }, [chatdata])

    socket.on((chatdata.ip != "") ? chatdata.ip : "notingtorecive", (msg) => {
        playPause();
        setChats([...chats,msg]);
        messageContainer.scrollTo(0, messageContainer.scrollHeight);
        
    })

    

    async function handleSendMessageEvent() {
        if (message != "") {
            playPause();
            // let newmessage = `Admin|||${message}|||${new Date()}`;
            // setChats([...chats,newmessage]);
            let response = await axios.get(`${API_HOST}/client/message/Admin/${chatdata.widget_id}/${chatdata.ip}/${message}`);
            // console.log(response.data);
            messageContainer.scrollTo(0, messageContainer.scrollHeight);
            setMessage("");
        }
    }

    function playPause() {
        audio.play();
    }


    return (
        <>
            <audio id="audio">
                <source src="button-124476.mp3" type="audio/mpeg" />
            </audio>
            <h1 className="text-2xl font-semibold mb-2 text-slate-700">Message </h1>
            <div className="shadow-lg " id="chat" >

                <div className=" bg-blue-900 flex pl-3 justify-between">

                    {
                        (chatdata.widget_id != "" && chatdata.ip != "") ?
                            <div className="flex">
                                <img className="rounded-full h-14 w-14 my-auto" src="https://static.vecteezy.com/system/resources/previews/011/381/911/original/male-customer-service-3d-cartoon-avatar-portrait-png.png" alt="not found" />
                                <div className="my-auto">
                                    <p className="font-semibold text-lg text-center text-white">{chatdata.widget_id}</p>
                                    <div className="flex mt-1">
                                        <span className="h-2 w-2 rounded-full bg-white animate-ping my-auto mr-2"></span>
                                        <p className="text-xs text-white">{chatdata.ip}</p>
                                    </div>
                                </div>
                            </div>
                            :

                            <p className="text-white font-semibold py-4">Chat.io</p>
                    }


                </div>
                <div className="h-80 w-full overflow-y-scroll pb-20 flex flex-col" id="msg">

                    {
                        (chatdata.widget_id != "" && chatdata.ip != "") &&

                        chats.map((chat, index) => {

                            if (chat.split("|||")[0] == "Admin") {
                                return <AdminChat key={index} msg={chat.split("|||")[1]} />
                            }else{
                                return <UserChat key={index} msg={chat.split("|||")[1]} />
                            }
                        })

                    }



                    {/* <div className="flex justify-start">
                        <div className=" bg-blue-900 text-white rounded-r-lg rounded-tl-lg p-2 mr-20 my-3 ml-2">Hello</div>
                    </div>

                    <div className="flex justify-end">
                        <div className="w-auto bg-blue-900 text-white rounded-l-lg rounded-tr-lg p-2  ml-20 my-3 mr-2">Hello</div>
                    </div>

                    <div className="flex justify-start">
                        <div className=" bg-blue-900 text-white rounded-r-lg rounded-tl-lg p-2 mr-20 my-3 ml-2">Hello</div>
                    </div>

                    <div className="flex justify-end">
                        <div className="w-auto bg-blue-900 text-white rounded-l-lg rounded-tr-lg p-2  ml-20 my-3 mr-2">Hello</div>
                    </div>

                    <div className="flex justify-start">
                        <div className=" bg-blue-900 text-white rounded-r-lg rounded-tl-lg p-2 mr-20 my-3 ml-2">Hello</div>
                    </div>

                    <div className="flex justify-end">
                        <div className="w-auto bg-blue-900 text-white rounded-l-lg rounded-tr-lg p-2  ml-20 my-3 mr-2">Hello</div>
                    </div> */}

                </div>
                <div className="p-4  bottom-0 w-full bg-blue-100">

                    {
                        (chatdata.widget_id != "" && chatdata.ip != "") ?
                            <div className="flex w-full " id="inputs">
                                <input type="text" value={message} onChange={(e) => { setMessage(e.target.value) }} id="msginput" placeholder="Message" className="placeholder-slate-700 w-full text-blue-950 py-2 px-2 rounded-lg bg-white ring-1 ring-slate-100 outline-none" />
                                <button onClick={() => { handleSendMessageEvent() }} id="sendmsg" className="h-10 w-11 ml-1 bg-blue-900 rounded-full hover:bg-blue-950"><img className="p-2" src="https://img.icons8.com/ios-glyphs/100/FFFFFF/sent.png" alt="not" /></button>
                            </div> : <p className="text-center font-medium">Click on chat now to start chat</p>
                    }


                    {/* <button id="chatnowbtn" className="bg-blue-900 text-white font-semibold w-full py-2 rounded-xl hover:bg-blue-800">Chat Now</button> */}
                </div>
            </div></>

    )
}

function UserChat({ msg }) {
    return <div className="flex justify-start">
        <div className=" bg-blue-900  break-all text-white rounded-r-lg rounded-tl-lg p-2 mr-20 my-3 ml-2">{msg}</div>
    </div>
}

function AdminChat({ msg }) {
    return <div className="flex justify-end ">
        <div className="w-auto break-all bg-blue-900 text-white rounded-l-lg rounded-tr-lg p-2  ml-20 my-3 mr-2">{msg}</div>
    </div>
}
