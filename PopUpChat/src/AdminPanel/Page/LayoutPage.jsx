/* eslint-disable no-unused-vars */
import { Outlet, useLocation } from "react-router-dom";
import HeaderCom from "../Components/HeaderCom";
import SidebarCom from "../Components/SidebarCom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserData, getUserEmail } from "../../State/Actions/adminDataAction";


export default function LayoutPage() {

  const dispacher =useDispatch();
  const admindata  = useSelector(state=>state.adminData);
  const locl = useLocation();

  useEffect(()=>{
    dispacher(getUserEmail());
    dispacher(getUserData());
    
  },[dispacher,locl.search])

  return (
   
   <div className="bg-blue-50">  
    <HeaderCom />
        <div className="grid grid-cols-6 h-screen">
            <SidebarCom />
            <Outlet />
        </div>
   </div>
  )
}
