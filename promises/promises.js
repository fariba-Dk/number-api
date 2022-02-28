const posts = [
  {
    title: 'Post One',
    body: 'This is post one',
    pages: 10,
  },
  {
    title: 'Post Two',
    body: 'This is post two',
    pages: 20,
  },
];
function getPosts() {
  setTimeout(() => {
    let result = '';
    posts.forEach((post, index) => {
      result += `<li>${post.title}: ${post.body} and the total pages are ${post.pages}.</li>`;
    });
    document.body.innerHTML = result;
  }, 1000);
}
getPosts();

function createPosts(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Something went wrong!');
      }
    }, 3000);
  });
}
createPosts({
  title: 'Post Three',
  body: 'This is post three',
  pages: 233,
})
  .then(getPosts)
  .catch((error) => {
    console.log('Something went really wrong');
  });

const promise1 = Promise.resolve('Hello!!!');
const promise2 = 10;
Promise.all(promise1, promise2).then((values) => {
  console.log(values);
});

