import './style.css'; 
// import img from './img/'

function generateDOM(newData) {
    const element = document.getElementById('container'); 

    //Search form DOM generation

    let formContainer = document.createElement('div'); 
    formContainer.setAttribute('id', 'form--container');
    let form = document.createElement('form'); 
    form.setAttribute('id', 'form');
    let search = document.createElement('input');
    search.setAttribute('id', 'form--search');
    search.setAttribute('type', 'text');
    let submit = document.createElement('input');
    submit.setAttribute('id', 'form--submit');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'submit');

    form.append(search, submit); 
    formContainer.append(form); 

    //Weather data DOM generation

    let weatherContainer = document.createElement('div'); 
    weatherContainer.setAttribute('id', 'weather--container');
    
    let locationContainer = document.createElement('div'); 
    locationContainer.setAttribute('id', 'location--container');
    let nameText = document.createElement('p'); 
    nameText.setAttribute('id', 'location--nameText');
    nameText.setAttribute('class', 'text');
    nameText.textContent = `Location: ${newData.name}, ${newData.region}`; 
    let descText = document.createElement('p'); 
    descText.setAttribute('id', 'location--descText');
    descText.setAttribute('class', 'text');
    descText.textContent = newData.description; 

    locationContainer.append(nameText, descText); 

    let tempContainer = document.createElement('div'); 
    tempContainer.setAttribute('id', 'temperature--container');
    let tempText = document.createElement('p'); 
    tempText.setAttribute('id', 'temperature--text');
    tempText.setAttribute('class', 'text');
    tempText.textContent = newData.temp; 

    tempContainer.append(tempText); 

    let infoContainer = document.createElement('div'); 
    infoContainer.setAttribute('id', 'info--container');
    let feelslikeText = document.createElement('p'); 
    feelslikeText.setAttribute('id', 'info--feelslikeText');
    feelslikeText.setAttribute('class', 'text');
    feelslikeText.textContent = `Feels like: ${newData.feel}˚`;  
    let humidityText = document.createElement('p'); 
    humidityText.setAttribute('id', 'info--humidityText');
    humidityText.setAttribute('class', 'text');
    humidityText.textContent = `Humidity: ${newData.humidity}`;  
    let windText = document.createElement('p'); 
    windText.setAttribute('id', 'info--windText');
    windText.setAttribute('class', 'text');
    windText.textContent = `Wind Speed: ${newData.humidity}kph`;  
    let uvText = document.createElement('p'); 
    uvText.setAttribute('id', 'info--uvText');
    uvText.setAttribute('class', 'text');
    uvText.textContent = `UV Rating: ${newData.humidity}`;  

    infoContainer.append(feelslikeText, humidityText, windText, uvText); 

    weatherContainer.append(locationContainer, tempContainer, infoContainer);
    element.append(formContainer, weatherContainer); 

}

async function getWeather(location) {
    const key = '6e6c524233e149aa8be130049230604';
    let responseData = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`, {mode: 'cors'}); 
    let weatherData = await responseData.json(); 
    let newData = processData(weatherData);
    generateDOM(newData); 
}

function processData(weatherData) {
    let data = {
        name: weatherData.location.name, 
        region: weatherData.location.region, 
        description: weatherData.current.condition.text,
        icon: weatherData.current.condition.icon,  
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
