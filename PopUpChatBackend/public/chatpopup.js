let API_HOST="https://popupchat.onrender.com";

// let API_HOST="http://127.0.0.1:4000";



let body = document.body;
let head = document.head;
let widgetColor;
let propertyID;
let widget_ID;
let ipaddres;




function getCookie(name) {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
      let [k,v] = el.split('=');
      cookie[k.trim()] = v;
    })
    return cookie[name];
  }
// console.log(getCookie("idfg"));




// head.innerHTML += '<script src="https://cdn.tailwindcss.com"></script>'
// head.innerHTML += '<style>#msg::-webkit-scrollbar { width: 0;background: transparent;}</style>'


var socket = io(API_HOST,{ autoConnect: false });

// https://www.trackip.net/ip?json

async function GetCurruntUserIp(){
        
    await fetch("https://jsonip.com/", {
        mode: 'cors',
        method: 'GET',
    }).then((res)=>res.json()).then((data)=>{
        if(getCookie("id") == undefined){  
            document.cookie = `id=${crypto.randomUUID()}`;
            ipaddres = data.ip+`=${getCookie("id")}`;
        }else{
            ipaddres = data.ip+`=${getCookie("id")}`;
        }
        console.log(ipaddres);
        console.log(data.ip);


        socket.on(ipaddres.replaceAll(".",":"), (msg1) => {
            
            let msg = document.getElementById("msg");
        
            let data = msg1.split("|||")
            if(data[0]=="Admin"){
                addRecivedMessage(data[1]);
            }else{
                addSendeMessage(data[1]);
            }
            playPause();
            msg.scrollTo(0, msg.scrollHeight);
        })
    }).catch((e)=>{
        console.log(e);
    })

}



async function StartChatIo(property_ID) {
    console.log("called function");
    await GetCurruntUserIp();

    await fetch(`${API_HOST}/client/getwidget/${property_ID}`).then((res) => res.json()).then((data) => {
        // console.log(data);
        if (data[0]["Property_status"]) {
            console.log(data[0]["Property_status"]);
            propertyID = property_ID;
            widgetColor = data[0]["Widget"]["Widget_color"];
            RenderChatPopUp(data[0]["Widget"]["Widget_color"]);
            
        }
    }).catch((e)=>{
        console.log(e);
    })

}





// setTimeout(() => {
//     body.innerHTML += `
//     <div>
//     <button id="close"
//         class="hidden float-right text-white h-8 w-8 bg-blue-700 rounded-full p-2 my-auto mr-5 hover:bg-blue-800"><img
//             src="https://img.icons8.com/ios-filled/50/FFFFFF/delete-sign--v1.png" alt="delete-sign--v1"></button>

//     <div class="h-14 w-14 shadow-xl rounded-full fixed bottom-0 right-0 m-6 drop-shadow-lg hover:shadow-xl overflow-hidden"
//         id="chatio">
//         <img src="https://cryptologos.cc/logos/chatcoin-chat-logo.png" class="" alt="not" id="chatimg">
//         <div class="hidden" id="chat">
//             <div class="h-20 bg-blue-700 flex pl-3 justify-between">
//                 <div class="flex">
//                     <img class="rounded-full h-14 w-14 my-auto"
//                         src="https://static.vecteezy.com/system/resources/previews/011/381/911/original/male-customer-service-3d-cartoon-avatar-portrait-png.png"
//                         alt="not found">
//                     <div class="my-auto">
//                         <p class="font-semibold text-lg text-center text-white">Rana Hardik</p>
//                         <div class="flex mt-1">
//                             <span class="h-2 w-2 rounded-full bg-white animate-ping my-auto mr-2"></span>
//                             <p class="text-xs text-white">Online</p>
//                         </div>
//                     </div>
//                 </div>



//             </div>
//             <div class="h-96 w-full overflow-y-scroll pb-20 " id="msg">

