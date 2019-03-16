import React,{Component} from 'react';
import withAuth from './withAuth';
import AuthServices from './AuthServices';
import axios from 'axios';
import ProjectList from './ProjectList';
class DashBoard extends Component{
    
    constructor()
    {
        super()
        this.state={projects:[]}
        this.Auth=new AuthServices()
    }
    componentDidMount=async (props)=>{
        var userId=this.Auth.getProfile().id;
        var response=await axios.get("http://localhost:8080/project/"+userId+"/all",{
            headers:{
                Authorization:this.Auth.getToken()
            }
        });
        this.setState({projects:response.data})
        
    }
    render()
    {
        return (
            <div>
                <ProjectList projects={this.state.projects} />
            </div>
        )
    }
}

export default withAuth(DashBoard)