class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.dewpoint = document.getElementById("w-dewpoint");
    this.wind = document.getElementById("w-wind");
  }
  paint(weather) {
    const kelvin = weather.main.temp;
    // change API temp info from Degrees Kelvin to Celsius
    function KtoC() {
      const celsius = Math.round(kelvin - 273.15).toFixed(1);
      return celsius;
    }
    //getting wind direction in words
    function windDirection() {
      const degreeCompass = weather.wind.deg;
      if (degreeCompass === 360 || degreeCompass === 0) {
        return "North";
      } else if (degreeCompass < 360 && degreeCompass > 270) {
        return "North west";
      } else if (degreeCompass === 270) {
        return "West";
      } else if (degreeCompass < 270 && degreeCompass > 180) {
        return "South West";
      } else if (degreeCompass === 180) {
        return "South";
      } else if (degreeCompass < 180 && degreeCompass > 90) {
        return "South East";
      } else if (degreeCompass === 90) {
        return "East";
      } else if (degreeCompass < 90 && degreeCompass > 0) {
        return "North East";
      } else {
        return null;
      }
    }
    //convert wind speed from m/sec to Km/h
    function convertWindSpeed() {
      const windSpeed = weather.wind.speed;
      Math.round(windSpeed * 3.6).toFixed(1);
      return windSpeed;
    }
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    //  this.string.textContent = weather.main.temp + "°Kelvin";
    this.string.textContent = KtoC() + "°C";

    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
    this.humidity.textContent = `Relative Humidity ${weather.main.humidity}%`;
    this.dewpoint.textContent =
      `Wind Direction: ${weather.wind.deg}° ` + windDirection();
    //  this.dewpoint.textContent = `Wind Direction ${weather.wind.deg} degrees`;
    this.wind.textContent = "Wind Speed: " + convertWindSpeed() + " Km/H";
    //  this.wind.textContent = `Wind Speed ${weather.wind.speed} meters/second`;
  }
}
