import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import AuthServices from './AuthServices';

class NavBar extends Component{
    constructor()
    {
        super()
        this.Auth=new AuthServices();
    }
    handleLogout=()=>{
        this.Auth.logout();
        this.props.history.replace("/");
    }
    renderContent=()=>{
        if(!this.Auth.loggedIn())
        {
            return(
                <div>
                <Link to="/" >HOME</Link>
                <Link to="/register" >REGISTER</Link>
                <Link to="/login" >LOGIN</Link>
                </div>
            )
        }
        else{
            return(
                <div>
                <button onClick={this.handleLogout} >LOGOUT</button>
                <div>Hey,{this.Auth.getProfile().name}</div>
                </div>
            )
        }
    }
    render()
    {
        return <div>{this.renderContent()}</div>
    }
}

export default withRouter(NavBar)