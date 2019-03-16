const express=require("express");
const router=express.Router();
const jwtVerify=require("./verifyTokens");
const Project=require("../models/project");
const User=require("../models/user")

router.get("/:userid",jwtVerify,(req,res)=>{
    var userId=req.params.userid;
    User.find({_id:userId}).then((user)=>{
        res.json(user[0].projects);
    }).catch((err)=>{
        throw err;
    })    

})
router.post("/:userid",jwtVerify,(req,res)=>{
    var userId=req.params.userid;
    var projectName=req.body.name;
    var project={name:projectName};
    User.find({_id:userId}).then((user)=>{
        Project.create(project).then((newProject)=>{
            user[0].projects.push(newProject);
            user[0].save();
            var userObj={name:user[0].name,email:user[0].email,projects:user[0].projects}
            res.json(userObj)
        })
    })
})

module.exports=router;