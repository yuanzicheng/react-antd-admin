import React from "react";
import {history} from "../router";

class Login extends React.Component {

    componentDidMount() {
        this.login()
    }

    render() {
        return (
            <div>
                Loading...
            </div>
        )
    }

    login() {
        sessionStorage.setItem('token', '1234567890');
        let redirect_url = this.props.location.state ? this.props.location.state.from.pathname : '/';
        console.log('redirect_url:', redirect_url);
        setTimeout(() => {
            history.push(redirect_url)
        }, 2000);

    }
}

export default Login;