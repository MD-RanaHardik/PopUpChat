
export default function MessageCom() {
    return (
        <>
        <h1 className="text-2xl font-semibold mb-2 text-slate-700">Message </h1>
        <div className="shadow-lg" id="chat">
            
            <div className=" bg-blue-900 flex pl-3 justify-between">
                <div className="flex">
                    <img className="rounded-full h-14 w-14 my-auto" src="https://static.vecteezy.com/system/resources/previews/011/381/911/original/male-customer-service-3d-cartoon-avatar-portrait-png.png" alt="not found" />
                    <div className="my-auto">
                        <p className="font-semibold text-lg text-center text-white">Rana Hardik</p>
                        <div className="flex mt-1">
                            <span className="h-2 w-2 rounded-full bg-white animate-ping my-auto mr-2"></span>
                            <p className="text-xs text-white">Online</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-80 w-full overflow-y-scroll pb-20 flex flex-col" id="msg">

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
                </div>

                <div className="flex justify-start">
                    <div className=" bg-blue-900 text-white rounded-r-lg rounded-tl-lg p-2 mr-20 my-3 ml-2">Hello</div>
                </div>
                
                <div className="flex justify-end">
                    <div className="w-auto bg-blue-900 text-white rounded-l-lg rounded-tr-lg p-2  ml-20 my-3 mr-2">Hello</div>
                </div>

            </div>
            <div className="p-4  bottom-0 w-full bg-blue-100">
                <div className="flex w-full hidden" id="inputs">
                    <input type="text" id="msginput" placeholder="Message" className="placeholder-white w-full text-white py-2 px-2 rounded-lg bg-blue-700 ring-1 ring-slate-100 outline-none" />
                    <button id="sendmsg" className="h-10 w-11 ml-1 bg-blue-700 rounded-full hover:bg-blue-800"><img className="p-2" src="https://img.icons8.com/ios-glyphs/100/FFFFFF/sent.png" alt="not" /></button>
                </div>
                <button id="chatnowbtn" className="bg-blue-900 text-white font-semibold w-full py-2 rounded-xl hover:bg-blue-800">Chat Now</button>
            </div>
        </div></>
        
    )
}
