const express=require("express");
const router=express.Router();
const jwtVerify=require("./verifyTokens");
const Project=require("../models/project");
const User=require("../models/user");

var giveDetailsOfProject=(arr)=>{
    var projectDetails=[]
    return new Promise((resolve,reject)=>{
        arr.map((element,index,arr)=>{
            Project.findById(element).then((project)=>{
                projectDetails.push(project)
                if(projectDetails.length===arr.length)
                {
                    resolve(projectDetails)
                }
            })  
           
        })
    })
}
//Get all the projects of a particular user
router.get("/:userid/all",jwtVerify,(req,res)=>{
    var userId=req.params.userid;
    User.findById(userId).then((user)=>{
        giveDetailsOfProject(user.projects).then((response)=>{
            res.json(response)
        })
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
            var userObj={name:user.name,email:user.email,projects:user.projects}
            res.json(userObj)
        })
    })
})



module.exports=router;