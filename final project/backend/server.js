const express=require("express");
const mongoose=require("mongoose");
const RegisterRouter=require("./routes/RegisterRoutes");
const app=express();
mongoose.connect("mongodb://localhost:27017/mydb").then(()=>{
    console.log("Database connected sucessfully");
    app.listen(3001,()=>{
        console.log("Server is running on port 3001");
    });
}).catch(()=>{
    console.log("Something went worng");
})
app.use("/register",RegisterRouter);
