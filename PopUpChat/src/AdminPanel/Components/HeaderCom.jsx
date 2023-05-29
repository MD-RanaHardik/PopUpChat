

export default function HeaderCom() {
  return (
    <>
        <div className="bg-white shadow-lg py-5 w-full grid grid-cols-6">
            <h1 className="text-blue-950 font-semibold text-2xl ml-4 font-serif col-span-1">Chat.io</h1>
            <div className="col-span-5 flex px-2 justify-between">
                <div>
                    <p className="text-xs">Widget Name</p>
                    <h2 className="font-semibold text-lg">Minddeft</h2>
                </div>
                <div>

                    
                           
                    <button  className=" h-8 w-8 mx-3 rounded-full hover:ring-1 hover:ring-blue-950 hover:rounded-sm"> <img  src="https://img.icons8.com/sf-regular/110/172554/home.png" alt="home"/></button>
                    <button  className=" h-8 w-8 mx-3 rounded-full hover:ring-1 hover:ring-blue-950 hover:rounded-sm"> <img  src="https://img.icons8.com/windows/100/172554/chat-message.png" alt="chat-message" /></button>
                    <button  className=" h-8 w-8 mx-3 rounded-full hover:ring-1 hover:ring-blue-950 hover:rounded-sm"> <img  src="https://img.icons8.com/fluency-systems-filled/48/172554/gear.png" alt="home"/></button>
                    <button  className=" h-8 w-8 mx-3 rounded-full hover:ring-1 hover:ring-blue-950 hover:rounded-sm"> <img  src="https://img.icons8.com/sf-regular/48/172554/exit.png" alt="home"/></button>
                    
                    

                </div>
                
                
            </div>
        </div>
    </>
  )
}
