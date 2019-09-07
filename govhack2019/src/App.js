import React, { Component } from "react";
import "./App.css";
import { Row, Col } from "react-bootstrap";
<<<<<<< HEAD
import { Map, GoogleApiWrapper } from 'google-maps-react';

class App extends Component {
  initMap = async () => {
    google = {props.google}
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -27.46794, lng: 153.02809 },
      zoom: 8
    });
    map.data.loadGeoJson(
      "https://data.gov.au/geoserver/qld-suburb-locality-boundaries-psma-administrative-boundaries/wfs?request=GetFeature&typeName=ckan_6bedcb55_1b1f_457b_b092_58e88952e9f0&outputFormat=json"
    );
  };

  conponentDidMount() {
    const api = fetch(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBL6mg5kAFhttbqmVLxl4ikklsb6eQbDHE&callback=initMap"
    );
  }
=======
import {Map, GoogleApiWrapper} from 'google-maps-react';

export class App extends Component {
>>>>>>> f3586f01ab21f21c5c566ac0677423be681da8a2

  render() {
      const mapStyles = {
          width: '100%',
          height: '100%'
      };
    return (

      <Map
          google={this.props.google}
          zoom={8}
          center={lat: -27.46794, lng: 153.02809}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />

      <div>
        <Row>
          <Col md={4} xs={4} style={{ backgroundColor: "lightblue" }}>
            1
          </Col>
          <Col md={8} xs={8} style={{ backgroundColor: "lightblue" }}>
            <div id="map">conponentDidMount()</div>
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
