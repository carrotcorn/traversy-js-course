// init weather class
const weather = new Weather("Vancouver", "can");
// init UI
const ui = new UI()
//get weather on DOM load
document.addEventListener("DOMcontentLoaded", getWeather());

// weather.changeLocation("London","uk")

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      // console.log(results);
      ui.paint(results)
    })
    .catch((err) => console.log(err));
}
