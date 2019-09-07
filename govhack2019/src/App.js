import React, { Component } from "react";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import { Map, GoogleApiWrapper } from "google-maps-react";

export class App extends Component {
  render() {
    const mapStyles = {
      width: "100%",
      height: "100%"
    };
    return (
      <div>
        <Row>
          <Col md={3} xs={3} style={{ backgroundColor: "lightblue" }}>
            1
          </Col>
          <Col
            md={7}
            xs={7}
            style={{ backgroundColor: "lightblue", position: "inherit" }}
          >
            <Map
              google={this.props.google}
              zoom={14}
              style={mapStyles}
              initialCenter={{
                lat: -27.46794,
                lng: 153.02809
              }}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBL6mg5kAFhttbqmVLxl4ikklsb6eQbDHE"
})(App);
