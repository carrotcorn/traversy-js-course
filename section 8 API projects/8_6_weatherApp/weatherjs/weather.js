class Weather {
  constructor(city, country) {
    this.apiKey = "b5d94c73fff5428d604d1945bbff28e9";
    this.city = city;
    this.country = country;
  }
  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`
    );

    const responseData = await response.json();
    console.log(responseData);

   //  return responseData.weather //gets just the weather object value of the json
    return responseData

  }
  //change weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
