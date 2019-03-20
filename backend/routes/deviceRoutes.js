const express=require("express");
const router=express.Router();
const jwtVerify=require("./verifyTokens");
const Project=require("../models/project");
const Device=require("../models/device");
const User=require("../models/user");
var giveDeviceDet=(arr)=>{
    var deviceDet=[];
    return new Promise((resolve,reject)=>{
        arr.map((element,index,arr)=>{
            Device.findById(element).then((device)=>{
                deviceDet.push(device)
                if(deviceDet.length===arr.length)
            {
                resolve(deviceDet)
            }
            })
            
        })
    })
    
}

//Get all the devices of a project
router.get("/:projectId",jwtVerify,(req,res)=>{
    var projectId=req.params.projectId;
    Project.findById(projectId).then((foundProject)=>{
        giveDeviceDet(foundProject.devices).then((deviceDet)=>{
            res.json(deviceDet)
        })
    })
})

//Post the device for a specific project
router.post("/:projectId",jwtVerify,(req,res)=>{
    var device=req.body;
    var projectId=req.params.projectId;
    Device.create(device).then((newDevice)=>{
        Project.findById(projectId).then((project)=>{
            project.devices.push(newDevice);
            project.save();
            res.json(newDevice)
        })
    })
})
//Delete a particular project
router.delete("/:userId/delete/:projectId",(req,res)=>{
    User.findById(req.params.userId).then((foundUser)=>{
        foundUser.projects.pop(req.params.projectId)
        foundUser.save()
        Project.findByIdAndDelete(req.params.projectId).then((delProject)=>{
            res.json(delProject)
        })
        console.log("Deleted from the user")
    })
    
})

module.exports=router