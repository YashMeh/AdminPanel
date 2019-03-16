import React,{Component} from 'react';

class AddProject extends Component{
    state={name:''}
    handleChange=(e)=>{
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state);
    }
    render()
    {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                </label>
                <input type="text" 
                placeholder="Enter name"
                name="name"
                onChange={this.handleChange} />
                <br />
                <br />
                <input type="submit" value="ADD PROJECT" />
            </form>
        )
    }
}
export default AddProject;

