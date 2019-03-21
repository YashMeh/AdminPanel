import React,{Component} from 'react';
import Register from './userComponents/Register';
import Login from './userComponents/Login';
import {Route,Switch,withRouter} from 'react-router-dom';
import AuthServices from './AuthServices/AuthServices';
import DashBoard from './DashBoard';
import Project from './projectComponents/Project';
import Error from './Error'
import DeleteProjects from './projectComponents/DeleteProjects';

class App extends Component{
   constructor(){
        super()
        this.Auth=new AuthServices();
    }
    handleSubmitRegister=(user)=>{
        this.Auth.register(user.username,user.email,user.password)
        .then((res)=>{
            this.props.history.replace("/login");
        })        
        
    }
    handleSubmitLogin=(user)=>{
        this.Auth.login(user.email,user.password)
        .then((res)=>{
            this.props.history.replace("/dashboard");
        })        
        
    }
    render()
    {
        return (
            <div>
            <Switch>
                    <Route exact path="/" 
                     render={(props) => <Register {...props} onSubmit={this.handleSubmitRegister} />} />
                    <Route exact path="/register" 
                     render={(props) => <Register {...props} onSubmit={this.handleSubmitRegister} />} />
                     <Route exact path="/login" 
                     render={(props) => <Login {...props} onSubmit={this.handleSubmitLogin} />} />
                     <Route exact path="/dashboard" component={DashBoard} />
                     <Route exact path="/device/:projectId" component={Project} />
                     <Route exact path="/err" component={Error} />
                     <Route exact path="/project/:userId/delete/:projectId" component={DeleteProjects} />
                     
            </Switch>
            </div>
        )
    }
}

export default withRouter(App);