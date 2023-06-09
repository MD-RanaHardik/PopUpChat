/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useContext, useEffect, useState } from "react";
import { socket } from "../../socket";
import axios from "axios";
import { API_HOST } from "../../setting";
import { useDispatch, useSelector } from "react-redux";
import { GComtext } from "../../App";
import { getUserData } from "../../State/Actions/adminDataAction";
import { GrMoreVertical } from "react-icons/gr";
import { BsArrowDownCircleFill, BsFillEmojiSmileFill } from "react-icons/bs";
import {RxCross2} from "react-icons/rx"
import EmojiPicker from "emoji-picker-react";
import { MdReply } from "react-icons/md";

export default function MessageCom({
  chatdata,
  chatsetter,
  chatuserip,
  setChatUserIP,
}) {
  let [message, setMessage] = useState("");
  let [chats, setChats] = useState([]);

  let [popupmenu, setPopUpMenu] = useState(false);
  let [showemoji, setShowEmoji] = useState(false);

  let [replyToMsg,setReplyToMsg] = useState("");

  let messageContainer = document.getElementById("msg");

  const dispacher = useDispatch();
  const admindata = useSelector((state) => state.adminData);

  var audio = document.getElementById("audio");
  const showMessage = useContext(GComtext);

  useEffect(() => {
    if ((admindata.data.property != undefined) & (chatdata.property_id != "")) {
      setChats(
        admindata.data.property[chatdata.property_id]["Chat"][chatdata.ip][
          "ChatData"
        ]
      );
      setChats((chat) => [...chat, ...chatdata.tempChat]);
    }
  }, [chatdata]);

  socket.on(chatdata.ip != "" ? chatdata.ip : "notingtorecive", (msg) => {
    playPause();
    console.log(msg);

    // function urlify(text) {
    //     var urlRegex = /(https?:\/\/[^\s]+)/g;
    //     return text.replace(urlRegex, function(url) {
    //       return '<a href="' + url + '">' + url + '</a>';
    //     })
    //     // or alternatively
    //     // return text.replace(urlRegex, '<a href="$1">$1</a>')
    //   }

    // var newmsg = msg.split("|||")[0] +"|||"+urlify(msg.split("|||")[1])+"|||"+msg.split("|||")[2]

    // console.log("+++++++++++",msg.split("|||")[3]);

    // setChatUserIP(msg.split("|||")[3]);
    setChatUserIP(msg.split("|||")[3]);
    setChats([...chats, msg]);
    messageContainer.scrollTo(0, messageContainer.scrollHeight);
  });

  async function handleSendMessageEvent(msg = null) {
    if (message != "" || msg != null) {

      let modifiedmsg= "";

      if(replyToMsg != ""){
        modifiedmsg = `{"Rto":"${replyToMsg}","Msg":"${message}"}`;
      }else{
        modifiedmsg = message;
      }

      let response = await axios.get(
        `${API_HOST}/client/message/Admin/${chatdata.widget_id}/${
          chatdata.ip
        }/${msg == null ? encodeURIComponent(modifiedmsg) : msg}`
      );

      messageContainer.scrollTo(0, messageContainer.scrollHeight);
      setReplyToMsg("");
      setMessage("");
    }
  }

  function SendMessageOnEnter(ele) {
    if (ele.key === "Enter") {
      handleSendMessageEvent();
    }
  }

  function playPause() {
    audio.play();
  }

  async function EndChat() {
    let response = await axios.get(
      `${API_HOST}/client/endchat/${chatdata.property_id}/${chatdata.ip}`
    );

    if (response.data.message === "Chat deleted") {
      setPopUpMenu(false);
      chatsetter({ ...chatdata, widget_id: "", ip: "", property_id: "" });
      dispacher(getUserData(admindata.loggedin_user));
      showMessage("Chat ended");
    } else {
      showMessage("Failed to end chat");
    }
  }

  function sendGreetingMessage() {
    handleSendMessageEvent(
      `Welcome to our live chat service 👋 My name is ${admindata.data.Username}. How can I help you today?`
    );
    setPopUpMenu(!popupmenu);
  }

  return (
    <>
      <audio id="audio">
        <source src="button-124476.mp3" type="audio/mpeg" />
      </audio>

      <h1 className="text-2xl font-semibold mb-2 text-slate-700 dark:text-slate-300">
        Message{" "}
      </h1>
      <div className="shadow-lg relative" id="chat">
        {showemoji && <div className="absolute dark:bg-slate-800 w-full"><EmojiPicker  height={"370px"} width={"100%"}  theme="dark" emojiStyle="" onEmojiClick={(emoji)=>{setMessage(message += emoji.emoji)}} /> </div>}

        {chatdata.widget_id != "" && chatdata.ip != "" && (
          <BsArrowDownCircleFill
            onClick={() => {
              messageContainer.scrollTo(0, messageContainer.scrollHeight);
            }}
            className="absolute right-2 bottom-16 text-blue-900 dark:text-slate-600"
          />
        )}

        {/* <div className="transition-all    rounded-full bg-white drop-shadow-lg absolute right-2 bottom-16 dark:bg-slate-900 dark:ring-1 dark:ring-slate-600">bo</div> */}

        {popupmenu && (
          <div className="transition-all p-5   rounded-lg bg-white drop-shadow-lg absolute right-2 bottom-16 dark:bg-slate-900 dark:ring-1 dark:ring-slate-600">
            <button
              onClick={() => {
                EndChat();
              }}
              className="text-left px-1 my-2 text-red-900 font-semibold w-full py-1 text-sm transition-all rounded-sm  hover:bg-red-200 dark:text-slate-300 dark:hover:text-red-900"
            >
              End chat
            </button>

            <button
              onClick={() => {
                sendGreetingMessage();
              }}
              className="text-left px-1 my-2 text-blue-900 font-semibold w-full py-1 text-sm transition-all rounded-sm  hover:bg-blue-100 dark:text-slate-300 dark:hover:text-blue-900"
            >
              Send Greeting Message
            </button>
          </div>
        )}

        <div className=" bg-blue-900 flex pl-3 justify-between overflow-hidden">
          {chatdata.widget_id != "" && chatdata.ip != "" ? (
            <div className="flex">
              <img
                className="rounded-full h-14 w-14 my-auto"
                src="https://static.vecteezy.com/system/resources/previews/011/381/911/original/male-customer-service-3d-cartoon-avatar-portrait-png.png"
                alt="not found"
              />
              <div className="my-auto mr-2 w-full">
                <p className="font-semibold text-lg ml-2 text-white line-clamp-1 text-ellipsis dark:text-slate-300">
                  {chatdata.widget_id}
                </p>
                <div className="flex mt-1">
                  <span className="h-2 w-2 rounded-full bg-white animate-ping my-auto mr-2"></span>
                  <p className="text-xs text-white line-clamp-1 text-ellipsis dark:text-slate-300">
                    {chatdata.ip}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-white font-semibold py-4">Chat.io</p>
          )}
        </div>
        <div
          className="h-80 w-full overflow-y-scroll pb-20 flex flex-col dark:bg-slate-800"
          id="msg"
        >
          {chatdata.widget_id != "" &&
            chatdata.ip != "" &&
            chatuserip == "" &&
            chats.map((chat, index) => {
              if (chat.split("|||")[0] == "Admin") {
                return <AdminChat key={index}  setReplyToMsg={setReplyToMsg} msg={chat.split("|||")[1]} date={chat.split("|||")[2]} />;
              } else {
                return <UserChat key={index} setReplyToMsg={setReplyToMsg} msg={chat.split("|||")[1]}  date={chat.split("|||")[2]}/>;
              }
            })}

          {chatdata.widget_id != "" &&
            chatdata.ip != "" &&
            chatuserip != "" &&
            chatuserip == chatdata.ip &&
            chats.map((chat, index) => {
              if (chat.split("|||")[0] == "Admin") {
               
                return <AdminChat key={index} setReplyToMsg={setReplyToMsg} msg={chat.split("|||")[1]} date={chat.split("|||")[2]} />;
              } else {
                return <UserChat key={index} setReplyToMsg={setReplyToMsg} msg={chat.split("|||")[1]} date={chat.split("|||")[2]} />;
              }
            })}

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
        <div className="p-2  bottom-0 w-full bg-blue-100 dark:bg-slate-700">
          {
            (replyToMsg != "") && <div className="break-all transition-all duration-500 ease-in-out bg-slate-800 rounded-lg p-3 mb-3 border-l-2 border-slate-300 dark:text-slate-300">
            <RxCross2 onClick={()=>{setReplyToMsg("")}} className="h-6 w-6 cursor-pointer text-blue-900 dark:text-slate-300 float-right" />
            {replyToMsg}
          </div>
          }
          
          {chatdata.widget_id != "" && chatdata.ip != "" ? (
            <div className="flex w-full " id="inputs">
              <div className="flex bg-white rounded-lg overflow-hidden ring-1 ring-slate-100 outline-none dark:ring-slate-600 dark:text-slate-300 dark:bg-slate-800">
                <BsFillEmojiSmileFill onClick={()=>{setShowEmoji(!showemoji)}}  className="h-6 w-6 cursor-pointer text-blue-900 dark:text-slate-300 my-auto mx-1.5" />
                <input
                  type="text"
                  value={message}
                  onFocus={()=>{(showemoji) && setShowEmoji(false)}}
                  onKeyDown={(e) => {
                    SendMessageOnEnter(e);
                  }}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  id="msginput"
                  placeholder="Message"
                  className="placeholder-slate-700 w-full text-blue-950 py-2 px-2  bg-white  outline-none dark:ring-slate-600 dark:text-slate-300 dark:bg-slate-800 dark:placeholder:text-slate-300"
                />
              </div>

              <button
                onClick={() => {
                  handleSendMessageEvent();
                }}
                id="sendmsg"
                className="h-10 w-11  bg-blue-900 ml-1.5  hover:bg-blue-950 rounded-lg"
              >
                <img
                  className="p-2"
                  src="https://img.icons8.com/ios-glyphs/100/FFFFFF/sent.png"
                  alt="not"
                />
              </button>
              <button
                className="my-auto"
                onClick={() => {
                  setPopUpMenu(!popupmenu);
                }}
              >
                <GrMoreVertical className="h-7 w-7 text-blue-900 hover:text-slate-700 dark:text-slate-300 dark:hover:text-slate-600" />
              </button>
            </div>
          ) : (
            <p className="text-center font-medium dark:text-slate-300">
              Click on chat now to start chat
            </p>
          )}

          {/* <button id="chatnowbtn" className="bg-blue-900 text-white font-semibold w-full py-2 rounded-xl hover:bg-blue-800">Chat Now</button> */}
        </div>
      </div>
    </>
  );
}

