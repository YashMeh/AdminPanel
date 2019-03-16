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
    //One to many relation between user and projects
    projects:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"project"
    }]
    
})

module.exports=mongoose.model("user",userSchema);
