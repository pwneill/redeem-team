import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";


class viewEvent extends Component {
    state = {
        event: {}
    };
  componentDidMount() {
    var id = this.props.match.params.id;
    console.log(id)
    this.loadEvent(id);

  }
  loadEvent = (id) => {
    API.getEvent(id)
      .then(res => {
        console.log(res.data);
        this.setState({ event: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row fluid>
          <Col offset="md-5">
            <h2>{this.state.event.Name}</h2>
          </Col>
        </Row>
        <Row fluid>
          <Col size="md-5">
            {this.state.event.LocationName}<br />
            {this.state.event.Game} / {this.state.event.Console} <br />
            {this.state.event.Description}
          </Col>
          <Col size="md-5" offset="md-2">
            {this.state.event.Q1}<br />
            {this.state.event.Q2}<br />
          </Col>
        </Row>
        <span class="border-top"></span>
        <Row>
          <Col>
          <u>Attendees:</u><br />

          </Col>
        </Row>
      </Container>
    );
  }
}

export default viewEvent;
