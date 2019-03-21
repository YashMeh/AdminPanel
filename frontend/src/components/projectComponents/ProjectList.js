import React from 'react';
import {Link} from 'react-router-dom';
import '../Styling/ProjectList.css';
import AuthServices from '../AuthServices/AuthServices';

/*
This component displays the list of projects
*/

const ProjectList=(props)=>{
    const userId=new AuthServices().getProfile().id;

    const pList=props.projects.map((project)=>{
        
        return (
        <div key={project._id} className="card cw" >
            
            <div className="content">
            <div className="header">{project.name}</div>
            </div>
            <div className="extra content">
            <Link to={`/device/${project._id}`}><button className="ui inverted primary button">
            Open
            </button>
            </Link>
            <Link to={`/project/${userId}/delete/${project._id}`}>
            <button className="ui inverted red button" 
            style={{float:"right"}}
            >Delete
            </button>
            </Link>
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