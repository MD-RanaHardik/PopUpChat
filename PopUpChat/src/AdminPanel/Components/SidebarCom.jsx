/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom";

export default function SidebarCom() {

  const admindata = useSelector(state =>state.adminData.data);
  // if(admindata.property !=undefined){
  //   console.log("+++++++++++++",admindata.property);
  // }
  
  return (
    <>
        <div className=" bg-white h-full  col-span-1 px-3 py-3 ">
            <h2 className="font-bold text-blue-950">Properties</h2>
            <hr  className="text-blue-900 my-3"/>

            {

              (admindata != undefined) && (admindata.property !=undefined ) &&
              Object.keys(admindata.property).map(data=>{
                if(admindata.property[data]["Property_status"]){
                  return <PropertyWidget key={admindata.property[data]["_id"]} property_id={admindata.property[data]["_id"]} title={admindata.property[data]["Property_name"]} />
                }
                
              })
            }
            

            {/* <PropertyWidget title={"test"} /> */}

        </div>
    </>
  )
}

function PropertyWidget({property_id,title}){
  return <NavLink to={`?property_id=${property_id}`}  className="block text-white py-3 bg-blue-900 rounded-lg font-semibold my-3 mx-2 pl-2 hover:bg-blue-950 hover:cursor-pointer "  >{title}</NavLink>
}
