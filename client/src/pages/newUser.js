import React, { Component } from 'react';


class newUser extends Component {

    render() {

        const inputStyle = {
            "margin": "40px"
        }

        const regularInputWidth = {
            "width": "450px"
        }

        const wideInputWidth = {
            "width": "975px"
        }

        const headerStyle = {
            "color": "#a9a9a9"
        }

        return (
            <div>
                <h1>New User</h1>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 center-block text-center">
                            <h2 style={headerStyle} className="text-center">Create New User</h2>
                        </div>
                    </div>
                    <br />

                    <div className="row">
                        <div style={inputStyle} ClassName="col-md-6">
                            <input style={regularInputWidth} type="text" aria-label="First Name" className="form-control" placeholder="First Name"></input>
                        </div>
                        <div style={inputStyle} ClassName="col-md-6">
                            <input style={regularInputWidth} type="text" aria-label="Last Name" className="form-control" placeholder="Last Name"></input>
                        </div>

                    </div>

                    <div className="row">
                        <div style={inputStyle} ClassName="col-md-12">
                            <input style={wideInputWidth} type="text" aria-label="Email Address" className="form-control" placeholder="Email Address"></input>
                        </div>


                    </div>

                    <div className="row">
                        <div style={inputStyle} ClassName="col-md-12">
                            <input style={wideInputWidth} type="text" aria-label="Phone Number" className="form-control" placeholder="Phone Number"></input>
                        </div>

                    </div>

                    <div className="row">
                        <div style={inputStyle} ClassName="col-md-6">
                            <input style={regularInputWidth} type="text" aria-label="Preferred Gaming System" className="form-control" placeholder="Preferred Gaming System"></input>
                        </div>
                        <div style={inputStyle} ClassName="col-md-6">
                            <input style={regularInputWidth} type="text" aria-label="Favorite Game" className="form-control" placeholder="Favorite Game"></input>
                        </div>

                    </div>

                    <div className="row">
                        <div style={inputStyle} ClassName="col-md-12">
                            <input style={wideInputWidth} type="text" aria-label="Profile Picture" className="form-control" placeholder="Profile Picture - Paste a URL of your Photo"></input>
                        </div>

                    </div>

                    <div className="row">
                        <div style={inputStyle} ClassName="col-md-6">
                            <input style={regularInputWidth} type="text" aria-label="Enter Password" className="form-control" placeholder="Enter Password"></input>
                        </div>
                        <div style={inputStyle} ClassName="col-md-6">
                            <input style={regularInputWidth} type="text" aria-label="Re-Enter Password" className="form-control" placeholder="Re-Enter Password"></input>
                        </div>

                    </div>

                    <br />
                    <br />

                    <div className="row">
                        <div className="col-md-4 center-block">

                        </div>

                        <div className="col-md-4 center-block">
                            <button type="button" class="btn btn-secondary">Create New User</button>
                        </div>

                        <div className="col-md-4 center-block">
                        </div>
                    </div>

                </div>

                <br />
                <br />

            </div>
        )
    }
}

export default newUser

