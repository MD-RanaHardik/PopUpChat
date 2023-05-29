/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";

export default function HomePage() {

  const state = useSelector(state => state.adminData);
  const dispach = useDispatch();
  console.log(state);

  return (
    <div className="col-span-5 h-screen p-10">
      <h2 className="text-2xl font-bold text-blue-950">Welcome to Chat.io</h2>
      <p className="text-blue-900 text-sm font-medium">grow your buisness with chat.io</p>

      <div className="grid grid-cols-3 gap-4 py-5"> 
    
        <div className="bg-white p-5 rounded-lg drop-shadow-lg">
          <p className="text-blue-900 text-sm ">Total Properties</p>
          <p className="text-5xl font-semibold text-blue-950">0</p>
        </div>

        <div className="bg-white p-5 rounded-lg drop-shadow-lg">
          <p className="text-blue-900 text-sm ">Total Visitors</p>
          <p className="text-5xl font-semibold text-blue-950">0</p>
        </div>

        <div className="bg-white p-5 rounded-lg drop-shadow-lg">
          <p className="text-blue-900 text-sm ">Live Visitors</p>
          <p className="text-5xl font-semibold text-blue-950">0</p>
        </div>

        

      </div>

      {/* <div className="h-full bg-white rounded-lg p-52 mb-10">

      </div> */}

    </div>
  )
}
