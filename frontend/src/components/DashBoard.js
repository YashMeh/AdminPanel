import React,{Component} from 'react';
import withAuth from './withAuth';
import AuthServices from './AuthServices';
import axios from 'axios';
import ProjectList from './ProjectList';
import AddProject from './AddProject';
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
            <ProjectList projects={this.state.projects} />
            <button onClick={this.handleAddNew}>ADD NEW PROJECT</button>
            </div>
            )
        }
        else
        {
            return (
                <div>
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