import React,{Component} from 'react';
import withAuth from './withAuth';
import axios from 'axios';
import AuthServices from './AuthServices';
import DeviceList from './DeviceList';
import AddDevice from './AddDevice'
import NavBar from './NavBar';

class Project extends Component{
    
    constructor(props)
    {
        super(props)
        this.Auth=new AuthServices();
        this.state={devices:[],addNew:false}
    }
    async componentDidMount(){
        //This will match the params with the props
        const { match: { params } } = this.props;
        var response=await axios.get(`http://localhost:8080/device/${params.projectId}`,{
            headers:{
                Authorization:this.Auth.getToken()
            }
        })
        this.setState({devices:response.data})
    }
    handleAddNewDevice=()=>{
        this.setState({addNew:true})
    }
    handleSubmit=async (deviceObj)=>{
        const {match: {params} }=this.props;
        await axios.post(`http://localhost:8080/device/${params.projectId}`,{
                name:deviceObj.name,
            pubkey:deviceObj.pubkey

            
        },{
            headers:{
                Authorization:this.Auth.getToken()
            }
        })
        var response=await axios.get(`http://localhost:8080/device/${params.projectId}`,{
            headers:{
                Authorization:this.Auth.getToken()
            }
        })
        this.setState({devices:response.data,addNew:false})
    }
    renderControl=()=>{
        if(!this.state.addNew)
        {
            return(
                <div>
                <NavBar />
                <DeviceList devices={this.state.devices} />
                <button onClick={this.handleAddNewDevice}>ADD NEW DEVICE</button>
                </div>
            )
        }
        else
        {
            return(
                <div>
                <NavBar />    
                <AddDevice onSubmit={this.handleSubmit} />
                </div>
            )   
        }
    }
    render()
    {
        return(
            <div>{this.renderControl()}</div>
        )
    }
}

export default withAuth(Project);