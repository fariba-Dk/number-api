console.log('this is sanity check');
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 5004;

//middleware
app.use(express.json()); // we are sending json
app.use(express.static('public')); //standard

const url =
  'https://maps.googleapis.com/maps/api/js?key=AIzaSyB1fByA0ZCLSYpzyNAlcVJTwIEUNDYuaIE&libraries=places';

app.listen(PORT, () => {
  console.log(`Server is Running on port: http//localhost:${PORT}`);
});
