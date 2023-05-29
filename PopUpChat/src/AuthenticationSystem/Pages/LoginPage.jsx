/* eslint-disable no-unused-vars */
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { GComtext } from "../../App";
import axios from "axios";
import { API_HOST } from "../../setting";
import { useDispatch, useSelector } from "react-redux";
import { setNewLoggedInUser } from "../../State/Reducers/adminDataReducer";
import { getUserData, getUserEmail } from "../../State/Actions/adminDataAction";



export default function LoginPage() {

  let [email,setEmail] = useState("");
  let [password,setPassword] = useState("");
  const admindata = useSelector(state => state.adminData);
  const dispacher= useDispatch();

  let navigate = useNavigate()
  const showMessage = useContext(GComtext);

  

  async function handleSubmitEvent(e){
    e.preventDefault();
    if(sessionStorage.getItem("loginSession") != null){
      navigate("/")
    }else{
       
         let response = await axios.post(`${API_HOST}/login`,{Email:email,Password:password})
        
         if(response.data.message == "Login successfull"){
            sessionStorage.setItem("loginSession",response.data.token);
           
            showMessage("Welcome to Chat.io!");
            navigate("/")
         }
         if(response.data.message == "Please verify your email"){
          showMessage(response.data.message);
         }
         if(response.data.message == "Please check username and password"){
          showMessage(response.data.message);
         }
      
    }
    
  }


  return (
    <>
      <div className="shadow w-2/5 p-10 rounded-2xl mx-auto mt-24 drop-shadow-2xl">
        <h1 className="text-slate-600 text-3xl font-bold">Login</h1>
        <form onSubmit={(e)=>handleSubmitEvent(e)}>
          <input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="w-full py-2 my-5 ring-1 ring-slate-300 outline-none px-3 shadow-md rounded-md" required/> 
          <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}  className="w-full py-2 ring-1 ring-slate-300 outline-none px-3 shadow-md rounded-md" required/>
          <Link to={"/forgotpassword"}><button className="text-slate-600 my-2 float-right">Forgot password ?</button></Link>
          <input type="submit" className="bg-blue-700 py-2 text-white w-full font-bold rounded-md shadow-lg mt-6 hover:bg-blue-800" value="Login" /> 
        </form>
        <p className="text-center mt-4">Don`&apos;`t have an account? <Link to={"/signup"}><button className="text-blue-500 font-semibold">Signup</button></Link></p>
      </div>
    </>
  )
}
