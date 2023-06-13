import express from "express";
export const clientChatRoutes = express.Router();
import mongoose from "mongoose";
import { Register, Login, EmailVerify, GetUserData, ChanagePassword } from "../mongodb/authUtility.js";
import * as url from 'url';
import * as path from "path";
import { password ,email} from "../setting.js";
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
import nodemailer from "nodemailer";
import { Encrypt,Decrypt } from "../cryptography/passwordhashing.js";
import { NewMessageChat, StartNewChat, addChat, addProperty, addWidget, endChat, getAllData, getWidgetAndpropertyData, updateProperty, updateWidget } from "../mongodb/propertyUtility.js";
import cors from "cors";
import { io } from "../src/main.js";


clientChatRoutes.get("/chat/:property_ID/:user_IP",async(req,res)=>{
    let data = await StartNewChat(req.params.user_IP,req.params.property_ID);
    io.emit(req.params.property_ID,"new chat recived");
    res.json(data)
})


clientChatRoutes.get("/message/:user/:widget_ID/:user_IP/:message",async(req,res)=>{
    let data = await NewMessageChat(req.params.user_IP,req.params.widget_ID,req.params.message,req.params.user);
    let newmessage = `${req.params.user}|||${req.params.message}|||${new Date()}|||${req.params.user_IP}`;
    io.emit(req.params.user_IP,newmessage);
    io.emit(`${req.params.user_IP}::tempmsg`,newmessage);
    res.json(data)
})

clientChatRoutes.post("/updatewidget",async(req,res)=>{
    let data = await updateWidget(req.body.id,req.body.data);
    res.json({status:200,message:data})
})

clientChatRoutes.post("/updateproperty",async(req,res)=>{
    
    let data = await updateProperty(req.body.id,req.body.data);
    res.json({status:200,message:data})
})






clientChatRoutes.get("/test",async (req,res)=>{
    // let data = await StartNewChat("1277.1.1.1","646e0c21eb04b792497da3f8");
    io.emit("10:1:010:010","cleint msg");
    res.json("test")

    // let data = await NewMessageChat("12.34.34.4","6474ad38f5236b18e7991a15","Hello","Admin");
    // res.json(data)
})


clientChatRoutes.get("/getwidget/:property_id",async (req,res)=>{
    let data = await getWidgetAndpropertyData(req.params.property_id);
    // io.emit("1277:34:4521a","cleint msg");
    res.json(data)

})


  
clientChatRoutes.get("/endchat/:property_id/:ip",async (req,res)=>{
    let data = await endChat(req.params.property_id,req.params.ip)
    // io.emit("1277:34:4521a","cleint msg");
   
    res.json({status:200,message:data})

})
