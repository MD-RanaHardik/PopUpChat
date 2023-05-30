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
import { NewMessageChat, StartNewChat, addChat, addProperty, addWidget, getAllData } from "../mongodb/propertyUtility.js";
import cors from "cors";
import { io } from "../src/main.js";


clientChatRoutes.get("/chat/:property_ID/:widget_ID/:user_IP",async(req,res)=>{
    let data = await StartNewChat(req.params.user_IP,req.params.property_ID);
    res.json(data)
})


clientChatRoutes.get("/message/:user/:widget_ID/:user_IP/:message",async(req,res)=>{
    let data = await NewMessageChat(req.params.user_IP,req.params.widget_ID,req.params.message,req.params.user);
    res.json(data)
})

clientChatRoutes.get("/test",async (req,res)=>{
    let data = await StartNewChat("1277.1.1.1","646e0c21eb04b792497da3f8");
    io.emit("1277:34:4521a","cleint msg");
    res.json("test")

    // let data = await NewMessageChat("12.34.34.4","6474ad38f5236b18e7991a15","Hello","Admin");
    // res.json(data)
})