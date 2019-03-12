import auth0 from "auth0-js";



class Auth {
    accessToken;
    tokenRenewalTimeout;
    expiresAt;
    idToken;

    auth0 = new auth0.WebAuth({
        domain: 'rich-donovan.auth0.com',
        clientID: 'LHI8LEPW14lgTw6syHhIXfMhxMPPpRGU',
        redirectUri: 'http://localhost:3000/callback',
        audience: 'https://rich-donovan.auth0.com/userinfo',
        responseType: 'id_token',
        scope: 'openid profile'
    });

    // 'https://powerful-beyond-98279.herokuapp.com/callback' ||

    constructor() {


        this.scheduleRenewal();

        this.getProfile = this.getProfile.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.signIn = this.signIn.bind(this);
        this.logout = this.logout.bind(this);
        this.renewSession = this.renewSession.bind(this);
        this.getIdToken = this.getIdToken.bind(this);
        this.getAccessToken = this.getAccessToken.bind(this);
        this.scheduleRenewal = this.scheduleRenewal.bind(this)
    }

    signIn() {
        this.auth0.authorize();
    }

    handleAuthentication() {
        console.log("handleAuthentication Hit")
        return new Promise((resolve, reject) => {
            this.auth0.parseHash((err, authResult) => {
                if (err) return reject(err);
                if (!authResult || !authResult.idToken) {
                    return reject(err);
                }
                this.setSession(authResult);
                resolve();
            });
        })
    }

    getAccessToken() {
        return this.accessToken;
    }

    getIdToken() {
        console.log(this.idToken)
        return this.idToken;
    }

    getExpiration() {
        return new Date(this.expiresAt);
      }

      isAuthenticated() {
        let expiresAt = this.expiresAt
        // let thing = new Date().getTime();
        // let response = (thing < this.expiresAt);
        return new Date().getTime() < expiresAt;
    }

    setSession(authResult) {
        console.log(authResult)
        localStorage.setItem('isLoggedIn', 'true')
        // let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
        this.accessToken = authResult.accessToken
        this.idToken = authResult.idToken;
        this.profile = authResult.idTokenPayload;
        // this.expiresAt = expiresAt
        this.expiresAt = authResult.idTokenPayload.exp * 1000;
        this.scheduleRenewal()

    }

    renewSession() {
        console.log("renew session hit")
        this.auth0.checkSession({}, (err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
            } else if (err) {
                this.logout()
                console.log(err)
                alert(`Could not get a new token (${err.error}: ${err.errorDescription})`)
            }
        })
    }

    scheduleRenewal() {
        let expiresAt = this.expiresAt;
        const timeout = expiresAt - Date.now();
        console.log(timeout)
        if (timeout > 0) {
            this.tokenRenewalTimeout = setTimeout(() => {
                console.log(this.tokenRenewalTimeout)
                this.renewSession()
            }, timeout)
        }
    }

    logout() {

        this.auth0.logout({
            returnTo: 'https://powerful-beyond-98279.herokuapp.com/',
            clientID: 'LHI8LEPW14lgTw6syHhIXfMhxMPPpRGU'
        })
        clearTimeout(this.tokenRenewalTimeout)
    }

    getProfile() {
        return this.profile;
    }

    getExpiryDate() {
        return JSON.stringify(new Date(this.expiresAt))
    }

    silentAuth() {
        return new Promise((resolve, reject) => {
            this.auth0.checkSession({}, (err, authResult) => {
                if (err) return reject(err);
                console.log("SilentAuth is hit")
                this.setSession(authResult);
                resolve();
            })
        })
    }


}

const auth0Client = new Auth();

export default auth0Client;


