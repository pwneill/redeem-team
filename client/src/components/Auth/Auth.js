import auth0 from "auth0-js";
// import history from "../../history.js"


class Auth {

    auth0 = new auth0.WebAuth({
        domain: 'rich-donovan.auth0.com',
        clientID: 'LHI8LEPW14lgTw6syHhIXfMhxMPPpRGU',
        redirectUri:  'http://localhost:3000/' || 'https://powerful-beyond-98279.herokuapp.com/',
        // audience: 'https://rich-donovan.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid profile'
    })

    
    login() {
        console.log("foo")
        this.auth0.authorize()
    }

    logout() {
        console.log("foo")
        this.auth0.logout({
            returnTo: 'https:localhost:3000',
            clientId: 'LHI8LEPW14lgTw6syHhIXfMhxMPPpRGU'
        })
    }

    getProfile() {
        console.log("foo")
        return this.profile;
    }

    isAuthenticated() {
        console.log("foo")
        return new Date().getTime() < this.expiresAt;
    }

    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.getAccessToken = this.getAccessToken.bind(this);
        this.getIdToken = this.getIdToken.bind(this);
        // this.getProfile = this.getProflie.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
    }

    handleAuthentication() {
        
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                console.log("foo")

                this.setSession(authResult);
            } else if (err) {
                console.log(err);
                alert(`Error: ${err.error}. Check the console for further details.`);
            }
        });
    }

    // getprofile(cb) {
    //     this.auth0.client.userInfo(this.accessToken, (err, profile) => {
    //         if (profile) {
    //             this.userProfile = profile;
    //         }
    //         cb(err, profile)
    //     })
    // }

    getAccessToken() {
        console.log("foo")
        return this.accessToken;
    }

    getIdToken() {
        console.log("foo")
        return this.idToken;
    }

}

const auth0client = new Auth();

export default auth0client;
