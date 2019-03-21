import React,{Component} from 'react';
import withAuth from '../AuthServices/withAuth';
import AuthServices from '../AuthServices/AuthServices';
import axios from 'axios';
import Spinner from '../Spinner';
/*
This component is triggered when the user deletes a project
*/
class DeleteProjects extends Component{
    constructor(props)
    {
        super(props);
        this.Auth =new AuthServices();
        this.state={message:null}
        
    }
    componentWillMount=async ()=>{
        const { match: { params } } = this.props;
        const userId=this.Auth.getProfile().id;
        var response=await axios.delete(`http://localhost:8080/project/${userId}/delete/${params.projectId}`,{
            headers:{
                Authorization:this.Auth.getToken()
            }
        })
        this.setState({message:response});
        
    }
    renderHandler=()=>{
        if(this.state.message===null)
        {
            return(<div><Spinner /></div>)
        }
        else
        {
            return(
            this.props.history.replace("/dashboard")
            )
        }
    }
    render()
    {
        return(
        <div>{this.renderHandler()}</div>
        )
    }
}

export default withAuth(DeleteProjects)