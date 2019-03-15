import React,{Component} from 'react';
import Register from './Register';
import Login from './Login';
import {Route,Switch,withRouter} from 'react-router-dom';
import Home from './Home';
import AuthServices from './AuthServices';
import NavBar from './NavBar';
import DashBoard from './DashBoard';
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
            <NavBar />    
            <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/register" 
                     render={(props) => <Register {...props} onSubmit={this.handleSubmitRegister} />} />
                     <Route path="/login" 
                     render={(props) => <Login {...props} onSubmit={this.handleSubmitLogin} />} />
                     <Route path="/dashboard" component={DashBoard} />
            </Switch>
            </div>
        )
    }
}

export default withRouter(App);