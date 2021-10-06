let searchEL = document.querySelector("#search");
let results = document.querySelector("#weather");
let day1 = document.querySelector("#day1");
let day2 = document.querySelector("#day2");
let day3 = document.querySelector("#day3");
let day4 = document.querySelector("#day4");
let day5 = document.querySelector("#day5");
let form = document.querySelector("#form");
let ul = document.querySelector("#savedCity");
let button = document.querySelector("button");
let input = document.getElementById("item");
let apiKey = "&appid=2cd9d91e9448c1dfc0ccd7c1ee798680"
let apiKeyDays = "&cnt=5&appid=2cd9d91e9448c1dfc0ccd7c1ee798680"
let apiBaseURL = "https://api.openweathermap.org/data/2.5/weather?q="
let apiFuture = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&cnt=5"

$(document).ready(function () {
    $("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'))



})


console.log("I am here")

form.addEventListener("submit", conductSearch);
//button.onclick = input;

function conductSearch(event) {
    event.preventDefault();
    let search = document.querySelector("#input").value;
    let apiCurrentWeather = apiBaseURL + search + apiKey;



    console.log(search);


    fetchApi(apiCurrentWeather)



    function fetchApi(apiCurrentWeather) {
        fetch(apiCurrentWeather)
            .then(function (response) {
                return response.json();


            })
            .then(function (data) {


                console.log(data);
                results.innerHTML = ""

                results.innerHTML += `<h3> ${data.name}</h3>`;


                document.body.querySelector("#weather").innerHTML



                let apiFutureDays = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&cnt=5&appid=2cd9d91e9448c1dfc0ccd7c1ee798680`

                fetch(apiFutureDays)
                console.log(apiFutureDays)
                fetch(apiFutureDays)
                    .then(function (response) {
                        return response.json();

                    })
                    .then(function (data1) {
                        results.innerHTML = "";
                        results.innerHTML += `<h3> ${data.name}</h3>`;


                        document.body.querySelector("#weather").innerHTML

                        let uviBadge = document.createElement("button")
                        let uviElement = document.createElement('p')
                        console.log(data1);
                        results.innerHTML += `<img src= https://openweathermap.org/img/w/${data1.daily[0].weather[0].icon}.png></img>`;
                        results.innerHTML += `<p>Temp  ${parseInt(data1.current.temp - 273)} °C </p>`;
                        results.innerHTML += `<p>Pressure ${data1.current.pressure} hPa </p>`;
                        results.innerHTML += `<p>Visibility ${data1.current.visibility / 1000} km</p>`;
                        results.innerHTML += `<p>Wind speed ${data1.current.wind_speed} MPH</p>`;
                        results.innerHTML += `<p>Humitdity ${data1.current.humidity} % </p>`;
                        uviElement.textContent = `UV Index ${data1.current.uvi}`;
                        uviBadge.append(uviElement)
                        console.log("uvi badge", uviBadge)
                        results.append(uviBadge);

                        if (data1.current.uvi < 2) {
                            uviBadge.setAttribute('class', "btn-success btn btn-sm")
                        } else if (data1.current.uvi < 5) {
                            uviBadge.setAttribute('class', 'btn-warning btn btn-sm')
                        } else {
                            uviBadge.setAttribute("class", 'btn-danger btn btn-sm')
                        }
                        document.body.querySelector("#weather")



                        document.querySelector("#day1")
                        console.log(data1);
                        day1.innerHTML = "";
                        $("#day1").text(moment().add(1, 'days').format('DD/MM/YYYY'))
                        day1.innerHTML += `<img src= https://openweathermap.org/img/w/${data1.daily[1].weather[0].icon}.png></img>`;
                        day1.innerHTML += `<p>Temp  ${parseInt(data1.daily[1].temp.day - 273)} °C </p>`;
                        day1.innerHTML += `<p>Wind Speed  ${data1.daily[1].wind_speed} MPH </p>`;
                        day1.innerHTML += `<p>Humidity  ${data1.daily[1].humidity} % </p>`;


                        document.querySelector("#day2")
                        console.log(data1);
                        day2.innerHTML = "";
                        $("#day2").text(moment().add(2, 'days').format('DD/MM/YYYY'))
                        day2.innerHTML += `<img src= https://openweathermap.org/img/w/${data1.daily[2].weather[0].icon}.png></img>`;
                        day2.innerHTML += `<p>Temp  ${parseInt(data1.daily[2].temp.day - 273)} °C </p>`;
                        day2.innerHTML += `<p>Wind Speed  ${data1.daily[2].wind_speed} MPH </p>`;
                        day2.innerHTML += `<p>Humidity  ${data1.daily[2].humidity} % </p>`;

                        document.querySelector("#day3")
                        console.log(data1);
                        day3.innerHTML = "";
                        $("#day3").text(moment().add(3, 'days').format('DD/MM/YYYY'))
                        day3.innerHTML += `<img src= https://openweathermap.org/img/w/${data1.daily[3].weather[0].icon}.png></img>`;
                        day3.innerHTML += `<p>Temp  ${parseInt(data1.daily[3].temp.day - 273)} °C </p>`;
                        day3.innerHTML += `<p>Wind Speed  ${data1.daily[3].wind_speed} MPH </p>`;
                        day3.innerHTML += `<p>Humidity  ${data1.daily[3].humidity} % </p>`;

                        document.querySelector("#day4")
                        day4.innerHTML = "";
                        console.log(data1);
                        $("#day4").text(moment().add(4, 'days').format('DD/MM/YYYY'))
                        day4.innerHTML += `<img src= https://openweathermap.org/img/w/${data1.daily[4].weather[0].icon}.png></img>`;
                        day4.innerHTML += `<p>Temp  ${parseInt(data1.daily[4].temp.day - 273)} °C </p>`;
                        day4.innerHTML += `<p>Wind Speed  ${data1.daily[4].wind_speed} MPH </p>`;
                        day4.innerHTML += `<p>Humidity  ${data1.daily[4].humidity} % </p>`;

                        document.querySelector("#day5")
                        day5.innerHTML = "";
                        console.log(data1);
                        $("#day5").text(moment().add(5, 'days').format('DD/MM/YYYY'))
                        day5.innerHTML += `<img src= https://openweathermap.org/img/w/${data1.daily[5].weather[0].icon}.png></img>`;
                        day5.innerHTML += `<p>Temp  ${parseInt(data1.daily[5].temp.day - 273)} °C </p>`;
                        day5.innerHTML += `<p>Wind Speed  ${data1.daily[5].wind_speed} MPH </p>`;
                        day5.innerHTML += `<p>Humidity  ${data1.daily[5].humidity} % </p>`;

                        let forecastDiv = document.getElementById("forecast")
                        forecastDiv.append(day1, day2, day3, day4, day5)
                    });



                let searchData = search
                let searchArray = JSON.parse(localStorage.getItem("searchArray"))||[]
                if (searchArray.indexOf(searchData) == -1){
                    
                
                //compare if searchData already exist inside searchArray before doing the push
                searchArray.push(searchData);
                }
                console.log(searchArray)


               





                localStorage.setItem("searchArray", JSON.stringify(searchArray))
                console.log(searchArray)





                renderSearchHistory(searchArray);


            });





    }





}

function renderSearchHistory(searchArray) {
    // let retrieved = []
    // if (localStorage.getItem("searchArray")) {
    //     let stored = localStorage.getItem("searchArray")
    //     let split = stored.split(",")
    //     let combined = retrieved.concat(split)
    //     console.log(combined)
    //     for (i = 0; i < combined.length; i++) {
    //         if (searchArray.indexOf(combined[i]) === -1) {
    //             searchArray.push(combined[i])
    //         }

    //     }
    // }


    document.querySelector("#savedCity")
    ul.innerHTML = ""
    console.log(searchArray);

    for (let i = 0; i < searchArray.length; i++) {
        ul.innerHTML += `<li>${searchArray[i]}</li>`
        
        
    }

}

let search = searchArray
searchArray.addEventListener("on click", conductSearch);
