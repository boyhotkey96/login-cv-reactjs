import React from 'react';
import '../css/page.css';
import Cv from './cv.js';
import Header from './header.js';
import Baitap from './baitap.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Pages extends React.Component {
    addClass() {
        this.refs.el.classList.toggle('active');
        // this.refs.el.slideToggle();
    }

    // active1 = event1 => event1.target.classList.add("isActive");
    render() {
        return (
            <Router>
	            <nav>
			        <div className="toggle">
			        	<div className="toggle-title">
		        			<h1>Guest</h1>
		        		</div>
		          		<i className="fa fa-bars menu2" onClick={this.addClass.bind(this)} />
			        </div>
			        <ul ref="el">
			        	<div className="ul-guest">
							<h1>Guest</h1>
			        	</div>
			        	<li>
		          			<Link to="/pages/cv">CV</Link>
			        	</li>
		          		<li>
			          		<Link to="/pages/baitap">Bài tập</Link>
			          	</li>
			        </ul>
			    </nav>
				
				<Route path="/pages/cv" render={props => <Cv {...props} isShow={true} />} />
				<Route path="/pages/baitap" render={props => <Baitap {...props} isShow={true} />} />
			</Router>
        );
    }
}

export default Pages;