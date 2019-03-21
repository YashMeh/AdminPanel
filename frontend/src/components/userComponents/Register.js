import React,{Component} from 'react';
import '../Styling/Register.css';

/*
This component gets rendered when the user wants to register
*/
class Register extends Component{
    state={username:'',email:'',password:''}
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
                SenZ
            </div>
            <br />
            <br />
            <br />
                <label>
                    Name:
                </label>
                <div className="ui input focus" style={{width:200}}>
                <input type="text"
                       name="username"
                       placeholder="Enter Username"
                       onChange={this.onChangeListener}
                       
                />     
                </div>  
                <br />
                <br />
                <label>
                    Email:
                </label>
                <div className="ui input focus" style={{width:200}}>
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
                   
                <input type="submit"
                       value="REGISTER"
                       className="ui inverted secondary button"
                       style={{width:200}}
                /> 
                <br />
                <br />
                <a href="/login" style={{marginLeft:15}}>Already have an account ?</a>      
                  
                
                

            </form>
            <div className="footer" style={{right:5,bottom:15}}>
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

export default Register;