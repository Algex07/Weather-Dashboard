let searchEL = document.querySelector("#search");
let results = document.querySelector("#weather");
let day1 =document.querySelector("#day1");
let day2 =document.querySelector("#day2");
let day3 =document.querySelector("#day3");
let day4 =document.querySelector("#day4");
let day5 =document.querySelector("#day5");
let form = document.querySelector("#form");
let apiKey = "&appid=2cd9d91e9448c1dfc0ccd7c1ee798680"
let apiKeyDays = "&cnt=5&appid=2cd9d91e9448c1dfc0ccd7c1ee798680"
let apiBaseURL = "https://api.openweathermap.org/data/2.5/weather?q="
let apiFuture = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&cnt=5"



$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'))
$("#day1").text(moment().add(1, 'day').format('dddd MMMM Do YYYY'))
$("#day2").text(moment().add(2, 'days').format('dddd MMMM Do YYYY'))
$("#day3").text(moment().add(3, 'days').format('dddd MMMM Do YYYY'))
$("#day4").text(moment().add(4, 'days').format('dddd MMMM Do YYYY'))
$("#day5").text(moment().add(5, 'days').format('dddd MMMM Do YYYY'))
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
                 results.innerHTML += `<p>Wind speed ${data1.current.wind_speed} MPH</p>`;
                 results.innerHTML += `<p>Humitdity ${data1.current.humidity} % </p>`;
                 results.innerHTML += `<p> UV Index ${data1.current.uvi}</p>`;
                 document.body.querySelector("#weather")
                
                
                 
                 document.querySelector("#day1")
                 console.log(data1);
                 day1.innerHTML += `<p>${data1.daily[1].weather[0].icon}</p>`;
                 day1.innerHTML += `<p>Temp  ${parseInt(data1.daily[1].temp.day-273)} °C </p>`;
                 day1.innerHTML += `<p>Wind Speed  ${data1.daily[1].wind_speed} MPH </p>`;
                 day1.innerHTML += `<p>Humidity  ${data1.daily[1].humidity} % </p>`;
                
                
                 document.querySelector("#day2")
                 console.log(data1);
                 day2.innerHTML += `<p>Temp  ${parseInt(data1.daily[2].temp.day-273)} °C </p>`;
                 day2.innerHTML += `<p>Wind Speed  ${data1.daily[2].wind_speed} MPH </p>`;
                 day2.innerHTML += `<p>Humidity  ${data1.daily[2].humidity} % </p>`;

                 document.querySelector("#day3")
                 console.log(data1);
                 day3.innerHTML += `<p>Temp  ${parseInt(data1.daily[3].temp.day-273)} °C </p>`;
                 day3.innerHTML += `<p>Wind Speed  ${data1.daily[3].wind_speed} MPH </p>`;
                 day3.innerHTML += `<p>Humidity  ${data1.daily[3].humidity} % </p>`;

                 document.querySelector("#day4")
                 console.log(data1);
                 day4.innerHTML += `<p>Temp  ${parseInt(data1.daily[4].temp.day-273)} °C </p>`;
                 day4.innerHTML += `<p>Wind Speed  ${data1.daily[4].wind_speed} MPH </p>`;
                 day4.innerHTML += `<p>Humidity  ${data1.daily[4].humidity} % </p>`;

                 document.querySelector("#day5")
                 console.log(data1);
                 day5.innerHTML += `<p>Temp  ${parseInt(data1.daily[5].temp.day-273)} °C </p>`;
                 day5.innerHTML += `<p>Wind Speed  ${data1.daily[5].wind_speed} MPH </p>`;
                 day5.innerHTML += `<p>Humidity  ${data1.daily[5].humidity} % </p>`;


             });
             
                 
                 
                 
        });
    }
        

        

    

    
    
   

