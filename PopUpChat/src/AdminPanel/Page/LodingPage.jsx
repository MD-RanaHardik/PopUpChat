/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getUserData, getUserEmail } from "../../State/Actions/adminDataAction";
import { useEffect } from "react";

export default function LodingPage() {

    const dispacher =useDispatch();
    const admindata = useSelector(state => state.adminData.data);
    const locl = useLocation();
    const navigate = useNavigate();
  
    useEffect(()=>{
      dispacher(getUserEmail());
      dispacher(getUserData());
  
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
    <div>LodingPage</div>
  )
}
