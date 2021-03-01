//initialize GitHub class
const github = new Github();
//initialize UI class
const ui = new UI();

//search input
const searchUser = document.getElementById("searchUser");

//search input event listener
searchUser.addEventListener("keyup", (e) => {
  // get input text
  const userText = e.target.value;

  if(userText !== ''){
   // Make http call
   github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        // Show alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // Show profile
        ui.showProfile(data.profile);
      }
    })
  } else {
    // Clear profile
    ui.clearProfile();
  }
});
