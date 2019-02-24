import React, { Component } from "react";
import { Input, FormBtn } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
import fieldNames from "../utils/newEvent.json";
import Jumbotron from "../components/Jumbotron";

class createEvent extends Component {
  state = {
    fieldNames,
    inputvalue: "",
    Name: "",
    AddressLine1: "",
    AddressLine2: "",
    City: "",
    State: "",
    Game: "",
    Console: "",
    Description: "",
    ImgSrc: "",
    Q1: "",
    Q2: "",
    Limit: ""
  };

  // constructor() {
  //   super();
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
    console.log(this.state.Name)

};


  render() {
    return (
      <Container fluid>
        <Jumbotron id={"eventsJumbotron"}>
          <h1>App Name</h1>
          <h3>Add a New Event</h3>
        </Jumbotron>
        <Row fluid>
          <Col size="md-9" offset="md-3">
            <form className="mb-5" onSubmit={this.handleSubmit}>
              {this.state.fieldNames.map(question => (
                <Input
                  key={question.id}
                  id={question.id}
                  name={question.name}
                  value={question.name}
                  onChange={this.handleInputChange}
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
