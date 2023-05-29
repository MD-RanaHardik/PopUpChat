/* eslint-disable no-unused-vars */
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { GComtext } from "../../App";
import axios from "axios";
import { API_HOST } from "../../setting";



export default function ChangePasswordPage() {

    let [password, setPassword] = useState("");
    let [confirmpassword, setConfirmPassword] = useState("");
    let error = document.getElementById("error");
    let cpassword = document.getElementById("cpassword");
    

    let navigate = useNavigate()
    const showMessage = useContext(GComtext);


    function handleConfirmPassword(e){
        setConfirmPassword(e.target.value);
        if(e.target.value != password){
            error.innerHTML ="Password must be same";
            cpassword.setCustomValidity("Password must be same");
        }else{
            cpassword.setCustomValidity("");
            error.innerHTML = "" 
        }
    }



    async function handleSubmitEvent(e) {
        e.preventDefault();
        let urldata = new URLSearchParams(window.location.search);
        
        let token = urldata.get("token");

        let response = await axios.post(`${API_HOST}/newpassword`, {token:token, Password: password })

        if (response.data.message == "Password changed") {
            sessionStorage.removeItem("loginSession");
            showMessage(response.data.message);
            navigate("/login")
        }
        if (response.data.message == "Failde to change password") {
            showMessage(response.data.message);
        }
       


    }


    return (
        <>
            <div className="shadow w-2/5 p-10 rounded-2xl mx-auto mt-24 drop-shadow-2xl">
                <h1 className="text-slate-600 text-3xl font-bold">Change Password</h1>
                <form onSubmit={(e) => handleSubmitEvent(e)}>

                    <input type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} className="w-full py-2 my-5 ring-1 ring-slate-300 outline-none px-3 shadow-md rounded-md" required />
                    <input type="password" id="cpassword" placeholder="Confirm Password" value={confirmpassword} onChange={(e) => { handleConfirmPassword(e) }} className="w-full py-2 ring-1 ring-slate-300 outline-none px-3 shadow-md rounded-md" required />
                    <span className="text-sm text-red-700" id="error"></span>
                    <input type="submit" className="bg-blue-700 py-2 text-white w-full font-bold rounded-md shadow-lg mt-6 hover:bg-blue-800" value="Change password" />
                </form>

            </div>
        </>
    )
}
