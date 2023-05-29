/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { GComtext } from "../../App";
import { API_HOST } from "../../setting";


export default function SignupPage() {

  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();
  const showMessage = useContext(GComtext)

  let passwordinput  = document.getElementById("Password");
  let passwordbar = document.getElementById("passwordbar");

  let pattern = /\b[A-Z]+\d+[a-z]/
  let l = [0, 0, 0, 0, 0];


  function passwordChecker(e) {
    setPassword(e.target.value);

    if (password.length < 8) {
      if (l[0] != 0) {
        l[0] = 0;
      }
    } else {
      l[0] = 20;
    }
    if (password.search(/\b[A-Z]/) < 0) {
      if (l[1] != 0) {
        l[1] = 0;
      }

    } else {
      l[1] = 20;
    }

    if (password.search(/[a-z]/) < 0) {
      if (l[2] != 0) {
        l[2] = 0;
      }

    } else {
      l[2] = 20;
    }

    if (password.search(/[@!#$%^&}*{~?]/) < 0) {
      if (l[3] != 0) {
        l[3] = 0;
      }

    } else {
      l[3] = 20;
    }

    if (password.search(/[0-9]/) < 0) {
      if (l[4] != 0) {
        l[4] = 0;
      }

    } else {
      l[4] = 20;
    }

     checkstrangth();

  }


  function checkstrangth(){

    if(l.reduce((a,b)=>a+b) < 25 ){
        passwordbar.innerText = "too weak";
        passwordbar.classList ="text-white  p-1 pl-2 rounded-lg";
        passwordbar.classList.toggle("bg-red-700");
        passwordbar.classList.toggle("w-25");
        passwordinput.setCustomValidity("too weak");
    }

    if(l.reduce((a,b)=>a+b) > 25 && l.reduce((a,b)=>a+b) < 50 ){
        passwordbar.innerText = "weak";
        passwordbar.classList ="text-white  p-1 pl-2 rounded-lg";
        passwordbar.classList.toggle("bg-yellow-400");
        passwordbar.classList.toggle("w-50");
        passwordinput.setCustomValidity("weak");
    }

    if(l.reduce((a,b)=>a+b) > 50 && l.reduce((a,b)=>a+b) < 75 ){
        passwordbar.innerText = "medium";
        passwordbar.classList ="text-white  p-1 pl-2 rounded-lg";
        passwordbar.classList.toggle("bg-blue-700");
        passwordbar.classList.toggle("w-75");
        passwordinput.setCustomValidity("medium");
    }

    if(l.reduce((a,b)=>a+b) == 100 ){
        passwordbar.innerText = "strong";
        passwordbar.classList ="text-white  p-1  pl-2 rounded-lg";
        passwordbar.classList.toggle("bg-green-700");
        passwordbar.classList.toggle("w-100");
        passwordinput.setCustomValidity("");
    }

    if(l.reduce((a,b)=>a+b) == 0 ){
        passwordbar.innerText = "";
        passwordbar.classList ="text-white p-1 pl-2 rounded-lg";
      
    }


    console.log(l.reduce((a,b)=>a+b));
}


  async function handleSubmitEvent(e) {
    e.preventDefault();
    
    if(sessionStorage.getItem("verify") != null){
      navigate("/otpverification")
    }else{
        // sessionStorage.setItem("verify","test")
         let response = await axios.post(`${API_HOST}/signup`,{Username:username,Email:email,Password:password})
        
         if(response.data.message == "OTP sent to email"){
            sessionStorage.setItem("verify",response.data.token)
            setTimeout(() => {
              sessionStorage.removeItem("verify");
            }, 180000);
            navigate("/otpverification")
         }
         if(response.data.message == "Email already exists"){
          showMessage(response.data.message);
         }
      
    }

    // console.log(sessionStorage.getItem("verify"));
    

  }


  return (
    <>
      <div className="shadow w-2/5 p-10 rounded-2xl mx-auto mt-14 drop-shadow-2xl">
        <h1 className="text-slate-600 text-3xl font-bold">Create account</h1>
        <form onSubmit={(e) => handleSubmitEvent(e)}>
          <input type="text" placeholder="Username" value={username} onChange={(e) => { setUsername(e.target.value) }} className="w-full py-2 my-5 ring-1 ring-slate-300 outline-none px-3 shadow-md rounded-md" required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="w-full py-2 mb-5 ring-1 ring-slate-300 outline-none px-3 shadow-md rounded-md" required />
          <input type="password" placeholder="Password" id="Password" value={password} onChange={(e) => { passwordChecker(e) }} className="w-full py-2 mb-5 ring-1 ring-slate-300 outline-none px-3 shadow-md rounded-md" required />
          <div className="mt-3">
            <div className="" id="passwordbar"></div>
          </div>
          <input type="submit" className="bg-blue-700 py-2 text-white w-full font-bold rounded-md shadow-lg mt-6 hover:bg-blue-800" value="Create account" />
        </form>


        <p className="text-center mt-4">Already have an account? <Link to={"/login"} ><button className="text-blue-500 font-semibold">Login</button></Link></p>
      </div>
    </>
  )
}




