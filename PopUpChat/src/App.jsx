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
import LodingPage from "./AdminPanel/Page/LodingPage";

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

  function onEnter(pageToRedirect,defaultPage) {
    const isLoggedIn = sessionStorage.getItem('loginSession');
    if (isLoggedIn != null) {
      return <Navigate to={pageToRedirect} />
    }else{
      return defaultPage
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
            <Route path="/login" element={onEnter("/",<LoginPage />)} />
            <Route path="/signup" element={onEnter("/",<SignupPage />) } />
            <Route path="/forgotpassword" element={onEnter("/",<ForgotPasswordPage />) } />
            <Route path="/otpverification" element={onEnter("/",<OTPVerificationPage />) } />
            <Route path="/newpassword" element={onEnter("/",<ChangePasswordPage />) } />
            

            <Route path="/" element={<LayoutPage /> }>
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
