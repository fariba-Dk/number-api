import React from 'react';
import GoogleMap from './components/GoogleMap.js';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { useEffect, useState } from 'react';

export default function App() {
  const [address, setAddress] = React.useState('');
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  return (
    <>
      <div>
        <h1>World Weather Map</h1>
        <GoogleMap />
        <input id='autocomplete' type='text' placeholder='Enter a place' />
      </div>
      <div>
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <p>Latitude: {coordinates.lat}</p>
              <p>Longitude: {coordinates.lng}</p>

              <input {...getInputProps({ placeholder: 'Enter a place' })} />

              <div>
                {loading ? <div>...loading</div> : null}

                {suggestions.map((suggestion) => {
                  const style = {
                    backgroundColor: suggestion.active ? '#fe9801' : '#fe9801',
                  };
                  return (
                    <div {...getSuggestionItemProps(suggestion, { style })}>
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
    </>
  );
}
