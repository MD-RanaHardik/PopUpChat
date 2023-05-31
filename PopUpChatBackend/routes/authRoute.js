import express from "express";
export const authRoutes = express.Router();
import mongoose from "mongoose";
import { Register, Login, EmailVerify, GetUserData, ChanagePassword } from "../mongodb/authUtility.js";
import * as url from 'url';
import * as path from "path";
import { password ,email} from "../setting.js";
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
import nodemailer from "nodemailer";
import { Encrypt,Decrypt } from "../cryptography/passwordhashing.js";
import { addChat, addProperty, addWidget, getAllData } from "../mongodb/propertyUtility.js";
import cors from "cors";



// mongoose.connect("mongodb://0.0.0.0:27017/Chatio").then(() => console.log("Connected to mongodb")).catch((e) => console.log(e));

mongoose.connect("mongodb+srv://hardikrana:i7zPHaE0pFCZLPz5@popupchat.fefshet.mongodb.net/").then(() => console.log("Connected to mongodb")).catch((e) => console.log(e));



let transpoter = nodemailer.createTransport({
    service: "gamil",
    auth: {
        user: email,
        pass: password
    },
    port: 465,
    host: "smtp.gmail.com"
});

function CheckAndRedirect(req, res) {

    try {
        let data = Decrypt(req.session.data);
        let datalist = data.split("||");

        return {
            Username: datalist[0],
            Password: datalist[1],
        }
    } catch (error) {
        console.log(error);
        return null;
    }

}


authRoutes.get("/test", async (req, res) => {
    // res.send("sdshhdsvd")
    // addWidget()
    // addProperty();
    // addChat()
    let data =await getAllData();
    // console.log(data);
    // res.sendFile("D:/React/PopUpChat/PopUpChatBackend/src/index.html")
    res.json(data);
});

authRoutes.post("/getDecryptedData",(req,res)=>{
    let data = Decrypt(req.body.token);
    let datalist = data.split("||");
    res.send(datalist[0]);
})



authRoutes.get("/", async (req, res) => {
    res.render(path.join(__dirname, "../Templates/index.ejs"));
    // let data = CheckAndRedirect(req, res);
    // if (data) {
    //     res.render(path.join(__dirname, "../Templates/index.ejs"));
    // } else {
    //     res.redirect("/login");
    // }

});


authRoutes.get("/logout", (req, res) => {
    req.session.destroy();
    // res.redirect("/login")
    res.json({status:200,message:"Successfully logout"})
})

authRoutes.get("/login", async (req, res) => {
    let data = CheckAndRedirect(req, res);
    if (data) {
        // res.redirect("/");
        res.json({status:200,message:"Already login"})
    } else {
        res.json({status:200,message:"Not login"})
        // res.render(path.join(__dirname, "../Templates/login.ejs"), { message: "", color: "" });
    }


});


authRoutes.post("/login", async (req, res) => {
    let re = await Login(req.body.Email, req.body.Password);
    if (re == "Login successfull") {
        let token = Encrypt(`${req.body.Email}||${req.body.Password}`);
        // res.redirect("/");
        res.json({status:200,message:"Login successfull",token:token})
    } else if (re == "Please verify your email") {
        res.json({status:200,message:"Please verify your email"})
        // res.render(path.join(__dirname, "../Templates/login.ejs"), { message: "Please verify your email", color: "text-danger" });
    } else {
        res.json({status:200,message:"Please check username and password"})
        // res.render(path.join(__dirname, "../Templates/login.ejs"), { message: "Please check username and password", color: "text-danger" });
    }

});

authRoutes.get("/signup", async (req, res) => {
    let data = CheckAndRedirect(req, res);
    if (data) {
        // res.redirect("/");
        res.json({status:200,message:"Already login"})
    } else {
        res.json({status:200,message:"Not login"})
        // res.render(path.join(__dirname, "../Templates/signup.ejs"), { message: "", color: "" });
    }


});

