import './style.css'; 
import error from './img/error.svg'; 

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
    windText.textContent = `Wind Speed: ${newData.wind}kph`;  
    let uvText = document.createElement('p'); 
    uvText.setAttribute('id', 'info--uvText');
    uvText.setAttribute('class', 'text');
    uvText.textContent = `UV Rating: ${newData.uv}`;  


    let uvAdviceContainer = document.createElement('div'); 
    uvAdviceContainer.setAttribute('id', 'uvAdvice--container');
    let uvContent1 = document.createElement('p'); 
    uvContent1.setAttribute('id', 'info--uvAdvice1');
    uvContent1.setAttribute('class', 'text');
    uvContent1.textContent = uvAdvice(newData.uv)[0];   
    let uvContent2 = document.createElement('p'); 
    uvContent2.setAttribute('id', 'info--uvAdvice2');
    uvContent2.setAttribute('class', 'text');
    uvContent2.textContent = uvAdvice(newData.uv)[1];  

    uvAdviceContainer.append(uvContent1, uvContent2); 

    infoContainer.append(feelslikeText, humidityText, windText, uvText); 

    weatherContainer.append(placeContainer, tempContainer, infoContainer, uvAdviceContainer);
    element.append(weatherContainer); 
}

function errorDOM(errorText) {
    const element = document.getElementById('container'); 
    element.innerHTML = '';

    let errorContainer = document.createElement('div'); 
    errorContainer.setAttribute('id', 'errorContainer');

    let errorImage = new Image(); 
    errorImage.setAttribute('id', 'errorIcon')
    errorImage.src = error; 

    let errorMsg = document.createElement('p'); 
    errorMsg.setAttribute('id', 'errorMsg'); 
    errorMsg.textContent = errorText; 
    
    errorContainer.append(errorImage, errorMsg); 
    element.append(errorContainer); 
}

async function getWeather(place) {
    try {
        const key = '6e6c524233e149aa8be130049230604';
        let responseData = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${place}`, {mode: 'cors'}); 
        let weatherData = await responseData.json(); 
        let newData = processData(weatherData);
        generateDOM(newData); 
    } catch (error) {
        if (error instanceof TypeError) {
            if (place == '') {
                console.error(`Please enter a valid location`); 
                errorDOM(`Please enter a valid location`); 
            } else {
                console.error(`No location found for ${place}`); 
                errorDOM(`No location found for ${place}`); 
            }
        } else {
            console.error('API Error:', error);
          }
    };
};

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

function uvAdvice(uvRating) {
    if ((uvRating >= 0) && (uvRating <= 2)) {
        return ['Low danger from the Sun\'s UV rays for the average person.', 'Wear sunglasses on bright days. If you burn easily, cover up and use broad spectrum SPF 15+ sunscreen. Bright surfaces, sand, water, and snow, will increase UV exposure.'];
    } else if ((uvRating >= 3) && (uvRating <= 5)) {
        return ['Moderate risk of harm from unprotected sun exposure.', 'Stay in shade near midday when the Sun is strongest. If outdoors, wear sun-protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad spectrum SPF 15+ sunscreen every 1.5 hours, even on cloudy days, and after swimming or sweating. Bright surfaces, such as sand, water, and snow, will increase UV exposure.'];
    } else if ((uvRating >= 6) && (uvRating <= 7)) {
        return ['High risk of harm from unprotected sun exposure.', 'Protection against skin and eye damage is needed. Reduce time in the sun between 10 a.m. and 4 p.m. If outdoors, seek shade and wear sun-protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad spectrum SPF 15+ sunscreen every 1.5 hours, even on cloudy days, and after swimming or sweating. Bright surfaces, such as sand, water, and snow, will increase UV exposure.'];
    } else if ((uvRating >= 8) && (uvRating <= 10)) {
        return ['Very high risk of harm from unprotected sun exposure.', 'Take extra precautions because unprotected skin and eyes will be damaged and can burn quickly. Minimize sun exposure between 10 a.m. and 4 p.m. If outdoors, seek shade and wear sun-protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad spectrum SPF 15+ sunscreen every 1.5 hours, even on cloudy days, and after swimming or sweating. Bright surfaces, such as sand, water, and snow, will increase UV exposure.'];
    } else if (uvRating >= 11) {
        return ['Extreme risk of harm from unprotected sun exposure.', 'Take all precautions because unprotected skin and eyes can burn in minutes. Try to avoid sun exposure between 10 a.m. and 4 p.m. If outdoors, seek shade and wear sun-protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad spectrum SPF 15+ sunscreen every 1.5 hours, even on cloudy days, and after swimming or sweating. Bright surfaces, such as sand, water, and snow, will increase UV exposure.'];
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

