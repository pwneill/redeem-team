import React, { Component } from "react"
// import Auth0Lock from "auth0-lock"


class signIn extends Component {
    
    state = {
        // showLock: this.showLock.bind(this)
    }

    showLock = () => {
        this.props.lock.show()
    }
    
    render() {
        
        
        
        // // Initializing our Auth0Lock
        // const lock = new Auth0Lock(
        //     'LHI8LEPW14lgTw6syHhIXfMhxMPPpRGU',
        //     'C9n7DAJuAmBfxvzpoRjWbpohSNDMcVF-qfmq5A0pQKVGHwcFUpyVbSfsPwvUZ9bt'
        // );

        // // Listening for the authenticated event
        // lock.on("authenticated", function (authResult) {
        //     // Use the token in authResult to getUserInfo() and save it to localStorage
        //     lock.getUserInfo(authResult.accessToken, function (error, profile) {
        //         if (error) {
        //             console.log(error)
        //             return;
        //         }

        //         document.getElementById('nick').textContent = profile.nickname;

        //         localStorage.setItem('accessToken', authResult.accessToken);
        //         localStorage.setItem('profile', JSON.stringify(profile));
        //     });
        // });

        // document.getElementById('btn-login').addEventListener('click', function() {
            
        //   });


        

        return (
            <div className="loginBox">
            <button type="button" class="btn btn-warning" onClick={this.showLock}>Sign in</button>
            </div>
        )
    }
}

export default signIn