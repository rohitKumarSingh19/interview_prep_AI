require('dotenv').config();
const express=require('express');
const cors=require('cors');
const path=require('path');
const app=express();
const connectDB=require('./config/db');
const authRoutes=require('./routes/authRoutes');
// import sessionRoutes from './routes/sessionRoutes';
// import questionRoutes from './routes/sessionRoutes'
//Middlware to handle CORS;
app.use(
    cors({
        origin:"*",
        methods:["GET","POST","PUT","DELETE"],
        allowedHeaders:["Content-Type","Authorization"],
    })
);
connectDB();
//Middleware
app.use(express.json());

//Routes
app.use("/api/auth",authRoutes
);
// app.use("/api/sessions",sessionRoutes);
// app.use('/api/questions',questionRoutes);
// app.use("/api/ai/generate-questions",protect,generateInterviewQuestions);
// app.use("/api/ai/generate-explanation",protect,generateConceptExplanation);


//server uploads folder
app.use("/uploads",express.static(path.join(__dirname,"uploads"),{}));
//Start Server
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})