import mongoose from "mongoose";
import { Encrypt,Decrypt } from "../cryptography/passwordhashing.js";
import { UserModel } from "./models.js";
import { addProperty, addWidget } from "./propertyUtility.js";

export var Register = async (Username, Email, Password) => {

    let count = await UserModel.find().where("Email").eq(Email).count();
    
    if (count >= 1) {
        return "User is already exists"
    } else {

        let encryptedpassword = Encrypt(Password);

        let widgetdata =await addWidget();

        let propertydata = await addProperty({
            Property_name: "First Property",
            Property_status: true,
            Property_url: "",
            Property_profile_url: "",
            Forwarded_email: Email,
        },widgetdata._id)

        let propertyID = propertydata._id;

        let User = new UserModel({
            Username: Username,
            Email: Email,
            Password: encryptedpassword,
            created_at: Date.now(),
            is_verified:false,
            property:{
                 [propertyID]: new mongoose.Types.ObjectId(propertydata._id)
            }
        })

        await User.save();

        return "Account created"

    }


}


export var Login = async(Email,Password)=>{
    let EncryptedPassword = Encrypt(Password);
    let count = await UserModel.find().where("Email").eq(Email).where("Password").eq(EncryptedPassword).count();

    if(count >=1){

        let is_verified = await UserModel.find().where("Email").eq(Email).where("Password").eq(EncryptedPassword).where("is_verified").eq(true).count();
        if(is_verified >=1){
            return "Login successfull";
        }else{
            return "Please verify your email";
        }

       
    }else{
        return "Please check email and password";
    }
}

export var EmailVerify = async(Username,Email,Password)=>{
    let EncryptedPassword = Encrypt(Password);
    let  res = await UserModel.findOneAndUpdate({Username:Username,Email:Email,Password:EncryptedPassword},{is_verified:true});
    
    return res;
}

export var ChanagePassword = async(Token,Newpassword)=>{
    let data = Decrypt(Token);
    let datalist = data.split("||");
    let EncryptedPassword = Encrypt(Newpassword);
    let  res = await UserModel.findOneAndUpdate({Username:datalist[0],Email:datalist[1],Password:datalist[2]},{Password:EncryptedPassword});
    
    return res;
}

export var GetUserData = async(Email)=>{
    
    let  res = await UserModel.find().where("Email").eq(Email);
    
    return res;
}
