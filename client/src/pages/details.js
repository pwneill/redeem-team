import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Card, CardHeader, CardBody } from "../components/Card";
import API from "../utils/API"
import { List, ListItem } from "../components/List";

let eventID = window.location.href;
eventID = eventID.replace("http://localhost:3000/details/", "");
console.log(eventID);

class Details extends Component {

    state = {
        atendees: [],
        BringController: "",
        HaveConsole: "",
        HaveController: "",
        HaveGame: ""
    }

    log = type => console.log.bind(console, type);

    componentDidMount = () => {
        API.getRegisters().then(res => {

            let resultArr = [];
            let BringController = 0;
            let HaveConsole = 0;
            let HaveController = 0;
            let HaveGame = 0;

            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].EventID === eventID) {
                    resultArr.push(res.data[i])
                }
            }

            this.setState({ atendees: resultArr });

            for (let j = 0; j < resultArr.length; j++) {
                if (resultArr[j].BringController) {
                    BringController++
                }
            }

            for (let k = 0; k < resultArr.length; k++) {
                if (resultArr[k].HaveConsole) {
                    HaveConsole++
                }
            }

            for (let l = 0; l < resultArr.length; l++) {
                if (resultArr[l].HaveController) {
                    HaveController++
                }
            }

            for (let m = 0; m < resultArr.length; m++) {
                if (resultArr[m].HaveGame) {
                    HaveGame++
                }
            }

            this.setState({ BringController: BringController });
            this.setState({ HaveConsole: HaveConsole });
            this.setState({ HaveController: HaveController });
            this.setState({ HaveGame: HaveGame });

            console.log(this.state.HaveConsole);

