import './style.css'; 

let form = document.getElementById('form');
let search = document.getElementById('form--search');

function generateDOM(newData) {
    const element = document.getElementById('container'); 
    element.innerHTML = ''; 

    //Weather data DOM generation

    let weatherContainer = document.createElement('div'); 
    weatherContainer.setAttribute('id', 'weather--container');
    
    let placeContainer = document.createElement('div'); 
    placeContainer.setAttribute('id', 'place--container');
    let nameText = document.createElement('p'); 
    nameText.setAttribute('id', 'place--nameText');
    nameText.setAttribute('class', 'text');
    nameText.textContent = `${newData.name}, ${newData.region}`; 
    let descText = document.createElement('p'); 
    descText.setAttribute('id', 'place--descText');
    descText.setAttribute('class', 'text');
    descText.textContent = newData.description; 
    let image = new Image(); 
    image.src = newData.icon; 

    placeContainer.append(nameText, descText, image); 

    let tempContainer = document.createElement('div'); 
    tempContainer.setAttribute('id', 'temperature--container');
    let tempText = document.createElement('p'); 
    tempText.setAttribute('id', 'temperature--text');
    tempText.setAttribute('class', 'text');
    tempText.textContent = `${newData.temp}˚C`; 

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

    weatherContainer.append(placeContainer, tempContainer, infoContainer);
    element.append(weatherContainer); 
}

async function getWeather(place) {
    const key = '6e6c524233e149aa8be130049230604';
    let responseData = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${place}`, {mode: 'cors'}); 
    let weatherData = await responseData.json(); 
    let newData = processData(weatherData);
    generateDOM(newData); 
}

function processData(weatherData) {
    let data = {
        name: weatherData.location.name, 
        region: weatherData.location.region, 
        time: timeOfDay(weatherData.location.localtime),
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

function timeOfDay(time) {
    let currentHour = time.substr(11, 2); 

    if ((currentHour >= 5) && (currentHour <= 11)) {
        return 'morning'; 
    } else if ((currentHour >= 12) && (currentHour <= 16)) {
        return 'afternoon';
    } else if ((currentHour >= 17) && (currentHour <= 19)) {
        return 'evening';
    } else if ((currentHour >= 20) && (currentHour <= 5)) {
        return 'night';
    }
}; 

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let place = search.value; 
    getWeather(place); 
    search.value = ''; 
});

(function init() {
    getWeather('london'); 
})(); 