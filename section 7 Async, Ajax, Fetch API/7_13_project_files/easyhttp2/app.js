const http = new EasyHTTP();

// Get Users asyncronously
// http
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// custom one below to show users in UI
// http
//   .get("https://jsonplaceholder.typicode.com/users")
//   // .then((res) => {
//   //   // console.log(res)
//   //   return res.json()
//   // })
//   .then((data) => {
//     let output = "";
//     data.forEach((user) => {
//       output += `<li>${user.name}</li>`;
//     });
//     document.getElementById("output").innerHTML = output;
//   })
//   .catch((err) => console.log(err));

// User Data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
}

// //Create user
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// // Update user
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// // Delete User
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err));
