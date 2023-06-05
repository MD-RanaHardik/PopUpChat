/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useContext, useEffect, useState } from "react";
import { socket } from "../../socket"
import axios from "axios";
import { API_HOST } from "../../setting";
import { useDispatch, useSelector } from "react-redux";
import { GComtext } from "../../App";
import { getUserData } from "../../State/Actions/adminDataAction";

export default function MessageCom({ chatdata, chatsetter }) {

    let [message, setMessage] = useState("")
    let [chats, setChats] = useState([]);

    let [popupmenu, setPopUpMenu] = useState(false);

    let messageContainer = document.getElementById("msg");

    const dispacher = useDispatch();
    const admindata = useSelector(state => state.adminData);


    var audio = document.getElementById('audio');
    const showMessage = useContext(GComtext);

    useEffect(() => {
        if (admindata.data.property != undefined & chatdata.property_id != "") {
            setChats(admindata.data.property[chatdata.property_id]["Chat"][chatdata.ip]["ChatData"]);
            setChats(chat=>[...chat,...chatdata.tempChat]);

        }

    }, [chatdata])

    socket.on((chatdata.ip != "") ? chatdata.ip : "notingtorecive", (msg) => {
        console.log("recived msg", msg);
        playPause();
        setChats([...chats, msg]);
        messageContainer.scrollTo(0, messageContainer.scrollHeight);

    })



    async function handleSendMessageEvent() {
        if (message != "") {

            let response = await axios.get(`${API_HOST}/client/message/Admin/${chatdata.widget_id}/${chatdata.ip}/${message}`);

            messageContainer.scrollTo(0, messageContainer.scrollHeight);
            setMessage("");
        }
    }

    function SendMessageOnEnter(ele) {

        if (ele.key === 'Enter') {
            handleSendMessageEvent();
        }
    }

    function playPause() {
        audio.play();
    }

    async function EndChat() {

        let response = await axios.get(`${API_HOST}/client/endchat/${chatdata.property_id}/${chatdata.ip}`);

        if (response.data.message === "Chat deleted") {
            setPopUpMenu(false);
            chatsetter({ ...chatdata, widget_id: "", ip: "", property_id: "" });
            dispacher(getUserData(admindata.loggedin_user));
            showMessage("Chat ended");
        } else {
            showMessage("Failed to end chat");
        }

    }


    return (
        <>
            <audio id="audio">
                <source src="button-124476.mp3" type="audio/mpeg" />
            </audio>
            <h1 className="text-2xl font-semibold mb-2 text-slate-700 dark:text-slate-300">Message </h1>
            <div className="shadow-lg relative" id="chat" >

                {
                    (popupmenu) && <div className="transition-all p-5 h-20 w-36 rounded-lg bg-white drop-shadow-lg absolute right-2 bottom-16">
                        <button onClick={() => { EndChat() }} className="text-red-900 font-semibold w-full py-1 text-sm transition-all rounded-sm  hover:bg-red-200">End chat</button>
                    </div>
                }



                <div className=" bg-blue-900 flex pl-3 justify-between overflow-hidden">

                    {
                        (chatdata.widget_id != "" && chatdata.ip != "") ?
                            <div className="flex">
                                <img className="rounded-full h-14 w-14 my-auto" src="https://static.vecteezy.com/system/resources/previews/011/381/911/original/male-customer-service-3d-cartoon-avatar-portrait-png.png" alt="not found" />
                                <div className="my-auto mr-2 w-full">
                                    <p className="font-semibold text-lg ml-2 text-white line-clamp-1 text-ellipsis dark:text-slate-300">{chatdata.widget_id}</p>
                                    <div className="flex mt-1">
                                        <span className="h-2 w-2 rounded-full bg-white animate-ping my-auto mr-2"></span>
                                        <p className="text-xs text-white line-clamp-1 text-ellipsis dark:text-slate-300">{chatdata.ip}</p>
                                    </div>
                                </div>


                            </div>
                            :

                            <p className="text-white font-semibold py-4">Chat.io</p>
                    }


                </div>
                <div className="h-80 w-full overflow-y-scroll pb-20 flex flex-col dark:bg-slate-800" id="msg">

                    {
                        (chatdata.widget_id != "" && chatdata.ip != "") &&

                        chats.map((chat, index) => {

                            if (chat.split("|||")[0] == "Admin") {
                                return <AdminChat key={index} msg={chat.split("|||")[1]} />
                            } else {
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
                <div className="p-2  bottom-0 w-full bg-blue-100 dark:bg-slate-700" >

                    {
                        (chatdata.widget_id != "" && chatdata.ip != "") ?
                            <div className="flex w-full " id="inputs">
                                <input type="text" value={message} onKeyDown={(e) => { SendMessageOnEnter(e) }} onChange={(e) => { setMessage(e.target.value) }} id="msginput" placeholder="Message" className="placeholder-slate-700 w-full text-blue-950 py-2 px-2 rounded-lg bg-white ring-1 ring-slate-100 outline-none" />
                                <button onClick={() => { handleSendMessageEvent() }} id="sendmsg" className="h-10 w-11  bg-blue-900 ml-1  hover:bg-blue-950 rounded-lg"><img className="p-2" src="https://img.icons8.com/ios-glyphs/100/FFFFFF/sent.png" alt="not" /></button>
                                <button className="my-auto" onClick={() => { setPopUpMenu(!popupmenu) }} ><img className="h-7 w-8 my-auto" src="https://img.icons8.com/material/100/1e3a8a/menu-2--v1.png" alt="menu-2--v1" /></button>

                            </div> : <p className="text-center font-medium dark:text-slate-300">Click on chat now to start chat</p>
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
