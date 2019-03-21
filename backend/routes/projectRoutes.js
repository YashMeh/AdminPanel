const express=require("express");
const router=express.Router();
const jwtVerify=require("./verifyTokens");
const Project=require("../models/project");
const User=require("../models/user");

//Get all the projects of a particular user
router.get("/:userid/all",jwtVerify,(req,res)=>{
    
    User.findById(req.params.userid).populate("projects").exec((err,user)=>{
        res.json(user.projects)
    })
        

})
//Post a new project for a particular user
router.post("/:userid/new",jwtVerify,(req,res)=>{
    var userId=req.params.userid;
    var projectName=req.body.name;
    var project={name:projectName};
    User.findById(userId).then((user)=>{
        Project.create(project).then((newProject)=>{
            user.projects.push(newProject);
            user.save();
            res.json(newProject)
        })
    })
})

//Delete a particular project of a particular user
router.delete("/:userId/delete/:projectId",(req,res)=>{
    var userId=req.params.userId;
    var projectId=req.params.projectId;
    User.findById(userId).then((user)=>{
        user.projects.remove(projectId);
        user.save().then((pr)=>{
            res.json("Deleted");
        })
    })

    
})


module.exports=router;