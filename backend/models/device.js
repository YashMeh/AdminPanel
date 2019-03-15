var mongoose=require("mongoose");

var deviceSchema=new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    pubkey:{
        required:true,
        type:String
    }
    
})

module.exports=mongoose.model("device",deviceSchema);
