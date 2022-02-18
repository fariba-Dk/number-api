const URL = 'https://api.chucknorris.io/jokes/random';
// using Fetch make an API call to the url and return the data in an Array
async function fetchData() {
  // Use fetch to call the api with the url
  const response = await fetch(URL);
  // Storing data in form of JSON
  let data = await response.json();
  console.log(data.value);
  return data;
}

fetchData();

// Change this code!
async function renderData() {
  let jokes = await fetchData();
  let html = '<ul>';
  // Modify this function to sho‍w in your HTML the info inside data.value
  let htmlText = jokes.value;
  let htmlSegment = `<li>${htmlText}</li>`;
  html += htmlSegment;
  html += '</ul>';
  let container = document.querySelector('.container');
  container.innerHTML = html;
}

//Don't forget to uncomment this line!
renderData();
