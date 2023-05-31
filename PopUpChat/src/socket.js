import {io} from "socket.io-client";

export const socket = io("https://popupchat.onrender.com",{autoConnect:false});


// export const socket = io("http://localhost:4000",{autoConnect:false});

