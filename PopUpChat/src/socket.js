import {io} from "socket.io-client";
import { API_HOST } from "./setting";

// export const socket = io(API_HOST,{autoConnect:false});


export const socket = io(API_HOST,{autoConnect:false});

