var mongoose=require("mongoose");

var deviceSchema=new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    pubkey:{
        required:true,
        type:String
    },
    project:{
        id:{
			type:mongoose.Schema.Types.ObjectId,
			ref:"project"
        }

        
    },
    date:{type:Date,default:Date.now}
    
})

module.exports=mongoose.model("device",deviceSchema);
