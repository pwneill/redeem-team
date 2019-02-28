import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Form from "react-jsonschema-form";
import { Card, CardBody } from "../components/Card";
import registerFieldNames from "../utils/registration.json";
import eventFieldNames from "../utils/newEvent.json";

const schema = registerFieldNames;
schema.properties.Q1 = eventFieldNames.properties.Q1;
schema.properties.Q2 = eventFieldNames.properties.Q2;

class Register extends Component {
  state = {
    event: {}
  };
  componentDidMount() {
    var id = this.props.match.params.id;
    // console.log(id);
    this.loadEvent(id);
  }
  loadEvent = id => {
    API.getEvent(id)
      .then(res => {
        console.log(res.data);
        this.setState({ event: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row fluid>
          <h3>Register for {this.state.Name}</h3>
        </Row>
        <Row fluid>
          <Card>
            <CardBody>
              <h5>{this.state.Name}</h5>
              <i>{this.state.LocationName}</i>
              <br />
              {this.state.Game} / {this.state.Console} <br />
            </CardBody>
          </Card>
        </Row>
        <Row fluid>
          <Col>
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

export default Register;
