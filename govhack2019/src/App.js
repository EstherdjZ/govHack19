import React, { Component } from "react";
import "./App.css";
import { Row, Col } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={4} xs={4} style={{ backgroundColor: "lightblue" }}>
            1
          </Col>
          <Col md={8} xs={8} style={{ backgroundColor: "lightblue" }}>
            2 of 2
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
