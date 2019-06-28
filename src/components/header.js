import React from 'react';
import Login from './login.js';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: true
        }
    }
    logOut() {
        this.setState({
            isActive: false
        })
    }
    render() {
        if (!this.state.isActive) {
            return <Login />
        }
        return (
            <div id="header-cv">
                <button className="btn-logout" type="button" onClick={this.logOut.bind(this)}>Logout</button>
            </div>
        );
    }
}

export default Header;