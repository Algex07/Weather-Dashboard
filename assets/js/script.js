let searchEL = document.querySelector("#search");
let results = document.querySelector("#weather");
let form = document.querySelector("#form");
let apiKey = "&appid=2cd9d91e9448c1dfc0ccd7c1ee798680"
let apiKeyDays = "&cnt=5&appid=2cd9d91e9448c1dfc0ccd7c1ee798680"
let apiBaseURL = "https://api.openweathermap.org/data/2.5/weather?q="
let apiFuture = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&cnt=5"



$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'))
// var a = moment().toString();
//          document.getElementById("todaysdate").innerHTML = a;

console.log("I am here")

form.addEventListener("submit", conductSearch);

function conductSearch(event) {
    event.preventDefault();
    let search = document.querySelector("#input").value;
    let apiCurrentWeather = apiBaseURL + search + apiKey;
   

    console.log(search);


    fetchApi(apiCurrentWeather)
}
console.log("I am here")

function fetchApi(apiCurrentWeather) {
    fetch(apiCurrentWeather)
        .then(function (response) {
            return response.json();


        })
        .then(function (data) {

                
            console.log(data);
            results.innerHTML = ""
           
            results.innerHTML += `<h3> ${data.name}</h3>`;
            

           // document.body.querySelector("#weather").innerHTML 

        
        console.log(data.coord.lat);
        console.log(data.coord.lon);
        let apiFutureDays = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&cnt=5&appid=2cd9d91e9448c1dfc0ccd7c1ee798680`   
        
        fetch(apiFutureDays)
             console.log(apiFutureDays)
             fetch(apiFutureDays)
             .then(function (response) {
                 return response.json();
     
                 })
             .then(function (data1) {
                     
                 console.log(data1);
                 results.innerHTML += `<p>Temp  ${parseInt(data1.current.temp-273)} °C </p>`;
                 results.innerHTML += `<p>Pressure ${data1.current.pressure} hPa </p>`;
                 results.innerHTML += `<p>Visibility ${data1.current.visibility/1000} km</p>`;
                 results.innerHTML += `<p>Wind speed ${data1.current.weather.wind_speed} MPH</p>`;
                 results.innerHTML += `<p>Humitdity ${data1.current.humidity} % </p>`;
                 results.innerHTML += `<p> UV Index ${data1.current.uvi}</p>`;
                 document.body.querySelector("weather")
             });
             
                 document.querySelector("day1")
                 console.log(data1);
                 
                 
        });
    }
        

        

    

    
    
   

