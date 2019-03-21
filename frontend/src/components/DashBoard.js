import React,{Component} from 'react';
import withAuth from './AuthServices/withAuth';
import AuthServices from './AuthServices/AuthServices';
import axios from 'axios';
import ProjectList from './projectComponents/ProjectList';
import AddProject from './projectComponents/AddProject';
import NavBar from './NavBar';

/*
This is the main dashboard component
*/
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
            style={{position:"absolute",right:"100px",top:"20px"}}
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

/*
Using an higher order component to preven unauthorised access
*/
export default withAuth(DashBoard)