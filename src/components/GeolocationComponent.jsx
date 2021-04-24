import React, {Component} from "react";

let latitude, longitude;
class GeolocationComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
  
    componentDidMount() {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        latitude= position.coords.latitude;
        console.log("Longitude is :", position.coords.longitude);
        longitude= position.coords.longitude;
      });
    }
  
    render() {
      return (
        <div>
        </div>
      );
    }
  }
  export default GeolocationComponent
  export {latitude, longitude}