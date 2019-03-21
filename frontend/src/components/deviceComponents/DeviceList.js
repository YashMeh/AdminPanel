import React from 'react';
import "../Styling/DeviceList.css";
import {Link} from 'react-router-dom';

const DeviceList=(props)=>{
    const dList=props.devices.map((device)=>{
        return (
        <div key={device._id} className="card cwd">
        <div className="content">
            <div className="header">Name: {device.name}</div>
            <div className="meta">Public Key: {device.pubkey}</div>
            <div className="meta">Status:Offline</div>
            <div className="meta">Bytes Received:23</div>
            <div className="meta">Bytes Sent:25 </div>
        </div> 
        <div className="extra content">
            <Link to="/err">
            <button className="ui inverted green button">
            Connect
            </button>
            </Link>
            <Link to="/err" >
            <button className="ui inverted primary button" 
            style={{marginLeft:"25%"}}
            >Open
            </button>
            </Link>
            </div>   
        </div>

        )
    })
    return (<div className="ct">
        <div className="ui cards">
        {dList}
        </div>
        </div>)
}

export default DeviceList;