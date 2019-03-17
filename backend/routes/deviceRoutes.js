const express=require("express");
const router=express.Router();
const jwtVerify=require("./verifyTokens");
const Project=require("../models/project");
const Device=require("../models/device");

//Get all the devices of a project
router.get("/:projectId",jwtVerify,(req,res)=>{
    var projectId=req.params.projectId;
    Project.findById(projectId).then((foundProject)=>{
        res.json(foundProject.devices)
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

module.exports=router