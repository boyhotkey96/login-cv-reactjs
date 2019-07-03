import React from 'react';
import './App.css';
import Login from './components/login.js';
import Cv from './components/cv.js';
import Pages from './components/pages.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
    render() {
    	return(
    		<Router>
    			<Route path="/" exact component={Login} />
    			<Route path="/pages" component={Pages} />
    		</Router>
    	);
    }
}

export default App;