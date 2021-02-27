const http = new easyHTTP();

// // Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });
// // get single post
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// Create Data
const data = {
  title: "custom post",
  body: "pooooooooost",
};
// // Create post
// http.post("https://jsonplaceholder.typicode.com/posts", data, (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });

// // Update post
// http.put("https://jsonplaceholder.typicode.com/posts/5", data, (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });

// Delete post
http.delete("https://jsonplaceholder.typicode.com/posts/1", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});