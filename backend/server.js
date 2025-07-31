require('dotenv').config();
const express=require('express');
const cors=require('cors');
const path=require('path');
const app=express();
//Middlware to handle CORS
app.use(
    cors({
        origin:"*",
        methods:["GET","POST","PUT","DELETE"],
        allowedHeaders:["Content-Type","Authorization"],
    })
);

//Middleware
app.use(express.json());
//Routes
//server uploads folder
app.use("/uploads",express.static(path.join(__dirname,"uploads"),{}));
//Start Server
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})