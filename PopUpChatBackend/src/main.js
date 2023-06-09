import express from 'express';
const app = express();
import http from'http';
const server = http.createServer(app);
import { Server } from "socket.io";
import { authRoutes } from '../routes/authRoute.js';
import session from "express-session";
import * as url from 'url';
import * as path from "path";
import cors from "cors";
import { adminDataRoutes } from '../routes/adminDataRoutes.js';
import { clientChatRoutes } from '../routes/clientChatRoutes.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const io = new Server(server,{cors:["*"]});



app.set("view engine","ejs");
app.set('trust proxy', true)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname + "../public")))
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:"hardikranamanaharbahai",
    cookie: { maxAge:1000*60*60*24}
}))

app.use("/",authRoutes)
app.use("/admindata",adminDataRoutes);
app.use("/client",clientChatRoutes);



io.on('connection', (socket) => {
  console.log('a user connected',socket.id);
  socket.on("fortest",(msg)=>{
    console.log(msg);
  })
  
  socket.on("liveuseremit",(msg)=>{
    console.log(msg);
    io.emit(`${msg.split("::")[2]}::liveuser`,msg);
  })
  
  socket.on("disconnect",()=>{
    console.log("user disconnected");
  })

 

  socket.on("test1",(msg)=>{
    console.log(msg)
    socket.emit("test1",msg);
  })



  // socket.emit("test","Hello  how are you");
});



app.get("/test1",(req,res)=>{
  io.emit("test1","test1");
  res.send("Hello");
})

app.get("/test2",(req,res)=>{
  io.emit("test2","test2");
  res.send("Hello");
})





server.listen(4000, () => {
  console.log('listening on *:4000');
});