const URL = 'http://numbersapi.com/1..10';
//const URL = "https://api.chucknorris.io/jokes/random";
// using Fetch make an API call to the url and return the data in an Array
async function fetchData() {
  // Use fetch to call the api with the url
  try {
    const response = await fetch(URL);
    // Storing data in form of JSON
    let data = await response.json();
    console.log(`this is my data.value`, data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
fetchData();

// Change this code!
async function renderData() {
  let numObj = await fetchData();
  console.log(`this is my num obj`, numObj);
  let value = '';
  for (let key in numObj) {
    value = numObj[key];
    console.log(`---> this is value`, value);
  }
  //console.log(`These are my arr...`, numArr);
  let html = `<ul>`;
  // iterate Through  your data
  // Modify this function to sho‍w in your HTML ;
  let htmlSegment = `<li>${value}</li>`;
  html += htmlSegment;
  html += '</ul>';

  let container = document.querySelector('.container');
  container.innerHTML = html;
}

//Don't forget to uncomment this line!
renderData(); // console.log('Hi Im working')
