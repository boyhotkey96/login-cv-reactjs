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
        
        console.log(this.props.isShow);
        let elm = null;
        if (this.props.isShow) {
            elm = "";
        } else {
            elm =   <div id="header-cv">
                        <button className="btn-logout" type="button" onClick={this.logOut.bind(this)}>Logout</button>
                    </div>;
        }
        // console.log(this.props.isShow);
        return (
            <div>  
                {elm}
            </div>
        );
    }
}

export default Header;