console.log('this is sanity check');
// let URL = 'https://api.openweathermap.org/data/2.5/weather?q=';

// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config();
// }
// //load our env var so check env to make sure we are nt in production and if so we want to require the env and call on do.config so bring dotenv library .env file

// const BRIGHT_SUNSHINE = process.env.BRIGHT_SUNSHINE_KEY;

// const axios = require('axios');
// const express = require('express');
// const app = express();
// //middleware
// app.use(express.json()); // we are sending json to our server
// //middleware
// app.use(express.static('public')); //standard

// const PORT = 5004;
// console.log(BRIGHT_SUNSHINE);
// //single end point getting the weather from
// app.get('/weather', (req, res) => {
//   `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=4eec9fe035133d9a436af0a030613a73`;

//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchBox}&APPID=${BRIGHT_SUNSHINE}`;
//   axios({
//     url: url,
//     responseType: 'json',
//   }).then((data) => res.json(data.data));
// });

// app.listen(PORT, () => {
//   console.log(`Server is Running on port: http//localhost:${PORT}`);
// });
