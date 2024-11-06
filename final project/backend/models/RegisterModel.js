const mongoose=require("mongoose");
const RegisterSchems=new mongoose.Schema(
    {
        username:String,
        email:String,
        password:String
    }
);
const RegisterModel=mongoose.model("Register",RegisterSchems);
module.exports=RegisterModel;
