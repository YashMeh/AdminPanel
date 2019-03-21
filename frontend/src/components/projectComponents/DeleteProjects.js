import React,{Component} from 'react';
import withAuth from '../AuthServices/withAuth';
import AuthServices from '../AuthServices/AuthServices';
import axios from 'axios';

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
        var response=await axios.delete(`http://localhost:8080/project/${userId}/delete/${params.projectId}`)
        this.setState({message:response});
        
    }
    renderHandler=()=>{
        if(this.state.message===null)
        {
            return(<div>Deleting</div>)
        }
        else
        {
            this.props.history.replace("/dashboard")
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