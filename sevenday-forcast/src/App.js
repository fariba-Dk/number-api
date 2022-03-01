import React from 'react';
import GoogleMap from './components/GoogleMap.js';

export default function App() {
  return (
    <div>
      <h1>7 Day Forecast</h1>
      <GoogleMap/>
      <form>
        <input type='text' placeholder='Enter city...'></input>
      </form>
    </div>
  );
}
