import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import auth0Client from './components/Auth/Auth';

class Callback extends Component {
    async componentDidMount() {
        console.log("Mounted")
        await auth0Client.handleAuthentication();
        this.props.history.replace('/');
        
        
        if (this.props.location.pathname === '/callback') return;
        try {
            console.log("Silent Auth shit hits")
            await auth0Client.silentAuth();
            this.forceUpdate();
        } catch (err) {
            if (err.error !== 'login_required') console.log(err.error)
        }
        
    }
    render() {
        return (
            <p>Loading profile...</p>
        );
    }
}

export default withRouter(Callback);