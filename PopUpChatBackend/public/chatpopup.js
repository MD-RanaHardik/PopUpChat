let body = document.body;
let head = document.head;

head.innerHTML += '<script src="https://cdn.tailwindcss.com"></script>'


var socket = io("http://127.0.0.1:4000",{ autoConnect: false});


// setTimeout(() => {
//     body.innerHTML += '<div class="h-14 w-14 bg-red-300 rounded-full fixed bottom-0 right-0 m-6"></div>'
// }, 2000);




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



sendmsg.addEventListener("click",()=>{
    
    if(msginput.value != ""){
        socket.emit("Test1",msginput.value);
        msginput.value = "";
        msg.scrollTo(0, msg.scrollHeight);
    }
})





// chatnowbtn.addEventListener("click",()=>{
//     msg.innerHTML += '<div class="w-auto bg-blue-700 text-white rounded-r-lg rounded-tl-lg p-2 float-left mr-20 my-3 ml-2">how are you</div>'
//     msg.scrollTo(0, msg.scrollHeight);
// })

function addRecivedMessage(msg1){
    msg.innerHTML += ` <div class="w-full flex justify-start"><span class="w-auto bg-blue-700 text-white rounded-r-lg rounded-tl-lg p-2 mr-20 my-3 ml-2">${msg1}</span></div>`
   
}

function addSendeMessage(msg1){
    msg.innerHTML += ` <div class="w-full  flex justify-end"><span class="w-auto bg-blue-700 text-white rounded-l-lg rounded-tr-lg p-2 ml-20 my-3 mr-2">${msg1}</span></div>`
}

socket.on("Test1",(msg1)=>{
    let data = msg1.split("|")
    if(data[0] == "bot"){
        addSendeMessage(data[1]);
    }else{
        addRecivedMessage(data[1]);
    }
    
})

socket.on("recivedNewChat",(msg)=>{
    console.log(msg);
})

chatio.addEventListener("click",()=>{
    
    chatimg.classList.add("hidden")
    chatio.style.borderRadius = "10px";
    chatio.style.height = "80%"
    chatio.style.width = "25%"
    chat.classList.remove("hidden");
    closebtn.classList.remove("hidden");

})


closebtn.addEventListener("click",()=>{
    closebtn.classList.add("hidden");
    chat.classList.add("hidden");
    chatio.style = "";
    chatimg.classList.remove("hidden")
    socket.disconnect();
})

chatnowbtn.addEventListener("click",()=>{
    socket.connect();

    chatnowbtn.classList.add("hidden");
    inputs.classList.remove("hidden");
    addRecivedMessage("Welcome to Chat.io 👋");
    addRecivedMessage("How can i help you")
    
})

