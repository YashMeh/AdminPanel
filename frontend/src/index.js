import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';

//Including Components
import App from './components/App'

ReactDOM.render(<Router>
                        
                            <App />
                </Router>,
                document.querySelector("#root"));
