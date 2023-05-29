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

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const io = new Server(server,{cors:["http://localhost:5173"]});



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


io.on('connection', (socket) => {
  console.log('a user connected',socket.id);
  
  socket.on("Test1",(msg)=>{
    io.emit("Test1",msg);
    console.log("in server" + msg);
  })

  socket.on("disconnect",()=>{
    console.log("user disconnected");
  })
  // socket.emit("test","Hello  how are you");
});




app.get("/add/message/:msg",(req,res)=>{
  io.emit("Test1",req.params.msg);
  res.send(req.params.msg);
})


server.listen(4000, () => {
  console.log('listening on *:4000');
});