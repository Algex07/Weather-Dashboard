
let searchEL = document.querySelector("#search");
let results = document.querySelector("#weather");
let form = document.querySelector("#form");
let apiKey = "&appid=2cd9d91e9448c1dfc0ccd7c1ee798680"
let apiBaseURL = "https://api.openweathermap.org/data/2.5/weather?q="
let apiFuture = "https://api.openweathermap.org/data/2.5/forecast/daily?"
let fiveDays = "&cnt=5"
var a = moment().toString();
         document.getElementById("todaysdate").innerHTML = a;
console.log("I am here")

form.addEventListener("submit", conductSearch);

function conductSearch(event) {
    event.preventDefault();
    let search = document.querySelector("#input").value;
    let apiCurrentWether = apiBaseURL + search + apiKey;

    console.log(search);


    fetchApi(apiCurrentWether)
}

function fetchApi(apiCurrentWether) {
    fetch(apiCurrentWether)
        .then(function (response) {
            return response.json();


        })
        .then(function (data) {
            console.log(data);
            results.innerHTML = ""
           
            results.innerHTML += `<h3> ${data.name}</h3>`;
            results.innerHTML += `<p>Temp  ${parseInt(data.main.temp-273)} °C </p>`;
            results.innerHTML += `<p>Pressure ${data.main.pressure} hPa </p>`;
            results.innerHTML += `<p>Visibility ${data.visibility/1000} km</p>`;
            results.innerHTML += `<p>Wind speed ${data.wind.speed} MPH</p>`;
            results.innerHTML += `<p>Humitdity ${data.main.humidity} % </p>`;

            //results.innerHTML = `${data}`;
            //for (let i = 0; i < data.results.lenght; i++) {
                
        
            //console.log(JSON.stringify(results));
            document.body.querySelector("#weather").innerHTML 



        });

        //function displayResults(data){

   
    //= `<p> ${data} <p>`,
     //   `<p>${data.main.temp}<p>`

    }
    // GIVEN a weather dashboard with form inputs
    // WHEN I search for a city
    // THEN I am presented with current and future conditions for that city and that city is added to the search history
    // WHEN I view current weather conditions for that city
    // THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
    // WHEN I view the UV index
    // THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
    // WHEN I view future weather conditions for that city
    // THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
    // WHEN I click on a city in the search history
    // THEN I am again presented with current and future conditions for that city
        













