import React from 'react';
import '../css/login.css';
import avatar from '../images/avt.JPG';
import Cv from './cv.js';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            isShow: true
        };
        this.login = this.login.bind(this);
    }

    login() {
        //console.log(this.refs.username.value);
        var mail = document.getElementById("mail").value;
        var pass = document.getElementById("pass").value;
        if (mail === "vexere" && pass === "vxr2019") {
            // window.location.href = "cv";
            return this.setState({
                isShow: false
            });
        } else {
            alert("Username or Password không đúng!");
        }
    }

    render() {
        console.log(this.state);
        if (this.state.isShow === false) {
            return <Cv />
        }
        return (
            <div id="wrapper">
                {/* Avatar */}
                <div className="avatar">
                  <img src={avatar} alt=""/>
                </div>
                <div className="content">
                  <form action="true">
                    <div className="username">
                      <i className="fa fa-user" />
                      <input id="mail" type="text" placeholder="Username" required defaultValue="vexere" ref="username" />
                    </div>
                    <div className="username">
                      <i className="fa fa-clipboard" />
                      <input id="pass" type="password" placeholder="**********" required defaultValue="vxr2019" ref="password" />
                    </div>
                    <input className="login" type="button" defaultValue="LOGIN" onClick={this.login} />
                    <div className="save">
                      <label>
                        <input className="checked" type="checkbox" defaultChecked="checked" name="remember" /> Remember me
                      </label>
                      <p><i>Forgot Password?</i></p>
                    </div>
                  </form>
                </div>
                <div className="footer">
                    Copyright Ⓒ  2018 Your Brand Name, Inc
                </div>
            </div>
        );
    }
}

export default Login;