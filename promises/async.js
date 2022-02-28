let url = 'https://jsonplaceholder.typicode.com/todos';

async function fetchUsers() {
  const response = await fetch(url);

  const data = await response.json();
  console.log(data[4]);
}
fetchUsers();

const myPromise = new Promise((resolve, reject) => {
  //create a promise passing a function with both resolve() & reject()

  const random = Math.floor(Math.random() * 2);
  console.log(random);
  //if 0 or 1   if random is 0 is good => resolve
  //else if 1 => reject()
  if (random === 0) {
    resolve();
  } else {
    reject();
  }
});
myPromise
  .then(() => console.log('Success!')) //handles success
  .catch(() => console.log('Something went wrong!'));

//fetch/promises --> Pokemon Api
let URL = 'https://pokeapi.co/api/v2/pokemon/ditto';

fetch(URL) //-> we call fetch
  .then((res) => res.json()) //-> we get the data
  .then((data) => console.log(data)) //-> we handle the success by getting data
  .then((err) => console.log('No Good!')); //-> we handle error

//Best Way: fetch with async await
async function fetchPokemon(id) {
  let pokeUrlId = `https://pokeapi.co/api/v2/pokemon/${id}`;

  try {
    const response = await fetch(pokeUrlId);
    const data = await response.json().then((data) => console.log('Success!'));
  } catch (err) {
    console.error(`This is BAAAAAAD`, err);
  }
}
let id = 4;
fetchPokemon(id);
