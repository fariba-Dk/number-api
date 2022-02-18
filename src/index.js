const URL = "http://numbersapi.com/1..10";

// using Fetch make an API call to the url and return the data in an Array
async function fetchData() {
  // Use fetch to call the api with the url
  const response = await fetch(URL);
  // Storing data in form of JSON
  let data = await response.json();
  // add the return for the function
  return data;
}
fetchData();
// Use another function to show your data in HTML
async function renderData() {
  // use a variable to store the info for your fetchData Function
  let nums = await fetchData();
  // create your <ul> HTML tag

  let numArr = [];
  let values = Object.value(nums);
  console.log(values);
  let html = `<ul>`;
  // iterate Through  your data

  numArr.forEach((num) => {
    let text = numArr.num;
    // create a <li> tag for each math fact
    let liTag = `<li>${text}</li>`;
    // add your <li> tags to your <ul>list
    html += liTag;
    html += `</ul>`;
  });
  // grab the container tag that there is in your HTML
  let container = document.querySelector(".container");
  // add your html tags to your container
  container.innerHTML = html;
}

renderData();
