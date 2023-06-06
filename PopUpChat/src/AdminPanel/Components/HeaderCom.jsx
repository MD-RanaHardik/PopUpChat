/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { FaHome } from "react-icons/fa";
import {BsChatRightQuoteFill} from "react-icons/bs"
import {MdWidgets} from "react-icons/md"
import {RiFileSettingsFill, RiLogoutBoxRFill} from "react-icons/ri"
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import {HiSun} from "react-icons/hi"
import {FaMoon} from "react-icons/fa"



export default function HeaderCom({theme,setTheme}) {
    const loc = useLocation();
    const navigae = useNavigate();
    const admindata = useSelector(state =>state.adminData.data);
    const dispacher = useDispatch();

    const [property_id,setPropertyID] = useState("");
    const [selectedMenu,setSelectedMenu] = useState("Home");
    // const [themeChanger,setThemeChanger] =useState(theme);

    useEffect(()=>{
        
        const urldata = new URLSearchParams(window.location.search);

        // console.log("+++++++++",urldata.get("property_id"));
        

        if(urldata.get("property_id") != null){
            setPropertyID(urldata.get("property_id"));
        }else{
            setPropertyID(urldata.get(""));
        }
        console.log("first")
       
    },[dispacher,loc.search])

    useEffect(()=>{
        console.log(loc.pathname);
        setSelectedMenu(loc.pathname);
    },[loc.pathname])

    function Logout(){
        sessionStorage.removeItem("loginSession");
        setTimeout(() => {
            navigae("/login");
        }, 1000);
        
    }


  return (
    <>
        <div className="bg-white shadow-lg py-5 w-full grid grid-cols-6 dark:bg-slate-800">
            <h1 className="text-blue-950 font-bold text-2xl ml-4 font-serif col-span-1 flex dark:text-slate-300"><img src="logo.png" className="h-8 mr-2"></img> Chat.io</h1>
            <div className="col-span-5 flex px-2 justify-between">
                <div>
                    <p className="text-xs dark:text-slate-300">Widget Name</p>
                    <h2 className="font-semibold text-lg dark:text-slate-300">
                    {
                        (property_id != null )&& (admindata != undefined && admindata.property != undefined ) && (admindata.property[property_id]["Widget"] != undefined) && admindata.property[property_id]["Widget"]["Widget_name"]
                    }
                    </h2>
                </div>
                <div className="flex">          
                    {/* <NavLink to={"/?property_id=646e0c21eb04b792497da3f8"} style={isActive => ({border: isActive ? "1px solid black" : "0px"})} data-toggle="tooltip" data-placement="bottom" title="Home"  className=" h-8 w-8 mx-3 rounded-full hover:ring-1 hover:ring-blue-950 hover:rounded-sm "><img  src="https://img.icons8.com/sf-regular/110/172554/home.png" alt="home"/></NavLink> 
                    <NavLink to={"/chat?property_id=646e0c21eb04b792497da3f8"} style={isActive => ({border: isActive ? "1px solid black" : "0px"})}  data-toggle="tooltip" data-placement="bottom" title="Home"  className=" h-8 w-8 mx-3 rounded-full hover:ring-1 hover:ring-blue-950 hover:rounded-sm "><img  src="https://img.icons8.com/sf-regular/110/172554/home.png" alt="home"/></NavLink>  */}
                    
                    {
                        (property_id != null) && <div className="my-auto flex">
                            <NavLink to={`/?property_id=${property_id}`}><button data-toggle="tooltip" data-placement="bottom" title="Home" className={`mx-3 flex   px-4 py-1 rounded-full transition-all duration-500 ease-in-out  ${selectedMenu == "/" ? 'ring-1 ring-blue-900 dark:ring-slate-300' : ''}`} > <FaHome className="h-7 w-7 text-blue-900 hover:text-slate-700 dark:text-slate-300 dark:hover:text-slate-600" />{(selectedMenu == "/") && <span className="text-blue-900 dark:text-slate-300 my-auto ml-2 transition-all">Home</span>} </button></NavLink>
                            <NavLink to={`/chat?property_id=${property_id}`}><button  data-toggle="tooltip" data-placement="bottom" title="Chat" className={`mx-3 flex   px-4 py-1 rounded-full transition-all duration-500 ease-in-out  ${selectedMenu == "/chat" ? 'ring-1 ring-blue-900 dark:ring-slate-300' : ''}`}>  <BsChatRightQuoteFill className="h-7 w-7 text-blue-900 hover:text-slate-700 dark:text-slate-300 dark:hover:text-slate-600" />{(selectedMenu == "/chat") &&  <span className="text-blue-900 dark:text-slate-300 my-auto ml-2 transition-all">Chat</span>} </button></NavLink>
                            <NavLink to={`/widgetsetting?property_id=${property_id}`}><button  data-toggle="tooltip" data-placement="bottom" title="Widget setting" className={`mx-3 flex   px-4 py-1 rounded-full transition-all duration-500 ease-in-out  ${selectedMenu == "/widgetsetting" ? 'ring-1 ring-blue-900 dark:ring-slate-300' : ''}`}> <MdWidgets className="h-7 w-7 text-blue-900 hover:text-slate-700 dark:text-slate-300 dark:hover:text-slate-600" /> {(selectedMenu == "/widgetsetting") && <span className="text-blue-900 dark:text-slate-300 my-auto ml-2 transition-all">Widget Setting</span> } </button></NavLink>
                            <NavLink to={`/propertysetting?property_id=${property_id}`}><button  data-toggle="tooltip" data-placement="bottom" title="Property setting" className={`mx-3 flex   px-4 py-1 rounded-full transition-all duration-500 ease-in-out ${selectedMenu == "/propertysetting" ? 'ring-1 ring-blue-900 dark:ring-slate-300' : ''}`}> <RiFileSettingsFill className="h-7 w-7 text-blue-900 hover:text-slate-700 dark:text-slate-300 dark:hover:text-slate-600" />{(selectedMenu == "/propertysetting") &&  <span className="text-blue-900 dark:text-slate-300 my-auto ml-2 transition-all">Property Setting</span>} </button></NavLink>
                            <button onClick={()=>Logout()} data-toggle="tooltip" data-placement="bottom" title="Logout" className="mx-3 flex py-1" > <RiLogoutBoxRFill className="h-7 w-7 text-blue-900 hover:text-slate-700 dark:text-slate-300 dark:hover:text-slate-600 " /> </button>
                            <div className="ring-1 ring-slate-300 w-12 h-6  rounded-full my-auto relative transition-all duration-1000 ease-in-out">
                                <div className={`rounded-full bg-blue-900 h-6 w-6 ring-1  absolute transition-all duration-1000 ease-in-out  ${(theme == "light") ? "left-0" : "right-0"}`} onClick={()=>{setTheme()}}>{(theme == "light") ? <HiSun className="h-6 w-6 my-auto mx-auto dark:text-slate-300 text-white p-0.5" /> : <FaMoon className="h-5 w-5 my-auto mx-auto dark:text-slate-300 text-white p-0.5" />}</div>
                            </div>
                        </div>
                        
                        
                        
                    }

                   
                   
                    

                </div>
                
                
            </div>
        </div>
    </>
  )
}
