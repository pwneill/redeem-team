import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import fieldNames from "../utils/newEvent.json";
import Jumbotron from "../components/Jumbotron";
import Form from "react-jsonschema-form";
import API from "../../../routes/api"

const schema = fieldNames;

class createEvent extends Component {
  log = type => console.log.bind(console, type);

  onSubmit = ({formData}, e) => {
    API.post("/events", formData);
    console.log("Data submitted: ",  formData)
  };

  render() {
    return (
      <Container fluid>
        <Jumbotron id={"eventsJumbotron"}>
          <h1>App Name</h1>
          <h3>Add a New Event</h3>
        </Jumbotron>
        <Row fluid>
          <Col size="md-6" offset="md-3">
            <Form
              safeRenderCompletion={true}
              schema={schema}
              onSubmit={this.onSubmit}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default createEvent;
