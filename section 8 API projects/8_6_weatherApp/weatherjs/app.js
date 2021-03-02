// init weather class
const weather = new Weather("Vancouver", "can");
// init UI
const ui = new UI();
//get weather on DOM load
document.addEventListener("DOMcontentLoaded", getWeather());

// change location event listener
document.getElementById("w-change-btn").addEventListener("click", () => {
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;

  weather.changeLocation("London", "uk");
  //get and display weather
  getWeather();

  //close modal popup window (JQuery)
  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      // console.log(results);
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
