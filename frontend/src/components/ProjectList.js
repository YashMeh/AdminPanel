import React from 'react';
import {Link} from 'react-router-dom';
import './ProjectList.css';
const ProjectList=(props)=>{
    const pList=props.projects.map((project)=>{
        return (
        <div key={project._id} className="card cw" >
            
            <div className="content">
            <Link to={`/device/${project._id}`} >
            <div className="header">{project.name}</div>
            </Link> 
            </div>
            <div className="extra content">
            <button class="ui inverted primary button">Open</button>
            <button class="ui inverted red button" style={{marginLeft:"25%"}}
            >Delete
            </button>
            </div>
           
        </div>
        )
    })
    return (
        <div className="ct">
    <div className="ui cards">{pList}</div>
    </div>)
}

export default ProjectList;