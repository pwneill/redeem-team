import React, { Component } from "react"
import auth0client from './../components/Auth/Auth';


class signIn extends Component {


    render() {


        const auth = new auth0client();
        auth.login();

        return (
            <div>
                <h2>Sign in</h2>
            </div>
        )
    }
}

export default signIn