import express from "express";
export const adminDataRoutes = express.Router();
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



adminDataRoutes.post("/getalldata",async (req,res)=>{
    let data;
    try {
        data =await getAllData(req.body.Email);
    } catch (error) {
        console.log(error);
    }
    
    res.json(data);
})