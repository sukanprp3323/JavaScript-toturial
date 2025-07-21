let cityName = document.querySelector(".City_Name")
cityName.textContent = "Chaloda, Gujarat"
let W_date_time = document.querySelector(".weather_Date_time")
let W_Info = document.querySelector(".weather_info")
let W_Icon = document.querySelector(".weather_icon")
let W_temperature = document.getElementById(".weather_temperature")
let W_min = document.getElementById(".weather_min")
let W_max = document.getElementById(".weather_max")

// let WeatherAPI = `https://api.openweathermap.org/data/2.0/weather?q=pune&APPID=2919db98d7155fec0476e3158f2bd40e`

let dt = 1753014912;
const DateTime = new Date(dt * 1000) //convert seconds to miliseconds
console.log(DateTime);


// to get the COuntry code from IN to INDIA , AUS to Australia etc
let getCountryName = (code) => {
    return new Intl.DisplayNames([code], { type: "region" }).of(code);
}
// country code close 

let getWeatherData = async () => {

    let WeatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=28.6139&lon=77.2090&appid=2919db98d7155fec0476e3158f2bd40e`

    try {
        const res = await fetch(WeatherAPI);
        const data = await res.json();
        console.log(data);

        const { main, name, weather, wind, sys, dt } = data;
        cityName.innerHTML = `${name}, ${getCountryName(sys.country)}`
    }
    catch (error) {
        console.log(error);
    }
}

document.body.addEventListener("load", getWeatherData())