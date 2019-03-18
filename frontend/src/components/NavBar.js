import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import AuthServices from './AuthServices';
import './NavBar.css';

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
            return(
                <div id="cnav">
                <div id="navheading">SenZ</div>
                <button className="ui inverted red button" id="logout" onClick={this.handleLogout} >
                Logout<i className="sign out alternate icon"></i>
                </button>
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
    render()
    {
        return <div>{this.renderContent()}</div>
    }
}

export default withRouter(NavBar)