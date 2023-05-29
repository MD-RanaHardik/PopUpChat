/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import LiveChats from "../Components/LiveChats";
import MessageCom from "../Components/MessageCom";
import { setNewLoggedInUser } from "../../State/Reducers/adminDataReducer";

export default function ChatPage() {

   

    return (
        <>
        
        <div className="grid grid-cols-3 gap-5 col-span-5 p-5 h-screen">
            <div className="col-span-1">
                <MessageCom />
            </div>
            <div className="col-span-2">
                <LiveChats />
            </div>
        </div>
        
        </>
    )
}
