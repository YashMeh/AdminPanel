import React,{Component} from 'react';
import withAuth from '../AuthServices/withAuth';
import axios from 'axios';
import AuthServices from '../AuthServices/AuthServices';
import DeviceList from '../deviceComponents/DeviceList';
import AddDevice from '../deviceComponents/AddDevice';
import NavBar from '../NavBar';

/*
This compenent manages the list of devices of the particular project
*/

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
                <button onClick={this.handleAddNewDevice}
                style={{position:"absolute",right:"100px",top:"20px",paddingLeft:"10px",paddingRight:"8px"}}
                className="ui inverted blue button"
                >ADD NEW DEVICE<i className="plus icon"></i></button>
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