import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

//Including Components
import App from './components/App'

ReactDOM.render(<Router>
                        
                            <App />
                </Router>,
                document.querySelector("#root"));
