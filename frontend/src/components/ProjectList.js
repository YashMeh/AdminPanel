import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './ProjectList.css';

const ProjectList=(props)=>{
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
            <Link to="/err">
            <button className="ui inverted red button" 
            style={{marginLeft:"25%"}}
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