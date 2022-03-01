import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import Autocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-google-autocomplete';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      //for google map autocomplete

      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

      mapCenter: {
        lat: 37.773972, //san fran
        lng: -122.431297,
      },
    };
  }

  handleChange = (address) => {
    this.setState({ address });
  };

  handleSelect = (address) => {
    this.setState({ address });
  };

  render() {
    return (
      <>
        <Map
          google={this.props.google}
          initialCenter={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng,
          }}
          center={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng,
          }}
        >
          <Marker
            animation={this.google.maps.Animation.DROP}
            draggable={this.google.map.draggable.true}
            position={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng,
            }}
          ></Marker>
        </Map>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB1fByA0ZCLSYpzyNAlcVJTwIEUNDYuaIE',
})(MapContainer);

//AIzaSyB1fByA0ZCLSYpzyNAlcVJTwIEUNDYuaIE
