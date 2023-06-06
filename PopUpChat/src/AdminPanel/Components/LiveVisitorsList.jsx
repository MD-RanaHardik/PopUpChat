/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useSelector } from "react-redux"

export default function LiveVisitorsList() {

    let liver_visitors = useSelector(state => state.adminData.live_visitor_data);


  return (
    <div>
        <h1 className="text-2xl  font-semibold mb-2 text-slate-700 dark:text-slate-300">Liver Visitors</h1>
        <div className="shadow-lg h-96   p-2 overflow-y-scroll bg-white rounded-lg dark:bg-slate-800 ">

            {
                (liver_visitors.length > 0) && liver_visitors.map((user,index) =><LiveChatWidget key={index} index={index+1} ip={user.split("::")[1]} country={user.split("::")[0]} /> )
            }

            
        </div>
        
    </div>
  )
}

function LiveChatWidget({index,ip,country}){

    return <div className="flex m-5 bg-blue-100 p-3  drop-shadow-md rounded-md dark:bg-slate-900">
      <img className="h-10 w-10" src="https://img.icons8.com/3d-fluency/94/user-male-circle.png" alt="person-male" />
      <div className="ml-3">
        <p className="text-blue-950 font-semibold dark:text-slate-300">Visitor {index}</p>
        <p className="text-blue-950 text-xs break-words dark:text-slate-300">IP Address : {ip}</p>
        <p className="text-blue-950 text-xs break-words dark:text-slate-300">Country : {country}</p>
      </div>

    </div>

}
