import React,{Component} from 'react';
import withAuth from './withAuth';
import AuthServices from './AuthServices';
import axios from 'axios';
import ProjectList from './ProjectList';
import AddProject from './AddProject';
import NavBar from './NavBar';

class DashBoard extends Component{
    
    constructor()
    {
        super()
        this.state={projects:[],addNew:false}
        this.Auth=new AuthServices()
    }
    componentDidMount=async ()=>{
        var userId=this.Auth.getProfile().id;
        var response=await axios.get("http://localhost:8080/project/"+userId+"/all",{
            headers:{
                Authorization:this.Auth.getToken()
            }
        });
        this.setState({projects:response.data})
        
    }
    handleSubmit=async (projectObj)=>{
        var userId=this.Auth.getProfile().id;
        await axios.post("http://localhost:8080/project/"+userId+"/new",{
            name:projectObj.name
            },
            {
            headers:{
                Authorization:this.Auth.getToken()
            }

        })   
        var newResponse=await axios.get("http://localhost:8080/project/"+userId+"/all",{
            headers:{
                Authorization:this.Auth.getToken()
            }
        });
        this.setState({addNew:false,projects:newResponse.data})
        
    }
    handleAddNew=()=>{
        this.setState({addNew:true})
    }
    renderControl()
    {
        if(!this.state.addNew)
        {
            return (
            <div>
            <NavBar />
            <ProjectList projects={this.state.projects} />
            <button 
            onClick={this.handleAddNew}
            className="ui inverted blue button"
            id="addNew"
            style={{position:"absolute",right:"20%",top:"4%"}}
            >Add Project<i className="plus icon"></i>
            </button>
            </div>
            )
        }
        else
        {
            return (
                <div>
                    <NavBar />    
                    <AddProject onSubmit={this.handleSubmit} />
                </div>
            )
        }
    }
    render()
    {
        return (
            <div>
                {this.renderControl()}
            </div>
        )
    }
}

export default withAuth(DashBoard)