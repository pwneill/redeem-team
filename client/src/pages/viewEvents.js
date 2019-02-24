import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, FormBtn } from "../components/Form";
import { Card, CardHeader, CardBody } from "../components/Card";

class Events extends Component {
    state = {
        Event: []
    };
    componentDidMount(){
        this.loadEvents ();
    }
    loadEvents = () => {
        API.getEvents()
        .then(res => this.setState({Event: res.data}))
        .catch(err => console.log(err));
    };
    render() {
        return (
            <Container fluid>
                <Jumbotron id={"eventsJumbotron"}>
                    <h1><strong>Gamers United</strong></h1>
                    <h3>Events in your Area</h3>
                </Jumbotron>
                {/* Might experiment here with List */}
                <Row fluid>
                    <Col size="md-2" offset="md-1">
                        <Card>
                            <img src="https://via.placeholder.com/150"></img>
                        </Card>
                    </Col>
                    <Col size="md-6" offset="md-1">
                        <Card key={Event.id}>
                            <h1>{Event.name}</h1>
                            <h2>{Event.address1}</h2>
                            <h3>{Event.console}</h3>
                        </Card>
                    </Col>
                    <Col size="md-2" offset="md-1" style="inline-block">
                    <img src="https://via.placeholder.com/150"></img>
                    </Col>
                    
                </Row>
                <Row fluid>
                <Card size="md-11" offset="md-1">
                <h1 className="text-center">{Event.description}</h1>
                </Card>
                </Row>
            </Container>
        )
    }
}

export default Events;