authRoutes.post("/signup",cors(), async (req, res) => {

    let re = await Register(req.body.Username, req.body.Email, req.body.Password);

    if (re == "User is already exists") {
        res.json({status:200,message:"Email already exists"})
        // res.render(path.join(__dirname, "../Templates/signup.ejs"), { message: "Email already exists", color: "text-danger" });
    } else {

        let OTP = parseInt(Math.random() * 1000000000, 10);
        
        //     if (req.session.verify != undefined) {
        //         res.json({status:200,message:"OTP already sended"})
        //         // res.redirect("/otpverification");
        //     } else {
        //         var mailOptions = {
        //             from: 'ranahardik722@gmail.com',
        //             to: req.body.Email,
        //             subject: 'Verify your account',
        //             // text: `OTP : ${OTP}`,
        //             html:`<div class="" style="border: 1px solid navy; padding: 3%;">
        //             <h2 class="" style="text-align: center; padding-bottom: 1%; font-weight: bolder; color: #2c4dde;">VERIFY YOUR ACCOUNT</h2>
                    
        //             <p style="text-align: center;">Enter below OTP to verify your account.</p>
                    
        //             <p class="" style="text-align: center; font-weight: bolder; color: #2c4dde;">OTP</p>
        //             <p style="text-align: center;">${OTP}</p>
        //            </div>`
        //         };

        //         transpoter.sendMail(mailOptions, function (error, info) {
        //             if (error) {
        //                 console.log("Error __________")
        //             } else {
        //                 console.log("Send __________")
        //             }
        //         })
        //         req.session.cookie.maxAge = 60000;
        //         req.session.verify = Encrypt(`${OTP}||${req.body.Username}||${req.body.Email}||${req.body.Password}||${req.ip}`);
                
        //         res.json({status:200,message:"OTP sent to email"})

        // }

        var mailOptions = {
            from: 'ranahardik722@gmail.com',
            to: req.body.Email,
            subject: 'Verify your account',
            // text: `OTP : ${OTP}`,
            html:`<div class="" style="border: 1px solid navy; padding: 3%;">
            <h2 class="" style="text-align: center; padding-bottom: 1%; font-weight: bolder; color: #2c4dde;">VERIFY YOUR ACCOUNT</h2>
            
            <p style="text-align: center;">Enter below OTP to verify your account.</p>
            
            <p class="" style="text-align: center; font-weight: bolder; color: #2c4dde;">OTP</p>
            <p style="text-align: center;">${OTP}</p>
           </div>`
        };

        transpoter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log("Error __________")
            } else {
                console.log("Send __________")
            }
        })
        // req.session.cookie.maxAge = 60000;
        const token = Encrypt(`${OTP}||${req.body.Username}||${req.body.Email}||${req.body.Password}||${req.ip}`);
        
        res.json({status:200,message:"OTP sent to email",token:token})

    }

});

authRoutes.get("/otpverification", (req, res) => {
    
    if(req.session.verify !=undefined){
        let expiretime = new Date(req.session.cookie.expires).toLocaleTimeString();
        res.json({status:200,message:"Enter OTP",time:expiretime})
        // res.render(path.join(__dirname, "../Templates/otp.ejs"),{time:expiretime,message:""});
    }else{
        res.json({status:200,message:"Signup before verify account"})
        // res.redirect("/signup");
    }
    
    
})

authRoutes.post("/otpverification", async (req, res) => {
  
    let data = Decrypt(req.body.token).split("||");

        if(req.body.OTP == data[0]){
            let rs = await EmailVerify(data[1], data[2], data[3]);
            if (rs != null) {
                res.json({status:200,message:"Account verified"})
                // res.render(path.join(__dirname, "../Templates/login.ejs"), { message: "Account verified", color: "text-success" });
            } else {
                res.json({status:200,message:"Failed to verify email"})
                // res.render(path.join(__dirname, "../Templates/login.ejs"), { message: "Fail to verify email", color: "text-danger" });
            }
            
        }else{

            let expiretime = new Date(req.session.cookie.expires).toLocaleTimeString();
            res.json({status:200,message:"Enter correct OTP",time:expiretime})
            // res.render(path.join(__dirname, "../Templates/otp.ejs"),{time:expiretime,message:"Enter correct OTP"});
        }
    
    
})

authRoutes.get("/verifyemail", async (req, res) => {

    let data = Decrypt(req.query.token);
    let datalist = data.split("||");
    let rs = await EmailVerify(datalist[0], datalist[1], datalist[2]);
    if (rs != null) {
        res.render(path.join(__dirname, "../Templates/login.ejs"), { message: "Account verified", color: "text-success" });
    } else {
        res.render(path.join(__dirname, "../Templates/login.ejs"), { message: "Fail to verify email", color: "text-danger" });
    }

})

authRoutes.get("/forgot", async (req, res) => {
    let data = CheckAndRedirect(req, res);
    if (data) {
        res.json({status:200,message:"Already login"})
        // res.redirect("/");
    } else {
        res.json({status:200,message:"Not login"})
        // res.sendFile(path.join(__dirname, "../Templates/forgotpassword.html"));
    }


});

authRoutes.post("/forgot", async (req, res) => {
    console.log(req.body.Email);
    let data = await GetUserData(req.body.Email);

    console.log(data[0]);

    let key = Encrypt(`${data[0].Username}||${data[0].Email}||${data[0].Password}`)

    var mailOptions = {
        from: 'ranahardik722@gmail.com',
        to: req.body.Email,
        subject: 'Reset your password',
        text: `http://localhost:5173/newpassword?token=${key}`
    };

    transpoter.sendMail(mailOptions, function (error, info) {
        if (error) {

        } else {

        }
    })
    res.json({status:200,message:"Check forgot password email"})
    // res.sendFile(path.join(__dirname, "../Templates/forgotpassword.html"));
});

authRoutes.get("/newpassword", async (req, res) => {

    res.render(path.join(__dirname, "../Templates/newpassword.ejs"), { token: req.query.token });
});

authRoutes.post("/newpassword", async (req, res) => {

    let re = await ChanagePassword(req.body.token, req.body.Password);
    if (re != null) {
        req.session.destroy();
        res.json({status:200,message:"Password changed"})
        // res.render(path.join(__dirname, "../Templates/login.ejs"), { message: "Password changed", color: "text-success" });
    } else {
        res.json({status:200,message:"Failde to change password"})
        // res.render(path.join(__dirname, "../Templates/newpassword.ejs"), { token: "" });
    }

});