//             </div>
//             <div class="p-4 fixed bottom-0 w-full bg-blue-100">
//                 <div class="flex w-full hidden" id="inputs">
//                     <input type="text" id="msginput" placeholder="Message"
//                         class="placeholder-white w-full text-white py-2 px-2 rounded-lg bg-blue-700 ring-1 ring-slate-100 outline-none">
//                     <button id="sendmsg" class="h-10 w-11 ml-1 bg-blue-700 rounded-full hover:bg-blue-800"><img
//                             class="p-2" src="https://img.icons8.com/ios-glyphs/100/FFFFFF/sent.png"
//                             alt="not"></button>
//                 </div>
//                 <button id="chatnowbtn"
//                     class="bg-blue-700 text-white font-semibold w-full py-2 rounded-xl hover:bg-blue-800">Chat
//                     Now</button>
//             </div>
//         </div>

//     </div>
// </div>

// `

// }, 2000);

function RenderChatPopUp(color) {
    body.innerHTML += `
    <audio id="audio">
        <source src="https://cdn.pixabay.com/audio/2022/10/30/audio_f5dbe8213e.mp3" type="audio/mpeg" />
        </audio>
    <div>
    <button id="close" onclick="CloseBtn()"
        class="hidden float-right text-white h-8 w-8 bg-[${color}] rounded-full p-2 my-auto mr-5 "><img
            src="https://img.icons8.com/ios-filled/50/FFFFFF/delete-sign--v1.png" alt="delete-sign--v1"></button>

    <div class="h-14 w-14 shadow-xl rounded-full fixed bottom-0 right-0 m-6 drop-shadow-lg hover:shadow-xl overflow-hidden"
        id="chatio" onclick="ChatIo()">
        <img src="https://cryptologos.cc/logos/chatcoin-chat-logo.png" class="" alt="not" id="chatimg">
        <div class="hidden" id="chat">
            <div class="h-20 bg-[${color}] flex pl-3 justify-between">
                <div class="flex">
                    <img class="rounded-full h-14 w-14 my-auto"
                        src="https://static.vecteezy.com/system/resources/previews/011/381/911/original/male-customer-service-3d-cartoon-avatar-portrait-png.png"
                        alt="not found">
                    <div class="my-auto">
                        <p class="font-semibold text-lg text-center text-white">Rana Hardik</p>
                        <div class="flex mt-1">
                            <span class="h-2 w-2 rounded-full bg-white animate-ping my-auto mr-2"></span>
                            <p class="text-xs text-white">Online</p>
                        </div>
                    </div>
                </div>



            </div>
            <div class="h-96 w-full overflow-y-scroll pb-20 bg-white" id="msg" >

            </div>
            <div class="p-4 fixed bottom-0 w-full bg-blue-100">
                <div class="flex w-full hidden" id="inputs">
                    <input type="text" id="msginput" placeholder="Message"
                        class="placeholder-slate-700 w-full text-blue-950 py-2 px-2 rounded-lg bg-white ring-1 ring-slate-100 outline-none">
                    <button id="sendmsg" onclick="SendMessage()" class="h-10 w-11 ml-1 bg-[${color}] rounded-full"><img
                            class="p-2" src="https://img.icons8.com/ios-glyphs/100/FFFFFF/sent.png"
                            alt="not"></button>
                </div>
                <button id="chatnowbtn" onclick="ChatNowBtn()"
                    class="bg-[${color}] text-white font-semibold w-full py-2 rounded-xl ">Chat
                    Now</button>
            </div>
        </div>

    </div>
</div>
`
}






let chatio = document.getElementById("chatio")
let msg = document.getElementById("msg");
// let chatnowbtn  = document.getElementById("chatnowbtn")
let chat = document.getElementById("chat");
let closebtn = document.getElementById("close");
let chatimg = document.getElementById("chatimg");
let chatnowbtn = document.getElementById("chatnowbtn");
let inputs = document.getElementById("inputs");

let sendmsg = document.getElementById("sendmsg");

let msginput = document.getElementById("msginput");



// chatnowbtn.addEventListener("click",()=>{
//     msg.innerHTML += '<div class="w-auto bg-blue-700 text-white rounded-r-lg rounded-tl-lg p-2 float-left mr-20 my-3 ml-2">how are you</div>'
//     msg.scrollTo(0, msg.scrollHeight);
// })

function addRecivedMessage(msg1) {
    let msg = document.getElementById("msg");
    msg.innerHTML += ` <div class="w-full flex justify-start"><span class="w-auto bg-[${widgetColor}] text-white rounded-r-lg rounded-tl-lg p-2 mr-20 my-3 ml-2">${msg1}</span></div>`

}

