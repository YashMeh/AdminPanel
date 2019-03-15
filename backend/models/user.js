var mongoose=require("mongoose");

var userSchema=new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    },
    projects:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"project"
    }]
    
})

module.exports=mongoose.model("user",userSchema);
