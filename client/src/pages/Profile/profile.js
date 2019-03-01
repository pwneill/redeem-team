import React, { Component } from 'react';

class Profile extends Component {

  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
  render() {
    const { profile } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>User Profile</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9">
            <h2>{profile.name}</h2>
          </div>
          <div className="col-md-3">
            <img src={profile.picture} alt="profile" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h3>{profile.nickname}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;