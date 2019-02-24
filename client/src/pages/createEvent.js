import React, { Component } from "react";
import { Input, FormBtn } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
import fieldNames from "./newEvent.json";
import Jumbotron from "../components/Jumbotron";

class createEvent extends Component {
  state = {
    fieldNames
  };

  render() {
    return (
      <Container fluid>
        <Jumbotron id={"eventsJumbotron"}>
          <h1><strong>Gamers United</strong></h1>
          <h3 id="eventsbanner">Add a New Event</h3>
        </Jumbotron>
        <Row fluid>
          <Col size="md-9" offset="md-3">
            <form className="mb-5">
              {this.state.fieldNames.map(question => (
                <Input
                  key={question.id}
                  id={question.id}
                  name={question.name}
                />
              ))}
              <FormBtn>Submit</FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default createEvent;
