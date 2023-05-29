import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_HOST } from "../../setting";
import { GComtext } from "../../App";

export default function OTPVerificationPage() {
    let [otp,setOTP] = useState("");
    let navigate = useNavigate()
    const showMessage = useContext(GComtext);


    async function handleSubmitEvent(e){
      e.preventDefault();
      
      if(sessionStorage.getItem("verify") == null){
        showMessage("Session Ended");
        navigate("/signup")
      }else{
          let token = sessionStorage.getItem("verify");

           let response = await axios.post(`${API_HOST}/otpverification`,{OTP:otp,token:token})
          
           if(response.data.message == "Account verified"){
              sessionStorage.removeItem("verify");
              showMessage(response.data.message);
              navigate("/login")
           }
           if(response.data.message == "Failed to verify email"){
            showMessage(response.data.message);
           }
           if(response.data.message == "Enter correct OTP"){
            showMessage(response.data.message);
           }
        
      }
      
    }
  
  
    return (
      <>
        <div className="shadow w-2/5 p-10 rounded-2xl mx-auto mt-24 drop-shadow-2xl">
          <h1 className="text-slate-600 text-3xl font-bold">OTP Verification</h1>
          <form onSubmit={(e)=>handleSubmitEvent(e)}>
            <input type="number" placeholder="OTP" value={otp} onChange={(e)=>{setOTP(e.target.value)}} className="w-full py-2 my-5 ring-1 ring-slate-300 outline-none px-3 shadow-md rounded-md" required/> 
      
            <input type="submit" className="bg-blue-700 py-2 text-white w-full font-bold rounded-md shadow-lg mt-6 hover:bg-blue-800" value="Verify Account" /> 
          </form>
         
        </div>
      </>
    )
}
