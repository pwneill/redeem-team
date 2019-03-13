import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Card, CardHeader, CardBody } from "../components/Card";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import auth0Client from "../components/Auth/Auth";
import Button from "react-bootstrap/Button";
import { withRouter } from 'react-router-dom';
import DeleteBtn from "../components/DeleteBtn";

class User extends Component {

    state = {
        user: [{
            userName: auth0Client.getProfile().name
        }],
        events: [],
        register: []
    }

    componentDidMount = () => {
        this.loadEvents();
        this.loadRegister();
    }

    loadEvents = () => {
        API.getEvents()
            .then(res => {
                let resultArr = [];
                console.log(res);
                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i].user === this.state.user[0].userName) {
                        resultArr.push(res.data[i]);
                    }
                }

                this.setState({ events: resultArr });

                console.log(this.state.events)
            })
            .catch(err => console.log(err));
    };

    loadRegister = () => {
        API.getRegisters()
            .then(response => {
                API.getEvents().then(res => {
                    let registerArr = [];

                    for (let i = 0; i < response.data.length; i++) {
                        if (response.data[i].user === this.state.user[0].userName) {
                            registerArr.push(response.data[i]);
                            for (let j = 0; j < res.data.length; j++) {
                                for (let k = 0; k < registerArr.length; k++) {
                                    if (res.data[j]._id === registerArr[k].EventID) {
                                        registerArr[k].eventName = res.data[j].Name
                                    }
                                }
                            }
                        }
                    }

                    this.setState({ register: registerArr });

                    console.log(registerArr)
                })
            })
    }

    deleteEvent = (id) => {
        API.deleteEvent(id)
            .then(function () {
                console.log("item deleted")
                alert("This Event has been deleted. The changes made will not relect on this page until exiting the user account page.")
            })
    }

    render() {

        const MoreDetails = withRouter(({ history }, event) => (
            <Button href="" className="float-left btn btn-dark" onClick={(e) => {
                e.preventDefault();
                let destinationId = e.target.parentElement.parentElement.firstChild.firstChild.id
                history.push(`/details/${destinationId}`)
            }}>See More Details</Button>
        ))

        const Register = withRouter(({ history }, event) => (
            <Button href="" className="float-right btn btn-dark" onClick={(e) => {
                e.preventDefault();
                let destinationId = e.target.parentElement.parentElement.firstChild.firstChild.id
                history.push(`/register/${destinationId}`)
            }}>Register Here</Button>
        ))

        return (
            <Container fluid>
                <Row>
                    <Col size={"md-12"}>
                        <Card id={"detailsHeaderCard"}>
                            <Container fluid>
                                <Row>
                                    <Col size={"md-12"}>
                                        <Card id={"detailsWordsCard"}>
                                            <CardHeader>
                                                <h1><strong>Gamers United</strong></h1>
                                                <h3 id="eventsbanner">{auth0Client.getProfile().name}</h3>
                                            </CardHeader>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </Card>
                        <Container fluid>
                            <Row>
                                <Col size={"md-12"}>
                                    <Card id={"detailsMainContainer"}>
                                        <CardBody>
                                            <Col size={"md-12"}>
                                                <Card id="maineventsCard">
                                                    <CardHeader>
                                                        <h3>User Events</h3>
                                                    </CardHeader>
                                                </Card>
                                                {this.state.events.length ? (
                                                    <List id={"viewOverflow"}>
                                                        {this.state.events.map(event => (
                                                            <ListItem key={event._id} className="mt-2">
                                                                <Card id="maineventsCard">
                                                                    <CardBody>
                                                                        <Row>
                                                                            <Col size="md-3">
                                                                                <img src={event.ImgSrc} alt={event.ImgSrc} width="100%" length="100%" />
                                                                            </Col>
                                                                            <Col size="md-6">
                                                                                <div className="text-center">
                                                                                    <strong>
                                                                                        {event.Name}<br />
                                                                                        on {event.Date}<br />
                                                                                        at {event.LocationName} <br />
                                                                                        {event.AddressLine1}<br />
                                                                                        {event.AddressLine2}<br />
                                                                                        {event.City}<br />
                                                                                        {event.State}<br />
                                                                                        {event.Zip}<br />
                                                                                        {event.Game}<br />
                                                                                        {event.Console}<br />
                                                                                    </strong>
                                                                                </div>
                                                                                <br />
                                                                            </Col>
                                                                            <Col size="md-3">{event.mapSrc}</Col>

                                                                        </Row>
                                                                        <Row fluid>
                                                                            <Col>
                                                                                <div id={event._id} className="text-center">
                                                                                    {event.Description}
                                                                                </div>
                                                                                <br />
                                                                            </Col>
                                                                            <Col>
                                                                                <MoreDetails></MoreDetails>
                                                                                <Register></Register>
                                                                                <DeleteBtn onClick={this.deleteEvent(event._id)}></DeleteBtn>
                                                                            </Col>
                                                                        </Row>
                                                                    </CardBody>
                                                                </Card>
                                                            </ListItem>))}
                                                    </List>
                                                ) : (
                                                        <Card>
                                                            <h3 id="eventsbanner">No Results to Display</h3>
                                                        </Card>
                                                    )}
                                            </Col>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                        <Container fluid>
                            <Row>
                                <Col size={"md-12"}>
                                    <Card id={"detailsMainContainer"}>
                                        <CardBody>
                                            <Col size={"md-12"}>
                                                {this.state.register.length ? (
                                                    <div>
                                                        {this.state.register.map(register => (
                                                            <Card id="mainDetailsCard">
                                                                <CardHeader>
                                                                    <h5>{register.eventName}</h5>
                                                                </CardHeader>
                                                                <CardBody>
                                                                    <Container fluid>
                                                                        <Row>
                                                                            <Col size="md-4">
                                                                                <Card className={"statsTitle"}>
                                                                                    <CardBody>
                                                                                        <p className={"atendeeWords"}>Email</p>
                                                                                    </CardBody>
                                                                                </Card>
                                                                                <Card className={"statsTitle"}>
                                                                                    <CardBody>
                                                                                        <p className={"atendeeWords"}>{register.Email}</p>
                                                                                    </CardBody>
                                                                                </Card>
                                                                            </Col>
                                                                            <Col size="md-4">
                                                                                <Card className={"statsTitle"}>
                                                                                    <CardBody>
                                                                                        <p className={"atendeeWords"}>Phone</p>
                                                                                    </CardBody>
                                                                                </Card>
                                                                                <Card className={"statsTitle"}>
                                                                                    <CardBody>
                                                                                        <p className={"atendeeWords"}>{register.Phone}</p>
                                                                                    </CardBody>
                                                                                </Card>
                                                                            </Col>
                                                                            <Col size="md-4">
                                                                                <Card className={"statsTitle"}>
                                                                                    <CardBody>
                                                                                        <p className={"atendeeWords"}>Bringing a Controller?</p>
                                                                                    </CardBody>
                                                                                </Card>
                                                                                <Card className={"statsTitle"}>
                                                                                    <CardBody>
                                                                                        {register.HaveController ? (
                                                                                            <p className={"atendeeWords"}>Yes</p>
                                                                                        ) : (
                                                                                                <p className={"atendeeWords"}>No</p>
                                                                                            )}
                                                                                    </CardBody>
                                                                                </Card>
                                                                            </Col>
                                                                        </Row>
                                                                        <Row>
                                                                            <Col size="md-4">
                                                                                <Card className={"statsTitle"}>
                                                                                    <CardBody>
                                                                                        <p className={"atendeeWords"}>Bringing extra Controllers?</p>
                                                                                    </CardBody>
                                                                                </Card>
                                                                                <Card className={"statsTitle"}>
                                                                                    <CardBody>
                                                                                        {register.BringController ? (
                                                                                            <p className={"atendeeWords"}>Yes</p>
                                                                                        ) : (
                                                                                                <p className={"atendeeWords"}>No</p>
                                                                                            )}
                                                                                    </CardBody>
                                                                                </Card>
                                                                            </Col>
                                                                            <Col size="md-4">
                                                                                <Card className={"statsTitle"}>
                                                                                    <CardBody>
                                                                                        <p className={"atendeeWords"}>Bringing a Console?</p>
                                                                                    </CardBody>
                                                                                </Card>
                                                                                <Card className={"statsTitle"}>
                                                                                    <CardBody>
                                                                                        {register.HaveConsole ? (
                                                                                            <p className={"atendeeWords"}>Yes</p>
                                                                                        ) : (
                                                                                                <p className={"atendeeWords"}>No</p>
                                                                                            )}
                                                                                    </CardBody>
                                                                                </Card>
                                                                            </Col>
                                                                            <Col size="md-4">
                                                                                <Card className={"statsTitle"}>
                                                                                    <CardBody>
                                                                                        <p className={"atendeeWords"}>Bringing Copy of Game?</p>
                                                                                    </CardBody>
                                                                                </Card>
                                                                                <Card className={"statsTitle"}>
                                                                                    <CardBody>
                                                                                        {register.HaveGame ? (
                                                                                            <p className={"atendeeWords"}>Yes</p>
                                                                                        ) : (
                                                                                                <p className={"atendeeWords"}>No</p>
                                                                                            )}
                                                                                    </CardBody>
                                                                                </Card>
                                                                            </Col>
                                                                        </Row>
                                                                    </Container>
                                                                </CardBody>
                                                            </Card>
                                                        ))}
                                                    </div>
                                                ) : (
                                                        <Card>
                                                            <h3 id="eventsbanner">No Results to Display</h3>
                                                        </Card>
                                                    )}
                                            </Col>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default User;