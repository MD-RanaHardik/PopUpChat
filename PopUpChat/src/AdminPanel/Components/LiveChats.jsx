
export default function LiveChats() {
  return (
    <>
    <h1 className="text-2xl font-semibold mb-2 text-slate-700">Chats</h1>
    <div className="shadow-lg h-2/5  p-2 overflow-y-scroll">
        <ChatWidget />
        <ChatWidget />
        <ChatWidget />
        <ChatWidget />
        <ChatWidget />
        <ChatWidget />
        <ChatWidget />
        <ChatWidget />
        <ChatWidget />
        <ChatWidget />
        <ChatWidget />
        <ChatWidget />
    </div>
    </>
    
  )
}

function ChatWidget(){
    return <div className="flex m-5 bg-blue-100 p-3 justify-between drop-shadow-md rounded-md">
    <div className="flex ">
        <img className="h-10 w-10"  src="https://img.icons8.com/3d-fluency/94/user-male-circle.png"  alt="person-male"/>
        <div className="ml-3">
            <p className="text-blue-950 font-semibold ">Visitor 1</p>
            <p className="text-blue-950 text-xs">127.0.0.1</p>
        </div>
       
    </div>
    <button className="bg-blue-900 text-white px-4 rounded-lg hover:bg-blue-950">Chat Now</button>
    
</div>
}
