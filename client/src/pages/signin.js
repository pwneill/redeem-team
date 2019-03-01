import React, { Component } from "react"
import Auth from '../components/Auth/Auth';


class signIn extends Component {


    render() {


        const auth = new Auth();
        auth.login();

        return (
            <div>
                <h2>Sign in</h2>
            </div>
        )
    }
}

export default signIn