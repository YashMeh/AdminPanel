import React,{Component} from 'react';
import '../Styling/Login.css';
/*
This component gets rendered during the login of a user
*/

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
            <div id="heading" style={{fontSize:80}}>
                Login
            </div>
            <br />
            <br />
            <br />
                <label>
                    Email:
                </label>
                <div className="ui input focus" style={{width:200}} >
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
                <div className="ui input focus" style={{width:200}}>
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
                       style={{width:200}}
                />       
                  
                
                

            </form>
            <div className="footer" style={{right:10,bottom:15}}>
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