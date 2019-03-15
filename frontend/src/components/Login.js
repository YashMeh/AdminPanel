import React,{Component} from 'react';
class Login extends Component{
    state={email:'',password:''}
    onSubmitListener=(event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state);
    }
    onChangeListener=(e)=>{
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
    render()
    {
        return(
        <div>
            <form onSubmit={this.onSubmitListener}>
                
                <label>
                    Email:
                </label>
                <input type="text"
                       name="email"
                       placeholder="Enter Email"
                       onChange={this.onChangeListener}
                />
                <br />
                <br />
                      
                <label>
                    Password:
                </label>
                <input type="password"
                       name="password"
                       placeholder="Enter Password"
                       onChange={this.onChangeListener}
                />  
                <br />
                <br />
                   
                <input type="submit"
                       value="LOGIN"
                />       
                  
                
                

            </form>
        </div>
        )
    }
}

export default Login;