/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import HeaderCom from "../Components/HeaderCom";
import SidebarCom from "../Components/SidebarCom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserData, getUserEmail } from "../../State/Actions/adminDataAction";


export default function LayoutPage() {

  const dispacher =useDispatch();

  useEffect(()=>{
    dispacher(getUserEmail());
    dispacher(getUserData())
  },[dispacher])

  return (
   
   <div className="bg-blue-50">  
    <HeaderCom />
        <div className="grid grid-cols-6 h-full">
            <SidebarCom />
            <Outlet />
        </div>
   </div>
  )
}
