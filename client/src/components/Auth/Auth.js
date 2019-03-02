import auth0 from "auth0-js";


export default class Auth {

    auth0 = new auth0.WebAuth({
        domain: 'rich-donovan.auth0.com',
        clientID: 'LHI8LEPW14lgTw6syHhIXfMhxMPPpRGU',
        redirectUri: 'http://localhost:3000/' || 'https://sheltered-island-57421.herokuapp.com/',
        responseType: 'token id_token',
        scope: 'openid profile'
    })

    login() {
        this.auth0.authorize()
    }

    constructor() {
        this.login = this.login.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.getAccessToken = this.getAccessToken.bind(this);
        this.getIdToken = this.getIdToken.bind(this);
        // this.getProfile = this.getProflie.bind(this);
    }

    handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
            } else if (err) {
                console.log(err);
                alert(`Error: ${err.error}. Check the console for further details.`);
            }
        });
    }

    // getProfile(cb) {
    //     this.auth0.client.userInfo(this.accessToken, (err, profile) => {
    //         if (profile) {
    //             this.userProfile = profile;
    //         }
    //         cb(err, profile)
    //     })
    // }

    getAccessToken() {
        return this.accessToken;
      }
    
      getIdToken() {
        return this.idToken;
      }

}
