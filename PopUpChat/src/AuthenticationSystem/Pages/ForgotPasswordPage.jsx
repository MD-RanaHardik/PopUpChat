/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GComtext } from "../../App";
import { API_HOST } from "../../setting";
import axios from "axios";

export default function ForgotPasswordPage() {
  let [email,setEmail] = useState("");
  let navigate = useNavigate();
  const showMessage = useContext(GComtext)
 
  async function handleSubmitEvent(e){
    e.preventDefault();

    let response = await axios.post(`${API_HOST}/forgot`,{Email:email})
        
         if(response.data.message == "Check forgot password email"){
            showMessage("Please check your inbox");
         }
        
    
  }


  return (
    <>
      <div className="shadow w-2/5 p-10 rounded-2xl mx-auto mt-24 drop-shadow-2xl">
        <h1 className="text-slate-600 text-3xl font-bold">Forgot password</h1>
        <form onSubmit={(e)=>handleSubmitEvent(e)}>
          <input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="w-full py-2 my-5 ring-1 ring-slate-300 outline-none px-3 shadow-md rounded-md" required/> 
    
          <input type="submit" className="bg-blue-700 py-2 text-white w-full font-bold rounded-md shadow-lg mt-6 hover:bg-blue-800" value="Forgot Password" /> 
        </form>
       
      </div>
    </>
  )
}
