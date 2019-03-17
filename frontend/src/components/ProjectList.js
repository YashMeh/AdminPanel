import React from 'react';
import {Link} from 'react-router-dom';

const ProjectList=(props)=>{
    const pList=props.projects.map((project)=>{
        return (
        <div> 
            
        <div key={project._id} >
            <Link to={`/device/${project._id}`} >
            <div>{project.name}</div>
           </Link> 
        </div>
        </div>)
    })
    return <div>{pList}</div>
}

export default ProjectList;