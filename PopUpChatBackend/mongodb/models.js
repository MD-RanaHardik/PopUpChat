import mongoose from "mongoose";
import { usersSchema, propertySchema, widgetSchema, chatSchema } from "./schema.js";



export const UserModel = new mongoose.model("User",usersSchema );
export const PropertyModel = new mongoose.model("Property",propertySchema );
export const WidgetModel = new mongoose.model("Widget",widgetSchema );
export const ChatModel = new mongoose.model("Chat",chatSchema );

