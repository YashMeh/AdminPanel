import React,{Component} from 'react';
import './Login.css'
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
        <div id="outer">
            <form onSubmit={this.onSubmitListener}>
            <div id="heading">
                Login
            </div>
            <br />
            <br />
            <br />
                <label>
                    Email:
                </label>
                <div className="ui input focus" >
                <input type="text"
                       name="email"
                       placeholder="Enter Email"
                       onChange={this.onChangeListener}
                />
                </div>
                <br />
                <br />
                      
                <label>
                    Password:
                </label>
                <div className="ui input focus">
                <input type="password"
                       name="password"
                       placeholder="Enter Password"
                       onChange={this.onChangeListener}
                />  
                </div>
                <br />
                <br />
                <br />
                <br />   
                <input type="submit"
                       value="LOGIN"
                       className="ui inverted secondary button"
                       style={{marginLeft:35}}
                />       
                  
                
                

            </form>
            <div className="footer">
            <a href="https://github.com/scorelab/senz">
            Source Code
            </a>
            <a href="/err" className="f1">
                Terms
            </a>
            <a href="/err" className="f1">
                Privacy
            </a>
            </div>
        </div>
        )
    }
}

export default Login;