import React from 'react';
import '../css/login.css';
import avatar from '../images/avt.JPG';
import Cv from './cv.js';
import axios from 'axios';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            isActive: false
        };
        this.login = this.login.bind(this);
    }
    componentWillMount() {
        // const axios = require('axios');   
    }
    async getAPI() {
        const result = await axios.post('https://uat-api.vexere.net/v1/oauth/token', {
            "grant_type": "client_credentials",
            "client_id": "5babac18-7774-4c00-837e-ce0be24f1ce0",
            "client_secret": "7bc97196-280c-4595-83fd-3da8a0d7d190"
        })
        return result
    }
    login() {
        //console.log(this.refs.username.value);
        var mail = document.getElementById("mail").value;
        var pass = document.getElementById("pass").value;
        if (mail === "vexere" && pass === "vxr2019") {
            this.getAPI()
                .then(data => {
                    console.log(data)
                    if (data.status === 200 || data.status === 201) {
                        this.setState({
                            isActive: true
                        })
                    }
                })

            // window.location.href = "cv";
        } else {
            alert("Username or Password không đúng!");
        }
        // if (mail === "vexere" && pass === "vxr2019") {
        //     axios.post('https://uat-api.vexere.net/v1/oauth/token', {
        //             "grant_type": "client_credentials",
        //             "client_id": "5babac18-7774-4c00-837e-ce0be24f1ce0",
        //             "client_secret": "7bc97196-280c-4595-83fd-3da8a0d7d190"
        //         })
        //         .then(function(response) {
        //             if (response != null) {
        //                 console.log(response.data);
        //                 this.setState({
        //                     isActive: true
        //                 });
        //             } else {
        //                 console.log("response null");
        //             }
        //         })
        //         .catch(function(error) {
        //             console.log('error is ', error);
        //         });
        //     // window.location.href = "cv";
        // } else {
        //     alert("Username or Password không đúng!");
        // }
    }
    render() {
        console.log(this.state);
        if (this.state.isActive) {
            return <Cv />
        }
        return (
            <div id="content">
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