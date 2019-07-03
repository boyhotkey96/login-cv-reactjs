import React from 'react';
import '../css/page.css';
import Cv from './cv.js';
import Baitap from './baitap.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './login.js';

class Pages extends React.Component {
    addClass() {
        this.refs.el.classList.toggle('active');
        // this.refs.el.slideToggle();
    }

    trangChu() {
    	window.location.href = '/';
    }
    // active1 = event1 => event1.target.classList.add("isActive");
    render() {
        return (
            <Router>
	            <nav>
			        <div className="toggle">
			        	<div className="toggle-title">
		        			<h1 onClick={this.trangChu.bind(this)}>Guest</h1>
		        		</div>
		          		<i className="fa fa-bars menu2" onClick={this.addClass.bind(this)} />
			        </div>
			        <ul ref="el">
			        	<div className="ul-guest">
							<h1 onClick={this.trangChu.bind(this)}>Guest</h1>
			        	</div>
			        	<li>
		          			<Link to="/pages/cv">CV</Link>
			        	</li>
		          		<li>
			          		<Link to="/pages/baitap">Bài tập</Link>
			          	</li>
			        </ul>
			    </nav>
				
				<Route path="/" exact component={Login} />
				<Route path="/pages/cv" render={props => <Cv {...props} isShow={true} />} />
				<Route path="/pages/baitap" render={props => <Baitap {...props} isShow={true} />} />
			</Router>
        );
    }
}

export default Pages;