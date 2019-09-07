import React, { Component } from "react";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import { withGoogleMap, GoogleMap, Polygon } from "react-google-maps";

class App extends Component {
  // initMap = () => {
  //   const map = new google.maps.Map(document.getElementById("map"), {
  //     center: { lat: -27.46794, lng: 153.02809 },
  //     zoom: 8
  //   });
  //   map.data.loadGeoJson(
  //     "https://data.gov.au/geoserver/qld-suburb-locality-boundaries-psma-administrative-boundaries/wfs?request=GetFeature&typeName=ckan_6bedcb55_1b1f_457b_b092_58e88952e9f0&outputFormat=json"
  //   );
  // };

  conponentDidMount() {
    const api = fetch(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBL6mg5kAFhttbqmVLxl4ikklsb6eQbDHE&callback=`${this.initMap}`"
    );
    console.log(api);
  }

  render() {
    return (
      <div>
        <Row>
          <Col md={4} xs={4} style={{ backgroundColor: "lightblue" }}>
            1
          </Col>
          <Col md={8} xs={8} style={{ backgroundColor: "lightblue" }}>
            <div id="map"></div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
