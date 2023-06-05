/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { NavLink, useLocation } from "react-router-dom";

export default function SidebarCom() {

  const admindata = useSelector(state =>state.adminData.data);
  const [selectedproperty_id, setSelectedPropertyID] = useState("");
  const loc = useLocation();
  // if(admindata.property !=undefined){
  //   console.log("+++++++++++++",admindata.property);
  // }

  useEffect(() => {
    const urldata = new URLSearchParams(window.location.search);
    if(urldata.get("property_id") != null){
      setSelectedPropertyID(urldata.get("property_id"));
    }else{
      setSelectedPropertyID(urldata.get(""));
    }
    
  }, [loc.search])
  
  return (
    <>
        <div className=" bg-white h-full  col-span-1 px-3 py-3 dark:bg-slate-800">
            <h2 className="font-bold text-blue-950 dark:text-slate-300">Properties</h2>
            <hr  className="text-blue-900 my-3"/>

            {

              (admindata != undefined) && (admindata.property !=undefined ) &&
              Object.keys(admindata.property).map(data=>{
                if(admindata.property[data]["Property_status"]){
                  return <PropertyWidget key={admindata.property[data]["_id"]} selectedproperty_id={selectedproperty_id} property_id={admindata.property[data]["_id"]} title={admindata.property[data]["Property_name"]} />
                }
                
              })
            }
            

            {/* <PropertyWidget title={"test"} /> */}

        </div>
    </>
  )
}

function PropertyWidget({property_id,title,selectedproperty_id}){
  console.log(selectedproperty_id);
  return <NavLink to={`?property_id=${property_id}`}  className="block text-white py-3 bg-blue-900 rounded-lg font-semibold my-3 mx-2 pl-2 hover:bg-blue-950 hover:cursor-pointer flex py-auto"  >{title} {(selectedproperty_id != null && selectedproperty_id == property_id)&& <img className="h-5 w-5 ml-3" src="https://img.icons8.com/ios-filled/100/FFFFFF/ok--v1.png" alt="ok--v1"/>} </NavLink>
}
