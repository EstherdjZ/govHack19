import React, { Component } from "react";
import "./App.css";
import { Map, GoogleApiWrapper } from 'google-maps-react';

import axios from "axios";
import { Row, Col, Button } from "react-bootstrap";


export class App extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    };
  }
  fecthData = async () => {
    try {
      const res = await axios(
        `https://data.gov.au/geoserver/qld-suburb-locality-boundaries-psma-administrative-boundaries/wfs?request=GetFeature&typeName=ckan_6bedcb55_1b1f_457b_b092_58e88952e9f0&outputFormat=json`
      );
      this.setState({ result: res });
      console.log(this.state.result);
    } catch (error) {
      alert(error);
    }
  };

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
          <Button onClick={this.fecthData}></Button>
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
