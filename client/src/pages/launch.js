import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, FormBtn } from "../components/Form";
import { Card, CardBody } from "../components/Card";
import { withRouter } from 'react-router-dom';


class Launch extends Component {


    render() {

        const Events = withRouter(({ history }) => (
            <a href="" onClick={(e) => {
                e.preventDefault();
                history.push('/events');
            }}><Card id={"eventsCard"}>
                    <CardBody>
                        <h1>Check out local events!</h1>
                    </CardBody>
                </Card></a>
        ))


        const Create_event = withRouter(({ history }) => (
            <a href="" onClick={(e) => {
                e.preventDefault();
                history.push('/create_event');
            }}><Card id={"createCard"}>
                    <CardBody>
                        <h1>Create a new event!</h1>
                    </CardBody>
                </Card></a>
        ))

        const News = withRouter(({ history }) => (
            <a href="" onClick={(e) => {
                e.preventDefault();
                history.push('/news');
            }}><Card id={"newsCard"}>
                    <CardBody>
                        <h1>Get all of your Esports News!</h1>
                    </CardBody>
                </Card></a>
        ))

        return (
            <Card id={"launchCard"}>
                <CardBody>
                    <Container fluid>
                        <Row>
                            <Col size={"md-4"}>
                                <Events></Events>
                            </Col>
                            <Col size={"md-4"}>
                                <News></News>
                            </Col>
                            <Col size={"md-4"}>
                                <Create_event></Create_event>
                            </Col>
                        </Row>
                    </Container>
                </CardBody>
            </Card>

        )
    }
}

export default withRouter(Launch);