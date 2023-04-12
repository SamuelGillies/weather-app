import './style.css'; 
// import img from './img/'

function generateDOM(newData) {
    const element = document.getElementById('container'); 

    const formContainer = document.createElement('div'); 
    formContainer.setAttribute('id', 'form--container');
    const form = document.createElement('form'); 
    form.setAttribute('id', 'form');
    const search = document.createElement('input');
    search.setAttribute('id', 'form--search');
    search.setAttribute('type', 'text');
    const submit = document.createElement('input');
    submit.setAttribute('id', 'form--submit');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'submit');

    form.append(search, submit); 
    formContainer.append(form); 
    element.append(formContainer); 

    const weatherContainer = document.createElement('div'); 
    formContainer.setAttribute('id', 'weather--container');
    



}

async function getWeather(location) {
    const key = '6e6c524233e149aa8be130049230604';
    const responseData = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`, {mode: 'cors'}); 
    const weatherData = await responseData.json(); 
    const newData = processData(weatherData); 
    generateDOM(newData); 
}

function processData(weatherData) {
    const data = {
        temp: weatherData.current.temp_c, 
        feel: weatherData.current.feelslike_c,
        humidity: weatherData.current.humidity, 
        wind: weatherData.current.wind_kph, 
        uv: weatherData.current.uv
    }
    return data; 
}

(function init() {
    getWeather('london'); 
})(); 

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const search = document.getElementById('form--search');
//     location = String(search.value); 
//     getWeather(); 
// });
