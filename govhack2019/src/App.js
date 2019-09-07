import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Row, Col, Button } from "react-bootstrap";
import { Map, GoogleApiWrapper, Polygon } from "google-maps-react";

export class App extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     result: ""
  //   };
  // }
  // fecthData = async () => {
  //   try {
  //     const res = await axios(
  //       `https://data.gov.au/geoserver/qld-suburb-locality-boundaries-psma-administrative-boundaries/wfs?request=GetFeature&typeName=ckan_6bedcb55_1b1f_457b_b092_58e88952e9f0&outputFormat=json`
  //     );
  //     this.setState({ result: res });
  //     console.log(this.state.result);
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  constructor() {
    super();

    this.state = {
      coord: [],
      result: ""
    };
  }

  UNSAFE_componentWillMount = async () => {
    try {
      const res = await axios(
        `https://data.gov.au/geoserver/qld-suburb-locality-boundaries-psma-administrative-boundaries/wfs?request=GetFeature&typeName=ckan_6bedcb55_1b1f_457b_b092_58e88952e9f0&outputFormat=json`
      );
      this.setState({ result: res.data.features });

      // console.log(JSON.stringify(jsonData));
      //console.log(JSON.stringify(jsonData)[0]);
      //console.log(this.state.result.features);
      //console.log(jsonData.features[2]);
      const data = JSON.stringify(this.state.result[2]);
      console.log(data.indexOf("coordinate"));
      console.log(data.substring(120, 14724 + 117)); //-3 for the extra [] brackets

      //console.log(data.substring(120).indexOf("}"));

      console.log(
        data.substring(120, 14724 + 117).replace(/[-[\]{}()*+?\\^$|#\s]/g, "") //remove ,
      );

      const data2 = data
        .substring(120, 14724 + 117)
        .replace(/[-[\]{}()*+?\\^$|#\s]/g, "")
        .split(","); //remove ,

      const test = [];
      test.push({ lat: parseFloat(data2[1]), lng: parseFloat(data2[0]) });
      test.push({
        lat: parseFloat(data2[157]),
        lng: parseFloat(data2[156])
      });
      test.push({
        lat: parseFloat(data2[467]),
        lng: parseFloat(data2[466])
      });
      test.push({
        lat: parseFloat(data2[577]),
        lng: parseFloat(data2[576])
      });

      this.setState({ coord: test });

      //console.log(JSON.stringify(jsonData.features[2]).substring(120).split());
      // console.log(JSON.parse(jsonData.features[1]));
    } catch (error) {
      // handle your errors here
      console.error(error);
    }
  };

  render() {
    const mapStyles = {
      width: "100%",
      height: "100%"
    };
    console.log(this.state.coord);
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
            >
              <Polygon
                paths={this.state.coord}
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

// import React, { Component } from "react";
// import "./App.css";
// import axios from "axios";
// import { Row, Col, Button } from "react-bootstrap";
// import { Map, GoogleApiWrapper, Polygon } from "google-maps-react";

// export class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       result: "",
//       coorAr: [],
//       test: []
//     };
//   }

//   UNSAFE_componentWillMount = async () => {
//     try {
//       const res = await axios(
//         `https://data.gov.au/geoserver/qld-suburb-locality-boundaries-psma-administrative-boundaries/wfs?request=GetFeature&typeName=ckan_6bedcb55_1b1f_457b_b092_58e88952e9f0&outputFormat=json`
//       );
//       this.setState({ result: res.data.features });

//       const array1 = await this.state.result.map(
//         subarray => subarray.geometry.coordinates[0][0][0]
//       );

//       const array2 = await array1.map(el => el.map(el1 => el1));

//       const arrr = [];

//       await array2.map(el =>
//         arrr.push({
//           lat: el[1],
//           lng: el[0]
//         })
//       );

//       const arr2 = [];

//       await this.setState({ coorAr: arrr });

//       /*await this.state.test.push(this.state.coorAr[0]);
//       await this.state.test.push(this.state.coorAr[159]);
//       await this.state.test.push(this.state.coorAr[489]);
//       await this.state.test.push(this.state.coorAr[1689]);*/

//       arr2.push(arrr[0]);
//       arr2.push(arrr[1]);
//       arr2.push(arrr[2]);
//       arr2.push(arrr[3]);
//       await this.setState({ test: arr2 });
//     } catch (error) {
//       alert(error);
//     }
//   };

//   render() {
//     const mapStyles = {
//       width: "100%",
//       height: "100%"
//     };

//     console.log(this.state.test);

//     return (
//       <div>
//         <Row>
//           <Col md={3} xs={3} style={{ backgroundColor: "lightblue" }}>
//             1
//           </Col>
//           <Button></Button>
//           <Col
//             md={7}
//             xs={7}
//             style={{ backgroundColor: "lightblue", position: "inherit" }}
//           >
//             <Map
//               google={this.props.google}
//               zoom={14}
//               style={mapStyles}
//               initialCenter={{ lat: -27.46794, lng: 153.02809 }}
//             >
//               <Polygon
//                 paths={this.state.test}
//                 strokeColor="#0000FF"
//                 strokeOpacity={0.8}
//                 strokeWeight={2}
//                 fillColor="#0000FF"
//                 fillOpacity={0.35}
//               />
//             </Map>
//           </Col>
//         </Row>
//       </div>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyBL6mg5kAFhttbqmVLxl4ikklsb6eQbDHE"
// })(App);

// import React, { Component } from "react";
// import "./App.css";
// import axios from "axios";
// import { Row, Col, Button } from "react-bootstrap";
// import { Map, GoogleApiWrapper, Polygon } from "google-maps-react";

// export class App extends Component {
//   // constructor() {
//   //   super();

//   //   this.state = {
//   //     result: ""
//   //   };
//   // }
//   // fecthData = async () => {
//   //   try {
//   //     const res = await axios(
//   //       `https://data.gov.au/geoserver/qld-suburb-locality-boundaries-psma-administrative-boundaries/wfs?request=GetFeature&typeName=ckan_6bedcb55_1b1f_457b_b092_58e88952e9f0&outputFormat=json`
//   //     );
//   //     this.setState({ result: res });
//   //     console.log(this.state.result);
//   //   } catch (error) {
//   //     alert(error);
//   //   }
//   // };

//   constructor() {
//     super();

//     this.state = {
//       coord: []
//     };

//     this.UNSAFE_componentWillMount = fetch(
//       "https://data.gov.au/geoserver/qld-suburb-locality-boundaries-psma-administrative-boundaries/wfs?request=GetFeature&typeName=ckan_6bedcb55_1b1f_457b_b092_58e88952e9f0&outputFormat=json"
//     )
//       .then(response => response.json())
//       .then(jsonData => {
//         // jsonData is parsed json object received from url
//         console.log(jsonData);

//         // console.log(JSON.stringify(jsonData));
//         //console.log(JSON.stringify(jsonData)[0]);
//         console.log(jsonData.features);
//         console.log(jsonData.features[2]);
//         var data = JSON.stringify(jsonData.features[2]);
//         console.log(data.indexOf("coordinate"));
//         console.log(data.substring(120, 14724 + 117)); //-3 for the extra [] brackets

//         //console.log(data.substring(120).indexOf("}"));

//         console.log(
//           data.substring(120, 14724 + 117).replace(/[-[\]{}()*+?\\^$|#\s]/g, "") //remove ,
//         );

//         var data2 = data
//           .substring(120, 14724 + 117)
//           .replace(/[-[\]{}()*+?\\^$|#\s]/g, "")
//           .split(","); //remove ,

//         const test = [];
//         test.push({ lat: parseFloat(data2[1]), lng: parseFloat(data2[0]) });
//         test.push({
//           lat: parseFloat(data2[157]),
//           lng: parseFloat(data2[156])
//         });
//         test.push({
//           lat: parseFloat(data2[467]),
//           lng: parseFloat(data2[466])
//         });
//         test.push({
//           lat: parseFloat(data2[577]),
//           lng: parseFloat(data2[576])
//         });

//         this.setState({ coord: test });

//         //console.log(JSON.stringify(jsonData.features[2]).substring(120).split());
//         // console.log(JSON.parse(jsonData.features[1]));
//       })
//       .catch(error => {
//         // handle your errors here
//         console.error(error);
//       });
//   }

//   render() {
//     const triangleCoords = [
//       { lat: -27.46794, lng: 153.02809 },
//       { lat: -28.466, lng: 156.02809 },
//       { lat: -28.321, lng: 158.02809 },
//       { lat: -27.774, lng: 160.02809 }
//     ];

//     const mapStyles = {
//       width: "100%",
//       height: "100%"
//     };
//     console.log(this.state.coord);
//     return (
//       <div>
//         <Row>
//           <Col md={3} xs={3} style={{ backgroundColor: "lightblue" }}>
//             1
//           </Col>
//           <Button onClick={this.fecthData}></Button>
//           <Col
//             md={7}
//             xs={7}
//             style={{ backgroundColor: "lightblue", position: "inherit" }}
//           >
//             <Map
//               google={this.props.google}
//               zoom={14}
//               style={mapStyles}
//               initialCenter={{
//                 lat: -27.46794,
//                 lng: 153.02809
//               }}
//             >
//               <Polygon
//                 paths={this.state.coord}
//                 strokeColor="#0000FF"
//                 strokeOpacity={0.8}
//                 strokeWeight={2}
//                 fillColor="#0000FF"
//                 fillOpacity={0.35}
//               />
//             </Map>
//           </Col>
//         </Row>
//       </div>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyBL6mg5kAFhttbqmVLxl4ikklsb6eQbDHE"
// })(App);
