/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"


export default function HeaderCom() {
    const loc = useLocation();
    const navigae = useNavigate();
    const admindata = useSelector(state =>state.adminData.data);
    const [property_id,setPropertyID] = useState("");

    useEffect(()=>{
        const urldata = new URLSearchParams(window.location.search);

        // console.log("+++++++++",urldata.get("property_id"));

        if(urldata.get("property_id") != null){
            setPropertyID(urldata.get("property_id"));
        }else{
            setPropertyID(urldata.get(""));
        }
        console.log("first")
       
    },[loc.search])

    function Logout(){
        sessionStorage.removeItem("loginSession");
        setTimeout(() => {
            navigae("/login");
        }, 1000);
        
    }


  return (
    <>
        <div className="bg-white shadow-lg py-5 w-full grid grid-cols-6">
            <h1 className="text-blue-950 font-semibold text-2xl ml-4 font-serif col-span-1">Chat.io</h1>
            <div className="col-span-5 flex px-2 justify-between">
                <div>
                    <p className="text-xs">Widget Name</p>
                    <h2 className="font-semibold text-lg">
                    {
                        (property_id != null )&& (admindata != undefined && admindata.property != undefined) && admindata.property[property_id]["Widget"]["Widget_name"]
                    }
                    </h2>
                </div>
                <div className="flex">          
                    {/* <NavLink to={"/?property_id=646e0c21eb04b792497da3f8"} style={isActive => ({border: isActive ? "1px solid black" : "0px"})} data-toggle="tooltip" data-placement="bottom" title="Home"  className=" h-8 w-8 mx-3 rounded-full hover:ring-1 hover:ring-blue-950 hover:rounded-sm "><img  src="https://img.icons8.com/sf-regular/110/172554/home.png" alt="home"/></NavLink> 
                    <NavLink to={"/chat?property_id=646e0c21eb04b792497da3f8"} style={isActive => ({border: isActive ? "1px solid black" : "0px"})}  data-toggle="tooltip" data-placement="bottom" title="Home"  className=" h-8 w-8 mx-3 rounded-full hover:ring-1 hover:ring-blue-950 hover:rounded-sm "><img  src="https://img.icons8.com/sf-regular/110/172554/home.png" alt="home"/></NavLink>  */}
                    
                    {
                        (property_id != null) && <>
                            <NavLink to={`/?property_id=${property_id}`}><button data-toggle="tooltip" data-placement="bottom" title="Home"  className=" h-8 w-8 mx-3 rounded-full hover:ring-1 hover:ring-blue-950 hover:rounded-sm"> <img  src="https://img.icons8.com/sf-regular/110/172554/home.png" alt="home"/></button></NavLink>
                            <NavLink to={`/chat?property_id=${property_id}`}><button  data-toggle="tooltip" data-placement="bottom" title="Chat" className=" h-8 w-8 mx-3 rounded-full hover:ring-1 hover:ring-blue-950 hover:rounded-sm"> <img  src="https://img.icons8.com/windows/100/172554/chat-message.png" alt="chat-message" /></button></NavLink>
                            <NavLink to={`/widgetsetting?property_id=${property_id}`}><button  data-toggle="tooltip" data-placement="bottom" title="Widget setting" className=" h-8 w-8 mx-3 rounded-full hover:ring-1 hover:ring-blue-950 hover:rounded-sm"> <img  src="https://img.icons8.com/ios/50/delete-widget--v1.png" alt="home"/></button></NavLink>
                            <NavLink to={`/propertysetting?property_id=${property_id}`}><button  data-toggle="tooltip" data-placement="bottom" title="Property setting" className=" h-8 w-8 mx-3 rounded-full hover:ring-1 hover:ring-blue-950 hover:rounded-sm"> <img  src="https://img.icons8.com/ios-glyphs/30/edit-property.png" alt="home"/></button></NavLink>
                            <button onClick={()=>Logout()} data-toggle="tooltip" data-placement="bottom" title="Logout"  className=" h-8 w-8 mx-3 rounded-full hover:ring-1 hover:ring-blue-950 hover:rounded-sm"> <img  src="https://img.icons8.com/sf-regular/48/172554/exit.png" alt="home"/></button>
                        </>
                        
                        
                        
                    }

                   
                   
                    

                </div>
                
                
            </div>
        </div>
    </>
  )
}
