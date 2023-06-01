import mongoose from "mongoose"
import { ChatModel, PropertyModel, UserModel, WidgetModel } from "./models.js"

export const getAllData = async (email) => {
    let userdata = await UserModel.find().populate([{
        path: "property",
        populate: {
            path: "Widget",
            model: "Widget",

        }
    },
    {
        path: "property",
        populate: {
            path: "Chat",
            model: "Chat",
        }
    }

    ]).where("Email").equals(email);
    return userdata;

}

// export const addProperty = async () => {
//     let property = new PropertyModel({
//         Property_name: "Test",
//         Property_status: true,
//         Property_url: "",
//         Property_profile_url: "",
//         Forwarded_email: "ranahardik722@gmail.com",
//         Widget: new mongoose.Types.ObjectId("646e033f126a2509769e5ee8"),
//         Chat: {
//             "646e0bdc5d6c0862aba33666": new mongoose.Types.ObjectId("646e0bdc5d6c0862aba33666")
//         }
//     })
//     await property.save();
// }

export const addChat = async () => {
    let chat = new ChatModel({
        Ip_address: "127.0.0.1",
        ChatData: ["hardik", "rana", "meet"],
        is_completed: false
    })
    await chat.save()
}

// export const addWidget = async () => {
//     let widget = new WidgetModel({
//         Widget_name: "TestW",
//         Widget_status: true,
//         Widget_color: "red",
//         is_enable_sound_notification: true
//     });
//     await widget.save()
// }

export const StartNewChat = async (IP, Property_ID) => {
    console.log(IP);
    let newip = IP.replaceAll(".",":");
    
    console.log(newip);

    let fin = await PropertyModel.findOne({_id:Property_ID}).populate("Chat");
    console.log(fin);
    let chat = fin.Chat[newip];
    if(chat == undefined){
        
        let chatmodel = new ChatModel({
            Ip_address: newip,
            ChatData: [],
            is_completed: false
        });
        await chatmodel.save();

        try {
            let newobj = await PropertyModel.updateOne({ _id: Property_ID }, { $set: { [`Chat.${newip}`]: new mongoose.Types.ObjectId(chatmodel._id) } }, { upsert: true });
            
        } catch (error) {
            console.log("_______ faid to add property",error)
        }

        return chatmodel;
    }else{
        return chat;
    }

    // try {
    //     let chat = fin.Chat[newip];
    //     console.log("chat finded + ++ ",chat);
    //     return chat;
    // } catch (error) {
    //     console.log("++++++++++ error cant find chat",error);
    //     let chatmodel = new ChatModel({
    //         Ip_address: newip,
    //         ChatData: [],
    //         is_completed: false
    //     });
    //     await chatmodel.save();

    //     try {
    //         let newobj = await PropertyModel.updateOne({ _id: Property_ID }, { $set: { [`Chat.${newip}`]: new mongoose.Types.ObjectId(chatmodel._id) } }, { upsert: true });
    //         console.log("_________ chat added to property",newobj);
    //     } catch (error) {
    //         console.log("_______ faid to add property",error)
    //     }

        
    //     console.log(chatmodel);
    //     return chatmodel;
        
    // }

    // let chat = fin.Chat[newip];
    // if(chat == undefined){

    //     let chatmodel = new ChatModel({
    //         Ip_address: newip,
    //         ChatData: [],
    //         is_completed: false
    //     });
    //     await chatmodel.save();
    
    //     let newobj = await PropertyModel.updateOne({ _id: Property_ID }, { $set: { [`Chat.${newip}`]: new mongoose.Types.ObjectId(chatmodel._id) } }, { upsert: true });
    
    //     return chatmodel;
    // }
    // else{
        
    //     return chat;
    // }

   


}

export const getWidgetAndpropertyData =async (property_ID)=>{

    let userdata = await PropertyModel.find().populate("Widget").where("_id").equals(property_ID);
    return userdata;

}

export const NewMessageChat = async (IP, Widget_ID, Message, user = "User") => {
    let newip = IP.replaceAll(".", ':');
    
    let newmessage = `${user}|||${Message}|||${new Date()}`;
    let newobj = ChatModel.updateOne({ _id: Widget_ID }, { $push: { ChatData: newmessage } }, { upsert: true });

    return newobj;

}



export const addWidget = async () => {
    let widget = new WidgetModel({
        Widget_name: "First Widget",
        Widget_status: true,
        Widget_color: "#d04b25",
        is_enable_sound_notification: true,

    });
    await widget.save()
    return widget;
    
}

export const addProperty = async (obj,widgetId) => {
    let property = new PropertyModel({
        Property_name: obj.Property_name,
        Property_status: obj.Property_status,
        Property_url: obj.Property_url,
        Property_profile_url: obj.Property_profile_url,
        Forwarded_email: obj.Forwarded_email,
        Widget: new mongoose.Types.ObjectId(widgetId),
        Chat: {
           
        }
    })
    await property.save();
    return property;
}


export const updateWidget = async (id,data)=> {
    try {
      await WidgetModel.findByIdAndUpdate({_id:id},{
        Widget_name:data.Widget_name,
        Widget_status:data.Widget_status,
        Widget_color:data.Widget_color,
      });
      
      return "Widget updated"
      
    } catch (error) {
      console.log(error);

      return "Failed to update widget"
    }
  }


export const updateProperty = async (id)=> {
    try {
      await PropertyModel.findByIdAndUpdate({_id:id},{
        Property_name:"mindeffet",
        Property_status:true,
        Property_url:"",
        Property_profile_url:"",
        forwarded_email:"parth.hirani@mindeffet.net",
       
      });
     
      
    } catch (error) {
      console.log(error);
    }
  }