function UserChat({ msg,date,setReplyToMsg }) {
  let D = new Date(date);
  let [replyed,setReplayed] = useState(false);
  let [newmessge,setNewMessage] = useState("");
  let [replymsssage,setReplyMessage] = useState("");

  useEffect(()=>{
    try {
      let data = JSON.parse(msg);
      setReplyMessage(data["Rto"]); 
      setNewMessage(data["Msg"]);
      
      setReplayed(true);
    } catch (error) {
      setNewMessage(msg);
    }
  },[])

  return (
    <div className="flex justify-start  ">
      <div className=" bg-blue-900  break-all text-white rounded-r-lg rounded-tl-lg p-2   my-3 ml-2">
        {replyed && <div className=" bg-blue-800 opacity-50 mb-1 border-l-2 border-blue-300 p-2 rounded-lg">{replymsssage}</div>}
        {newmessge}
        <span className="float-right text-[9px] w-full break-keep ml-3 text-slate-300">{`${D.getHours()}:${D.getMinutes()} ${D.getHours()>= 12 ? "PM" : "AM"}`}</span>

      </div>
      <MdReply onClick={()=>{setReplyToMsg(newmessge)}} className="ml-3 h-4 w-4 shrink-0 cursor-pointer text-blue-900 dark:text-slate-300 my-auto mr-20" />
    </div>
  );
}

