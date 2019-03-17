import React from 'react';

const DeviceList=(props)=>{
    const dList=props.devices.map((device)=>{
        return (
        <div> 
        <div key={device._id} >
            <div>Name: {device.name}</div>
            <div>Public Key: {device.pubkey}</div>
        </div>
        </div>
        )
    })
    return <div>{dList}</div>
}

export default DeviceList;