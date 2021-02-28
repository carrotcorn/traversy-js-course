document.getElementById("button1").addEventListener("click", getText);

document.getElementById("button2").addEventListener("click", getJson);

document.getElementById("button3").addEventListener("click", getExternal);
// NO SEMI COLONS within promises
// Get local text file data

function getText() {
  fetch("test.txt")
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      console.log(data);
      document.getElementById("output").innerHTML = data;
    })
    .catch(function (err) {
      console.log(err);
    });
}

// Get local json data
function getJson() {
  fetch("posts.json", {
    method: "GET",
    // headers: {
    //   "Content-Type": "application/json",
    // },
    // body: JSON.stringify({
    //   data: "demo",
    // }),
  })
    .then(function (res) {
      return res.json();
    })
    .then(handleErrors)
    .then(function (data) {
      console.log(data);
      let output = "";
      data.forEach(function (post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}

// Get from external API
function getExternal() {
  fetch("https://api.github.com/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log("data");
      let output = "";
      data.forEach((user) => {
        output += `<li>${user.repos_url}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    }) //cannot be any semi colons
    .catch((err) => console.log(err));
}
function handleErrors(res) {
  if (!res) throw new Error(res.error);
  return res;
}

// function getExternal() {
//   fetch('https://api.github.com/users')
//     .then(function(res){
//       return res.json();
//     })
//     .then(function(data) {
//       console.log(data);
//       let output = '';
//       data.forEach(function(user) {
//         output += `<li>${user.login}</li>`;
//       });
//       document.getElementById('output').innerHTML = output;
//     })
//     .catch(function(err){
//       console.log(err);
//     });
// }