            console.log(this.state.atendees)

        }).catch(function (err) {
            console.log(err);
        })
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size={"md-12"}>
                        <Card id={"createHeaderCard"}>
                            <Container fluid>
                                <Row>
                                    <Col size={"md-12"}>
                                        <Card id={"createWordsCard"}>
                                            <CardHeader>
                                                <h1><strong>Gamers United</strong></h1>
                                                <h3 id="eventsbanner">Details for this Event</h3>
                                            </CardHeader>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </Card>
                        <Container fluid>
                            <Row>
                                <Col size={"md-12"}>
                                    <Card id={"createMainContainer"}>
                                        <CardBody>
                                            <Col size={"md-12"}>
                                                <List id={"createOverflow"}>
                                                    <ListItem key={"alsdkojfh"}>
                                                        <Card id={"createEventsCard"}>
                                                            <CardHeader>
                                                                <h3>Event Stats:</h3>
                                                            </CardHeader>
                                                            <CardBody>
                                                                <Container fluid>
                                                                    <Row>
                                                                        <Col size="md-4">
                                                                            <Card>
                                                                                <CardHeader>
                                                                                    <p className={"atendeeWords"}>How many are attending.</p>
                                                                                </CardHeader>
                                                                                <CardBody>
                                                                                    <p className={"atendeeWords"}>{this.state.atendees.length}</p>
                                                                                </CardBody>
                                                                            </Card>
                                                                        </Col>
                                                                        <Col size="md-4">
                                                                            <Card>
                                                                                <CardHeader>
                                                                                    <p className={"atendeeWords"}>People bringing their own controllers.</p>
                                                                                </CardHeader>
                                                                                <CardBody>
                                                                                    <p className={"atendeeWords"}>{this.state.HaveController}</p>
                                                                                </CardBody>
                                                                            </Card>
                                                                        </Col>
                                                                        <Col size="md-4">
                                                                            <Card>
                                                                                <CardHeader>
                                                                                    <p className={"atendeeWords"}>Estimated extra controllers.</p>
                                                                                </CardHeader>
                                                                                <CardBody>
                                                                                        <p className={"atendeeWords"}>{this.state.BringController}</p>
                                                                                </CardBody>
                                                                            </Card>
                                                                        </Col>
                                                                    </Row>
                                                                    <Row>
                                                                        <Col size="md-4">
                                                                            <Card>
                                                                                <CardHeader>
                                                                                    <p className={"atendeeWords"}>People bringing their own console.</p>
                                                                                </CardHeader>
                                                                                <CardBody>
                                                                                        <p className={"atendeeWords"}>{this.state.HaveConsole}</p>
                                                                                </CardBody>
                                                                            </Card>
                                                                        </Col>
                                                                        <Col size="md-4">
                                                                            <Card>
                                                                                <CardHeader>
                                                                                    <p className={"atendeeWords"}>People bringing their own copy of the game.</p>
                                                                                </CardHeader>
                                                                                <CardBody>
                                                                                        <p className={"atendeeWords"}>{this.state.HaveGame}</p>
                                                                                </CardBody>
                                                                            </Card>
                                                                        </Col>
                                                                        <Col size="md-4">
                                                                            <Card>
                                                                                <CardHeader>
                                                                                    <p className={"atendeeWords"}>Host of the event.</p>
                                                                                </CardHeader>
                                                                                <CardBody>
                                                                                        <p className={"atendeeWords"}>PlaceHolder</p>
                                                                                </CardBody>
                                                                            </Card>
                                                                        </Col>
                                                                    </Row>
                                                                </Container>
                                                            </CardBody>
                                                        </Card>
                                                    </ListItem>
                                                </List>
                                            </Col>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                        <Container fluid>
                            <Row>
                                <Col size={"md-12"}>
                                    <Card id={"createMainContainer"}>
                                        <CardBody>
                                            <Col size={"md-12"}>
                                                <List id={"createOverflow"}>
                                                    <ListItem key={"vzxo;cjkhifger"}>
                                                        <Card id={"createEventsCard"}>
                                                            <CardHeader>
                                                                <h3>Attendees:</h3>
                                                            </CardHeader>
                                                            {this.state.atendees.length ? (
                                                                <div>
                                                                    {this.state.atendees.map(register => (
                                                                        <Card id="maineventsCard">
                                                                            <CardHeader>
                                                                                <h5>{register.Name}</h5>
                                                                            </CardHeader>
                                                                            <CardBody>
                                                                                <Container fluid>
                                                                                    <Row>
                                                                                        <Col size="md-4">
                                                                                            <Card>
                                                                                                <CardHeader>
                                                                                                    <p className={"atendeeWords"}>Email</p>
                                                                                                </CardHeader>
                                                                                                <CardBody>
                                                                                                    <p className={"atendeeWords"}>{register.Email}</p>
                                                                                                </CardBody>
                                                                                            </Card>
                                                                                        </Col>
                                                                                        <Col size="md-4">
                                                                                            <Card>
                                                                                                <CardHeader>
                                                                                                    <p className={"atendeeWords"}>Phone</p>
                                                                                                </CardHeader>
                                                                                                <CardBody>
                                                                                                    <p className={"atendeeWords"}>{register.Phone}</p>
                                                                                                </CardBody>
                                                                                            </Card>
                                                                                        </Col>
                                                                                        <Col size="md-4">
                                                                                            <Card>
                                                                                                <CardHeader>
                                                                                                    <p className={"atendeeWords"}>Bringing a Controller?</p>
                                                                                                </CardHeader>
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
                                                                                            <Card>
                                                                                                <CardHeader>
                                                                                                    <p className={"atendeeWords"}>Bringing extra Controllers?</p>
                                                                                                </CardHeader>
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
                                                                                            <Card>
                                                                                                <CardHeader>
                                                                                                    <p className={"atendeeWords"}>Bringing a Console?</p>
                                                                                                </CardHeader>
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
                                                                                            <Card>
                                                                                                <CardHeader>
                                                                                                    <p className={"atendeeWords"}>Bringing Copy of Game?</p>
                                                                                                </CardHeader>
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
                                                        </Card>
                                                    </ListItem>
                                                </List>
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

export default Details;