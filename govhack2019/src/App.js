import React, { Component } from "react";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import {Map, GoogleApiWrapper} from 'google-maps-react';

export class App extends Component {
  render() {
      const mapStyles = {
          width: '100%',
          height: '100%'
      };
    return (
      <div>
        <Row>
          <Col md={4} xs={4} style={{ backgroundColor: "lightblue" }}>
            1
          </Col>
        </Row>
              <Map
                  google={this.props.google}
                  zoom={14}
                  style={mapStyles}
                  initialCenter={{
                      lat: -1.2884,
                      lng: 36.8233
                  }}
              />
      </div>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBL6mg5kAFhttbqmVLxl4ikklsb6eQbDHE'
})(App);
