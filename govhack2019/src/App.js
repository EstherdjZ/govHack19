import React, { Component } from "react";
import "./App.css";

import { Map, GoogleApiWrapper } from 'google-maps-react';

import axios from "axios";
import { Row, Col, Button } from "react-bootstrap";
import Logo from "./computerrice.png";

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
          <Col md={3} xs={3} style={{ backgroundColor: "lightblue"}}>
            {/* Bar contain logo and search function */}
            <Row> 
              <Col 
                style ={{margin:"4%"}}>
                <img src={Logo} 
                  alt="website logo"
                  style={{width: "30%"}}/>
                Computer Rice
              </Col>
            </Row>
            
            <Row>
              <Col style={{margin:"0 7%"}}>
                <input 
                  name="search"
                  type="text"
                  size="17"/>
              </Col>
              <Col>
                <input
                  name="search"
                  type="submit"
                  value="Search"
                  size="6"/>
              </Col>
              
            </Row>

            {/* Filter section
            <Row style ={{marginTop:"5%"}}>
              <Col style ={{marginLeft:"5%"}}>
                <input 
                  type="checkbox" 
                  name="fiter"/> Salary
              </Col>
              <Col>
                <input 
                  type="checkbox" 
                  name="fiter"/> Salary
              </Col>
              <Col>
                <input 
                  type="checkbox" 
                  name="fiter"/> Salary
              </Col>
            </Row>

            <Row style ={{marginTop:"5%"}}>
              <Col style ={{marginLeft:"5%"}}>
                <input 
                  type="checkbox" 
                  name="fiter"/> Salary
              </Col>
              <Col>
                <input 
                  type="checkbox" 
                  name="fiter"/> Salary
              </Col>
              <Col>
                <input 
                  type="checkbox" 
                  name="fiter"/> Salary
              </Col>
            </Row> */}

            {/* Info about location */}
            
            <Row style ={{margin:"5%", marginRight:"0", marginTop:"10%"}}>
              <Col xs={7}>
                Total Population: 
              </Col>
              <Col>
                data
              </Col>
            </Row>

            <Row style ={{margin:"5%", marginRight:"0"}}>
              <Col xs={7}>
                Employed Person: 
              </Col>
              <Col>
                data
              </Col>
            </Row>

            <Row style ={{margin:"5%", marginRight:"0"}}>
              <Col xs={7}>
                Salary: 
              </Col>
              <Col>
                data
              </Col>
            </Row>

            <Row style ={{margin:"5%", marginRight:"0"}}>
              <Col xs={7}>
                Industry: 
              </Col>
              <Col>
                data
              </Col>
            </Row>

            <Row style ={{margin:"5%", marginRight:"0"}}>
              <Col xs={7}>
                Gender Rate: 
              </Col>
              <Col>
                data
              </Col>
            </Row>

          </Col>
          
          <Button onClick={this.fecthData}></Button>

          {/* The MAP */}
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