function addSendeMessage(msg1) {
    let msg = document.getElementById("msg");
    msg.innerHTML += ` <div class="w-full  flex justify-end"><span class="w-auto bg-[${widgetColor}] text-white rounded-l-lg rounded-tr-lg p-2 ml-20 my-3 mr-2">${msg1}</span></div>`
}





function ChatIo() {
    let chatio = document.getElementById("chatio")
    let chatimg = document.getElementById("chatimg");
    let chat = document.getElementById("chat");
    let closebtn = document.getElementById("close");
   

    console.log("click chat io")
    chatimg.classList.add("hidden")
    chatio.style.borderRadius = "10px";
    chatio.style.height = "80%"
    chatio.style.width = "25%"
    chat.classList.remove("hidden");
    closebtn.classList.remove("hidden");
   
    
}

function CloseBtn() {
    let chatio = document.getElementById("chatio")
    let chatimg = document.getElementById("chatimg");
    let chat = document.getElementById("chat");
    let closebtn = document.getElementById("close");

    closebtn.classList.add("hidden");
    chat.classList.add("hidden");
    chatio.style = "";
    chatimg.classList.remove("hidden")
    socket.disconnect();
}

async function ChatNowBtn() {
    let inputs = document.getElementById("inputs");
    let chatnowbtn = document.getElementById("chatnowbtn");

    socket.connect();
    await StartNewChat();
    chatnowbtn.classList.add("hidden");
    inputs.classList.remove("hidden");
    // addRecivedMessage("Welcome to Chat.io 👋");
    // addRecivedMessage("How can i help you")

}



function playPause() {
    var audio = document.getElementById('audio');
    audio.play();
}


function SendMessage() {
    let msg = document.getElementById("msg");
    let msginput = document.getElementById("msginput");
    console.log(msginput.value);
    if (msginput.value != "") {
        SendMessageToApi(msginput.value);
        
        msginput.value = "";
        msg.scrollTo(0, msg.scrollHeight);
    }
}


async function StartNewChat(){

    // let headers = new Headers();

    // headers.append('Content-Type', 'application/json');
    // headers.append('Accept', 'application/json');
    // // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
    // headers.append('Origin','http://localhost:4000');



    
    
    let msg = document.getElementById("msg");

    await fetch(`${API_HOST}/client/chat/${propertyID}/${ipaddres.replaceAll(".",":")}`).then((res)=>res.json()).then((data)=>{
        
        if("ChatData" in data){
            widget_ID = data["_id"];
            data["ChatData"].map((msg)=>{
                if(msg.split("|||")[0]== "User"){
                    addSendeMessage(msg.split("|||")[1]);
                }else{
                    addRecivedMessage(msg.split("|||")[1])
                }
                // console.log(msg);
            });

            msg.scrollTo(0, msg.scrollHeight);
           
        }else{
            console.log("first");
            console.log(data);
            //  addRecivedMessage("Welcome to Chat.io 👋");
            //  addRecivedMessage("How can i help you")
        }
    });


}

async function SendMessageToApi(message){
    await fetch(`${API_HOST}/client//message/User/${widget_ID}/${ipaddres.replaceAll(".",":")}/${message}`).then((res)=>res.json()).then((data)=>{
        // playPause();
    })
}




















// chatio.addEventListener("click", () => {
//     console.log("click chat io")
//     chatimg.classList.add("hidden")
//     chatio.style.borderRadius = "10px";
//     chatio.style.height = "80%"
//     chatio.style.width = "25%"
//     chat.classList.remove("hidden");
//     closebtn.classList.remove("hidden");

// })


// closebtn.addEventListener("click", () => {
//     closebtn.classList.add("hidden");
//     chat.classList.add("hidden");
//     chatio.style = "";
//     chatimg.classList.remove("hidden")
//     socket.disconnect();
// })

// chatnowbtn.addEventListener("click", () => {
//     socket.connect();
//     chatnowbtn.classList.add("hidden");
//     inputs.classList.remove("hidden");
//     addRecivedMessage("Welcome to Chat.io 👋");
//     addRecivedMessage("How can i help you")

// })

// sendmsg.addEventListener("click", () => {

//     if (msginput.value != "") {
//         socket.emit("Test1", msginput.value);
//         msginput.value = "";
//         msg.scrollTo(0, msg.scrollHeight);
//     }
// })

