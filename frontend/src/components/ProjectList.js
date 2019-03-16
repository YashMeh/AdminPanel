import React from 'react';

const ProjectList=(props)=>{
    const pList=props.projects.map((project)=>{
        return <div key={project._id} >{project.name} </div>
    })
    return <div>{pList}</div>
}

export default ProjectList;