function AdminChat({ msg ,date,setReplyToMsg}) {
  let D = new Date(date);
  let [replyed,setReplayed] = useState(false);
  let [newmessge,setNewMessage] = useState("");
  let [replymsssage,setReplyMessage] = useState("");

  useEffect(()=>{
    try {
      let data = JSON.parse(msg);
      setReplyMessage(data["Rto"]); 
      setNewMessage(data["Msg"]);
      
      setReplayed(true);
    } catch (error) {
      setNewMessage(msg);
    }
  },[])

  return (
    <div className="flex justify-end  ">
      <MdReply onClick={()=>{setReplyToMsg(newmessge)}} className="mr-3 h-4 w-4 shrink-0 cursor-pointer text-blue-900 dark:text-slate-300 my-auto ml-20 " />
      
      <div className="w-auto break-all bg-blue-900 text-white rounded-l-lg rounded-tr-lg p-2  my-3 mr-2">
        {replyed && <div className="bg-blue-800 border-l-2 opacity-50  border-blue-300 mb-1  p-2 rounded-lg">{replymsssage}</div>}
        {newmessge}
        <span className="float-right w-full text-[9px] ml-3 break-keep  text-slate-300">{`${D.getHours()}:${D.getMinutes()}  ${D.getHours()>= 12 ? "PM" : "AM"}`}</span>
      </div>
    </div>
  );
}
