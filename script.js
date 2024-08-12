const apiKey ="b6f0b0ceb5f51bc189da65575f97daf8";
//stores the api key needed to authenticate request to the API

const apiUrl ="https://api.openweathermap.org/data/2.5/weather";
//set the base URL for the waether map api endp[oint

const locationInput = document.getElementById("locationInput");
//

const searchButton = document.getElementById("searchButton");
//selects the html button where the user

const locationElement = document.getElementById("location")
//selects the html button where the user will click on search for the weather input

const tempratureElement = document.getElementById("temprature")
//selects the html element where the location and the name will be displayed

const descriptionElement = document.getElementById("description")
//selects the html element where the waeather description will be displayed


searchButton.addEventListener("click",()=> {
    const location =locationInput.value;
    if (location){
        fetchWeather(location);
    }

});

function fetchWeather(location) {
    const url =`$(apiUrl)?q=$(location)&appid=(apiKey)&units=metric`;
    //Defines a function that constructs the API request URL using the enter location,
    //API key , and units set to metric,

    fetch(url)
    .then((response) => {
        if(response.ok){
            throw new Error("Weather data not available for the entered location");
        }
        return response.json();
    })
    //Sends aGET request to the OpenWeatherMap API, checks if the response is successful,
    //and converts the response to JSON

    .then((data) =>{
        locationElement,textContet = data.name;
        tempratureElement.textContent =`${Math.round(data.main.temp)}°C`;
        descriptionElement.textContent =data.weather[0].description;
    })
    // update the HTML elements with the location name, temprature,
    //and waether description from the API response,

    .catch((error) => {
        console.error("Error fetching weather data:",error);
        locationElement ,textContent ="Error fetching data";
        temperatureElement.textContent ="";
        descriptionElement.textContent ="";

    });

    //Handle any error that occur during the API request by logging the eror
    // and updating the HTML elements to indicate the failure.
    
}
