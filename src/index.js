import './style.css'; 
// import img from './img/'

const key = '6e6c524233e149aa8be130049230604';
let location = 'london';

function generateDOM() {


}

async function getWeather() {
    let weather = {}; 
    const responseData = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`, {mode: 'cors'}); 
    const weatherData = await responseData.json(); 
    weather.cTemp = weatherData.current.temp_c;
    weather.cTempFeel = weatherData.current.feelslike_c;
    weather.humidity = weatherData.current.humidity;
    weather.wind = weatherData.current.wind_kph;
    weather.uv = weatherData.current.uv;
    
    console.log(weatherData);
    console.log(weather);

}

getWeather(); 
