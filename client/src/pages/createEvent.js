import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import fieldNames from "../utils/newEvent.json";
import Jumbotron from "../components/Jumbotron";
import Form from "react-jsonschema-form";
import API from "../utils/API"

const schema = fieldNames;

class createEvent extends Component {
  log = type => console.log.bind(console, type);

  onSubmit = ({formData}, e) => {
    API.saveEvent(formData);
    console.log("Data submitted: ",  formData)
  };

  render() {
    return (
      <Container fluid>
        <Jumbotron id={"eventsJumbotron"}>
          <h1><strong>Gamers United</strong></h1>
          <h3 id="eventsbanner">Add a New Event</h3>
        </Jumbotron>
        <div className="mb-5">
        <Row fluid>
          <Col size="md-6" offset="md-3">
            <Form
              safeRenderCompletion={true}
              schema={schema}
              onSubmit={this.onSubmit}
            />
          </Col>
        </Row>
        </div>
      </Container>
    );
  }
}

export default createEvent;
