const apikey = "23546d06ea698c8cf0ec4ca9c8835a7a";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searbox = document.querySelector(".box input");
const searbtn = document.querySelector(".box button");

async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
}

searbtn.addEventListener("click", function(event) {
    event.preventDefault();
    checkWeather(searbox.value);
});

checkWeather();