import React, { Component } from 'react';
import AuthService from './AuthServices';

/*
This is the higher order component to save other components from
unauthenticated users
*/

export default function withAuth(AuthComponent) {
    const Auth = new AuthService();
    return class AuthWrapped extends Component {
        constructor() {
            super();
            this.state = {
                user: null
            }
        }
        componentWillMount() {
            //Check if user is logged in
            if (!Auth.loggedIn()) {
                this.props.history.replace('/login')
            }
            else {
                try {
                    //Get the user profile
                    const profile = Auth.getProfile()
                    //Change the state
                    this.setState({
                        user: profile.name
                    })
                }
                //In case of failure logout the user
                catch(err){
                    Auth.logout()
                    this.props.history.replace('/login')
                }
            }
        }
        render() {
            if (this.state.user) {
                return (
                    //Render component with all it's props
                    <AuthComponent {...this.props}  />
                )
            }
            else {
                return null
            }
        }
      }
      
}