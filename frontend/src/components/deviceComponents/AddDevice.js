import React,{Component} from 'react';
import '../Styling/AddDevice.css';

/*
This component will be rendered when the user wants to add 
a new device to his dashboard
*/

class AddDevice extends Component{
    state={name:'',pubkey:''}
    handleChange=(e)=>{
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        //Passing the state to the parent component
        this.props.onSubmit(this.state);
    }
    render()
    {
        return(
            <div id="outer">
            <form onSubmit={this.handleSubmit}>
            <div id="heading" style={{fontSize:80}}>
                Add 
            </div>
            <br />
            <br />
            <br />
                <label>
                    Name:
                </label>
                <div className="ui input focus" style={{width:200}}>
                <input type="text" 
                placeholder="Enter name"
                name="name"
                onChange={this.handleChange} />
                </div>
                <br />
                <br />
                <label>
                    Public Key:
                </label>
                <div className="ui input focus" style={{width:200}}>
                <input type="text" 
                placeholder="Enter public key"
                name="pubkey"
                onChange={this.handleChange} />
                </div>
                <br />
                <br />
                <input type="submit"
                 value="ADD DEVICE"
                 className="ui inverted secondary button"
                 style={{width:200}} />
            </form>
            </div>
        )
    }
}
export default AddDevice;

