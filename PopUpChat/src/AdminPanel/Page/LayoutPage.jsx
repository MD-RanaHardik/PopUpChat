/* eslint-disable no-unused-vars */
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import HeaderCom from "../Components/HeaderCom";
import SidebarCom from "../Components/SidebarCom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserData, getUserEmail } from "../../State/Actions/adminDataAction";


export default function LayoutPage() {

  const dispacher =useDispatch();
  const admindata = useSelector(state => state.adminData.data);
  const userdata = useSelector(state => state.adminData);
  const locl = useLocation();
  const navigate = useNavigate();

  useEffect(()=>{
    dispacher(getUserEmail());
    // console.log("======",(userdata.loggedin_user == ""));
    dispacher(getUserData(userdata.loggedin_user));
    

  
    // navigate("/?pdfdfdf")
    console.log("url changes")
    
  },[dispacher,locl.search])

  // if(Object.keys(admindata).length != 0){
  //   // console.log(Object.keys(admindata.property)[0]);
  //   navigate(`/?property_id=${Object.keys(admindata.property)[0]}`)

  //   // console.log("sdsdsd",Object.keys(admindata.data.property));
  // }else{
  //   console.log("nulllllll")
  // }

 

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
