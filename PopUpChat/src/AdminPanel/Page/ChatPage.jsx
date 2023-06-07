/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import LiveChats from "../Components/LiveChats";
import MessageCom from "../Components/MessageCom";
import { setNewLoggedInUser } from "../../State/Reducers/adminDataReducer";
import { useState } from "react";

export default function ChatPage() {

    let [chatdata, setChatData] = useState({ ip: "", widget_id: "", is_chat_started: false, property_id: "", tempChat: [] })
    let [chatuserip,setChatUserIP] = useState("");

    return (
        <>

            <div className="grid grid-cols-3 gap-5 col-span-5 p-5 h-screen">
                <div className="col-span-1">
                    <MessageCom chatdata={chatdata} chatsetter={setChatData} chatuserip={chatuserip} setChatUserIP={setChatUserIP} />
                </div>
                <div className="col-span-2">
                    <LiveChats chatdata={chatdata} chatsetter={setChatData}  setChatUserIP={setChatUserIP}/>
                </div>
            </div>

        </>
    )
}
