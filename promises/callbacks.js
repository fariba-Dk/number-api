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
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
   setTimeout(() => {
    posts.push(post);
    callback();
  }, 5000);
}
getPosts();

createPost(
  { title: 'Post Three', body: 'This is post three', pages: 30 },
  getPosts
);
