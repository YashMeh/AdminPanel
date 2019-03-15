import axios from 'axios';
import decode from 'jwt-decode';

class AuthServices{
    
    register=async (name,email,password)=>{
        return axios.post("http://localhost:8080/api/register",{
            name:name,
            email:email,
            password:password
        }).then((res)=>{
            //Do something with the response
            console.log(res);
            
        }).catch((err)=>{
            throw err;
        })
    }
    login=async (email,password)=>{
        return axios.post("http://localhost:8080/api/login",{
            email:email,
            password:password
            
        }).then((res)=>{
            this.setToken(res.data.token)
        })
    }
    setToken=(idToken)=> {
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken)
    }
    loggedIn=()=> {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken() // GEtting token from localstorage
        return !!token && !this.isTokenExpired(token) // handwaiving here
    }
    isTokenExpired=(token)=> {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) { // Checking if token is expired.
                return true;
            }
            else
                return false;
        }
        catch (err) {
            return false;
        }
    }
    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token')
    }
    logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
    }

    getProfile() {
        // Using jwt-decode npm package to decode the token
        return decode(this.getToken());
    }


    
}

export default AuthServices