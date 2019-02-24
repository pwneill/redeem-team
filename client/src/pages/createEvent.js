import React, { Component } from "react";
import { Input } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
import { Card, CardHeader, CardBody } from "../components/Card";

const foo = [
  {
    id: 1,
    name: "Phelan"
  },
  {
    id: 2,
    name: "Rich"
  }
];

class createEvent extends Component {
  state = {
    foo
  };

  render() {
    return (
      <Container fluid>
        <h1>Create Event Page</h1>
        <Row>
          <form>
            {this.state.foo.map(people => (
              <Input key={people.id} id={people.id} name={people.name} />
            ))}
          </form>
        </Row>
      </Container>
    );
  }
}

export default createEvent;
