
let searchEL = document.querySelector("#search");
let results = document.querySelector("#weather");
let form = document.querySelector("#form");
let apiKey = "&appid=2cd9d91e9448c1dfc0ccd7c1ee798680"
let apiBaseURL = "https://api.openweathermap.org/data/2.5/weather?q="
let apiFuture = "https://api.openweathermap.org/data/2.5/forecast/daily?"
let fiveDays = "&cnt=5"



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
            displayResults(data);




        });

        function displayResults(data){

    results.innerHTML = `${data}`;
    for (let i = 0; i < data.results.lenght; i++) {
        results.innerHTML += `<h3> ${data[i].name}</h3>
        `

    console.log(results);
    document.body.querySelector("#weather").innerHTML = `<p> ${data} <p>`,
        `<p>${data.main.temp}<p>`

    }

        }


}










