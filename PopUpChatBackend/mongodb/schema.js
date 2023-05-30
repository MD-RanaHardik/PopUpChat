import mongoose from "mongoose";


export const usersSchema = new mongoose.Schema({
    Username: String,
    Email: String,
    Password: String,
    created_at: Date,
    is_verified:Boolean,
    property:{
        type:Map,
        of:mongoose.Types.ObjectId,
        ref:"Property"
    }
});

export const propertySchema = new mongoose.Schema({
    Property_name:String,
    Property_status:Boolean,
    Property_url:String,
    Property_profile_url:String,
    Forwarded_email:String,
    Widget:{type:mongoose.Types.ObjectId,ref:"Widget"},
    Chat:{
        type:Map,
        of:mongoose.Types.ObjectId,
        ref:"Chat"
    }
});

export const widgetSchema = new mongoose.Schema({
    Widget_name:String,
    Widget_status:Boolean,
    Widget_color:String,
    is_enable_sound_notification:Boolean
});

export const chatSchema = new mongoose.Schema({
    Ip_address:String,
    ChatData:[String],
    is_completed:Boolean
});