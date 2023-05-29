import mongoose from "mongoose"
import { ChatModel, PropertyModel, UserModel, WidgetModel } from "./models.js"

export const getAllData = async(email)=>{
    let userdata =await UserModel.find().populate({
        path:"property",
        populate:{
            path:"Widget",
            model:"Widget",
            
        },
        populate:{
            path:"Chat",
            model:"Chat"
        }
    }).where("Email").equals(email);
    return userdata;

}

export const addProperty = async()=>{
    let property =new PropertyModel({
        Property_name:"Test",
        Property_status:true,
        Property_url:"",
        Property_profile_url:"",
        Forwarded_email:"ranahardik722@gmail.com",
        Widget:new mongoose.Types.ObjectId("646e033f126a2509769e5ee8"),
        Chat:{
            "646e0bdc5d6c0862aba33666":new mongoose.Types.ObjectId("646e0bdc5d6c0862aba33666")
        }
    })
    await property.save();
}

export const addChat = async()=>{
    let chat = new ChatModel({
        Ip_address:"127.0.0.1",
        Chat:["hardik","rana","meet"]
    })
    await chat.save()
}

export const addWidget = async()=>{
    let widget = new WidgetModel({
        Widget_name:"TestW",
        Widget_status:true,
        Widget_color:"red",
        is_enable_sound_notification:true
    });
    await widget.save()
}