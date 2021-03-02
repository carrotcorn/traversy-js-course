// init Local storage class
const storage = new Storage();
// get stored location data
const weatherLocation = storage.getLocationData()
// init weather class
const weather = new Weather(weatherLocation.city, weatherLocation.country);
// init UI
const ui = new UI();
//get weather on DOM load
document.addEventListener("DOMcontentLoaded", getWeather());

// change location event listener
document.getElementById("w-change-btn").addEventListener("click", () => {
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;

  // Change location
  weather.changeLocation(city, country);
  // set location in LocalStorage
  storage.setLocationData(city, country)
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
