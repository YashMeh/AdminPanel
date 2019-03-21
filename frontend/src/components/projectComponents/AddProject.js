import React,{Component} from 'react';

/*
This component gets rendered when the user wants to add
a project.
*/

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
            <div  id="outer">
            <form onSubmit={this.handleSubmit}>
                <div id="heading">
                Add
                </div>
                <br />
                <br />
                <br />
                <label>
                    Name:
                </label>
                <div className="ui input focus">
                <input type="text" 
                placeholder="Enter name"
                name="name"
                onChange={this.handleChange} />
                </div>
                <br />
                <br />
                <input type="submit" 
                value="ADD PROJECT"
                className="ui inverted secondary button"
                style={{marginLeft:35}} />
            </form>
            </div>
        )
    }
}
export default AddProject;

