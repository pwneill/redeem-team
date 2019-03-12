import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Card, CardHeader, CardBody } from "../components/Card";
import API from "../utils/API"
import { List, ListItem } from "../components/List";
import auth0Client from "../components/Auth/Auth"

class User extends Component {

    state = {
        user: [{
            userName: auth0Client.getProfile().name
        }]
    }

    componentDidMount = () => {
        API.getUser().then(res => {
            console.log(res)
            let isUser = false;
            
            for(let i = 0; i < res.data.length; i++) {
                // console.log(res.data[i] + "  " + this.state.user.userName[0])
                if (res.data[i].userName === this.state.user[0].userName) {
                    isUser = true
                    console.log("hello")
                }
            }

            console.log(isUser);

        //     if (isUser === false) {
        //         console.log(this.state.user[0]);
        //         API.saveUser(this.state.user[0]).then(function(res) {
        //             console.log("saved");
        //         }).catch(function(err) {
        //             console.log(err)
        //         })
        //         }
        //     }
        })
    }

    render() {
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
                                                <List id={"detailsOverflow"}>
                                                    <ListItem key={"alsdkojfh"}>
                                                        <Card id={"detailsEventsCard"}>
                                                            
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
                                    <Card id={"detailsMainContainer"}>
                                        <CardBody>
                                            <Col size={"md-12"}>
                                                <List id={"detailsOverflow"}>
                                                    <ListItem key={"vzxo;cjkhifger"}>
                                                        <Card id={"detailsEventsCard"}>
                                                            
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


export default User;