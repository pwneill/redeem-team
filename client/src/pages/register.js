import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Form from "react-jsonschema-form";
import { Card, CardBody } from "../components/Card";
import registerFieldNames from "../utils/registration.json";

class Register extends Component {
  state = {
    event: {},
    Schema: {registerFieldNames}
  };
  componentDidMount() {
    var id = this.props.match.params.id;
    this.loadEvent(id);
  }

  loadEvent = id => {
    API.getEvent(id)
      .then(res => {
        this.setState({ event: res.data });

        const newSchema = registerFieldNames;
        newSchema.properties.Q1 = {
          type: "string",
          title: res.data.Q1
        };
        newSchema.properties.Q2 = {
          type: "string",
          title: res.data.Q2
        };

        this.setState({ Schema: newSchema})
      })
      .catch(err => console.log(err));
  };

  onSubmit = (data)  => {
    API.register(this.state.event._id, data.formData)
    console.log(data.formData);
  }

  render() {
    return (
      <Container>
        <Row fluid>
          <h3 className="mt-5 mb-3">Register for {this.state.event.Name}</h3>
        </Row>
        <Row fluid>
          <Card>
            <CardBody className="mt-3 mb-3">
              <h5>{this.state.event.Name}</h5>
              <i>{this.state.event.LocationName}</i>
              <br />
              {this.state.event.Game} / {this.state.event.Console} <br />
            </CardBody>
          </Card>
        </Row>
        <Row fluid>
          <Col>
            <Form
              className="mt-3 mb-5"
              safeRenderCompletion={true}
              schema={this.state.Schema}
              onSubmit={this.onSubmit}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Register;
