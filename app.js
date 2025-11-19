function init(){
    
}

function getWeather() {
    // code
}

function showWeather() {
    // code
}

const API_KEY = "77f36ebced508f08d1bb597493dd3030";

// let location = document.getElementById('location').value;

// document.getElementById("search-btn").addEventListener("click", () => {
//   let location = document.getElementById("location").value.trim();
// })


// var currentLocation = document.getElementById("location").value;


document.getElementById("search-btn").addEventListener("click", updateLocation);

function updateLocation(){
    var currentLocation = document.getElementById("location").value;
    console.log(currentLocation);
}

let linkie = `https://api.openweathermap.org/data/2.5/weather?q=${currentLocation}&APPID=${API_KEY}&units=metric`;

document.getElementById("clickyclick").addEventListener("click", () => {console.log(linkie)});


fetch(linkie)
    .then(response => response.json())
    .then(data => displayData(data))
    .catch();

function displayData (data) {
        const windSpeed = document.getElementById('windSpeed');
        const windDirection = document.getElementById('windDirection');

        const WINDSPEED = data.wind.speed;
        const WINDDIRECTION = data.wind.deg;

        console.log(WINDSPEED)
        console.log(WINDDIRECTION)

        windSpeed.innerHTML = `The wind speed is ${WINDSPEED}`;
        windDirection.innerHTML = `The wind direction is ${WINDDIRECTION}`
    
        
      }
