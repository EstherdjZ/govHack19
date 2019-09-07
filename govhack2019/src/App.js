import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Row, Col, Button } from "react-bootstrap";
import { Map, GoogleApiWrapper, Polygon } from "google-maps-react";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      result: "",
      coorAr: []
    };
  }

  UNSAFE_componentWillMount = async () => {
    try {
      const res = await axios(
        `https://data.gov.au/geoserver/qld-suburb-locality-boundaries-psma-administrative-boundaries/wfs?request=GetFeature&typeName=ckan_6bedcb55_1b1f_457b_b092_58e88952e9f0&outputFormat=json`
      );
      this.setState({ result: res.data.features });

      const array1 = await this.state.result.map(
        subarray => subarray.geometry.coordinates[0][0][0]
      );

      const array2 = await array1.map(el => el.map(el1 => el1));

      const arrr = [];

      await array2.map(el =>
        arrr.push({
          lat: el[1],
          lng: el[0]
        })
      );

      await this.setState({ coorAr: arrr });
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
          <Button></Button>
          <Col
            md={7}
            xs={7}
            style={{ backgroundColor: "lightblue", position: "inherit" }}
          >
            <Map
              google={this.props.google}
              zoom={14}
              style={mapStyles}
              initialCenter={this.state.coorAr[3]}
            >
              <Polygon
                paths={this.state.coorAr}
                strokeColor="#0000FF"
                strokeOpacity={0.8}
                strokeWeight={2}
                fillColor="#0000FF"
                fillOpacity={0.35}
              />
            </Map>
          </Col>
        </Row>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBL6mg5kAFhttbqmVLxl4ikklsb6eQbDHE"
})(App);
