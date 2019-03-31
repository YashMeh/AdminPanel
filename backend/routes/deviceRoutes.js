const express=require("express");
const router=express.Router();
const jwtVerify=require("./verifyTokens");
const Project=require("../models/project");
const Device=require("../models/device");


//Get all the devices of a project
router.get("/:projectId",jwtVerify,(req,res)=>{
    Project.findById(req.params.projectId).populate("devices").exec((err,project)=>{
        res.status(200).json(project.devices)
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
            res.status(200).json(newDevice)
        })
        newDevice.project.id=req.params.projectId;
        newDevice.save()
    })
})
//Delete a particular device
router.delete("/delete/:deviceId",jwtVerify,(req,res)=>{
    Device.findByIdAndDelete(req.params.deviceId).then((deletedDevice)=>{
        Project.findById(deletedDevice.project.id).then((foundProject)=>{
            foundProject.devices.remove(req.params.deviceId)
            foundProject.save().then((pr)=>{
                res.json("Deleted")
            })
        })
        
    })
})


module.exports=router