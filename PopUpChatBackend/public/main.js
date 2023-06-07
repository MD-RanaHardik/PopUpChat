if (document.currentScript.getAttribute('id') != null) {
    console.log(document.currentScript.getAttribute('id'));
    
    StartChatIo(document.currentScript.getAttribute('id'));

} else {
    alert("ID required to start chat");
}



function StartChatIo(id){

    document.body.innerHTML +=`
    <iframe src="https://popupchat.onrender.com/chat.html?id=${id}" id="chat" frameborder="0" style="visibility: hidden !important; background: transparent !important; height: 480px !important; width: 310px !important;  z-index:2147483647 !important; position: fixed !important;bottom: 15% !important;right: 2% !important;"></iframe>
    
    <div class="" style="z-index:2147483647 !important; position: fixed !important;bottom: 4% !important;right: 2% !important;">
        <button style="z-index:2147483647 !important;padding:0% !important;
          background-color: blue !important;
          border: 0 !important;
          border-radius: 100% !important;
          height: 50px !important;
          width: 50px !important;
          float: right !important;
          margin-top: 5% !important; 
          box-shadow: 0 3px 10px rgb(0 0 0 / 0.2) !important;
          background-position: center !important;
          background-size: 30px !important;
          background-repeat: no-repeat !important;
          background-image: url('https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/512/FFFFFF/external-chat-social-media-ui-tanah-basah-glyph-tanah-basah.png') !important;
        animation: bounce 1s infinite !important;
        "
        id="chatio" onclick="ChatIo()"
        >
            
        </button>


        <button style="
          z-index:2147483647 !important;
          padding:0% !important;
          background-color: blue !important;
          border: 0 !important;
          border-radius: 100% !important;
          height: 50px !important;
          width: 50px !important;
          float: right !important;
          margin-top: 5% !important;
          box-shadow: 0 3px 10px rgb(0 0 0 / 0.2) !important;
          display: none !important;
          background-position: center !important;
          background-size: 30px !important;
          background-repeat: no-repeat !important;
          background-image: url('https://img.icons8.com/ios-glyphs/512/FFFFFF/delete-sign.png') !important;
          
        "
        id="close" onclick="CloseBtn()"
        >
            
        </button>
    </div>
    
    `

}


function ChatIo() {
    let chatio = document.getElementById("chatio")
    let chatimg = document.getElementById("chatimg");
    let chat = document.getElementById("chat");
    let closebtn = document.getElementById("close");

    chat.style.visibility = "visible";
    chatio.style.display = "none";
    closebtn.style.display = "block";


}

function CloseBtn() {
    let chatio = document.getElementById("chatio")
    let chatimg = document.getElementById("chatimg");
    let chat = document.getElementById("chat");
    let closebtn = document.getElementById("close");
    chat.style.visibility = "hidden";

    chatio.style.display = "block";
    closebtn.style.display = "none";

    // localStorage.removeItem("isKnownUser");
    // socket.emit("liveuseremit",`${visitor_country}::${ipaddres}::${propertyID}::offlineuser`);
    // socket.disconnect();
}