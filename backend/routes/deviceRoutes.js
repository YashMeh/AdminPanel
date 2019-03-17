const express=require("express");
const router=express.Router();
const jwtVerify=require("./verifyTokens");
const Project=require("../models/project");
const Device=require("../models/device");

var giveDeviceDet=(arr)=>{
    var deviceDet=[];
    return new Promise((resolve,reject)=>{
        arr.map((element,index,arr)=>{
            Device.findById(element).then((device)=>{
                console.log("INSIDE LOOP")
                console.log(device)
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
        console.log(foundProject)
        giveDeviceDet(foundProject.devices).then((deviceDet)=>{
            res.json(deviceDet)
        })
    })
})

//Post the device for a specific project
router.post("/:projectId",jwtVerify,(req,res)=>{
    var device=req.body;
    console.log(device)
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