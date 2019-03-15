import React,{Component} from 'react';
import withAuth from './withAuth';

class DashBoard extends Component{
    render()
    {
        return <div>I AM THE DASJ</div>
    }
}

export default withAuth(DashBoard)