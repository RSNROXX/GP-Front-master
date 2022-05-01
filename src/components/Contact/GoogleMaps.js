import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React, { Component } from "react";
import dotenv from "dotenv";

dotenv.config();

// Width of the map across the screen
const mapStyles = {
  width: "50%",
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // This is the 'marked' position on the map thats later called in displayMarkers
      stores: [{ latitude: 19.076, longitude: 72.8777 }],
    };
  }

  // This creates the rules for the marked position
  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude,
          }}
          onClick={() => console.log("You clicked me!")}
        />
      );
    });
  };

  render() {
    return (
      <Map
        zoom={13}
        // This zooms in closer to the position stated in initialCenter
        google={this.props.google}
        initialCenter={{ lat: 19.076, lng: 72.8777 }}
        // This sets where the map is positioned upon page load
        style={mapStyles}
      >
        {this.displayMarkers()}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(MapContainer);
