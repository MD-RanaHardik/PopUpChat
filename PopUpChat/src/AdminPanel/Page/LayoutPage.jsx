/* eslint-disable no-unused-vars */
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import HeaderCom from "../Components/HeaderCom";
import SidebarCom from "../Components/SidebarCom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserData, getUserEmail } from "../../State/Actions/adminDataAction";
import { FaBeer } from 'react-icons/fa';


export default function LayoutPage() {

  const dispacher =useDispatch();
  const admindata = useSelector(state => state.adminData.data);
  const userdata = useSelector(state => state.adminData);
  const locl = useLocation();
  const navigate = useNavigate();


  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    console.log("theme mode run");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    console.log("sddsdsdsdsd")
    setTheme(theme === "dark" ? "light" : "dark");
  };






  useEffect(()=>{
    dispacher(getUserEmail());
    dispacher(getUserData(userdata.loggedin_user));
        
  },[dispacher,locl.search])

 
 

  return (
   
   <div className="bg-blue-50 dark:bg-slate-900 h-full">
    
    <HeaderCom theme={theme} setTheme={handleThemeSwitch} />
        <div className="grid grid-cols-6 h-full">
            <SidebarCom />
            <Outlet />
        </div>
   </div>
  )
}
