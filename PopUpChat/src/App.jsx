/* eslint-disable no-unused-vars */
import { createContext, useState } from "react"
import { socket } from "./socket"
import LoginPage from "./AuthenticationSystem/Pages/LoginPage";
import {BrowserRouter,Navigate,Route,Routes} from "react-router-dom";
import SignupPage from "./AuthenticationSystem/Pages/SignupPage";
import ForgotPasswordPage from "./AuthenticationSystem/Pages/ForgotPasswordPage";
import OTPVerificationPage from "./AuthenticationSystem/Pages/OTPVerificationPage";
import AlertMessageCom from "./AuthenticationSystem/Component/AlertMessageCom";
import HomePage from "./AdminPanel/Page/HomePage";
import ChangePasswordPage from "./AuthenticationSystem/Pages/ChangePasswordPage";
import LayoutPage from "./AdminPanel/Page/LayoutPage";
import ChatPage from "./AdminPanel/Page/ChatPage";
import SettingPage from "./AdminPanel/Page/SettingPage";
import PropertySetting from "./AdminPanel/Page/PropertySetting";
import WidgetSetting from "./AdminPanel/Page/WidgetSetting";

export const GComtext = createContext()



function App() {
 
  let [msg,setMsg] = useState("");

  let [showmsg,setShowMessage] = useState(false);
  let [message,setMessage] = useState("");

  

  function showAlertMassage(message){
    setShowMessage(true);
    setMessage(message);

    setTimeout(() => {
      setShowMessage(false);
    }, 4000);
  }

  function onEnter(page) {
    const isLoggedIn = sessionStorage.getItem('loginSession');
    if (isLoggedIn != null) {
      return <Navigate to="/signup" />
    }else{
      return page
    }
  }

  


  
  // socket.on("connect",()=>{
  //   console.log("connected")
  // })

  // socket.on("Test1",(msg)=>{
  //   console.log(msg)
  // })
 
  return (
    <GComtext.Provider value={showAlertMassage} >
        {showmsg == true && <AlertMessageCom message={message} />}
        
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
            <Route path="/otpverification" element={<OTPVerificationPage />} />
            <Route path="/newpassword" element={<ChangePasswordPage />} />
            
            <Route path="/" element={<LayoutPage />}>
                <Route index element={<HomePage />}/>
                <Route path="/chat" element={<ChatPage />}/>
                <Route path="/propertysetting" element={<PropertySetting />}/>
                <Route path="/widgetsetting" element={<WidgetSetting />}/>
            </Route>

          </Routes>
        </BrowserRouter>
    </GComtext.Provider>

   
  )
}

export default App
