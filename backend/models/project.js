var mongoose=require("mongoose");

var projectSchema=new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    devices:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"device"
    }]
    
})

module.exports=mongoose.model("project",projectSchema);