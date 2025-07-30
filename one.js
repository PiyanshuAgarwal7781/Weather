
let form = document.querySelector("form")
form.addEventListener("submit", (eve) => {
    eve.preventDefault()
    let input = document.querySelector("input");
    let city = input.value;
    let api_key = '34041fa45deab7aa23b53a7db04992c8'
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    console.log(url)
    fetch(url)
        .then((detail) => detail.json())
        .then((data) => {
            console.log(data)
            location.innerText = `CITY:${city.toUpperCase()}`
            temp.innerText = `Temperature:${data.main.feels_like}°F`
            humidity.innerText = `${data.wind.speed}KM/H`
            wind.innerText = `${data.main.humidity}%`
            let weatherCondition = data.weather[0].main.toLowerCase();
            type.innerText = `WEATHER:${data.weather[0].main.toUpperCase()}`
            if (weatherCondition == "clear") {
                imageElement.src = "IMAGES/clear.png";
            } else if (weatherCondition == "cloud") {
                imageElement.src = "Images/cloud.png";
            } else if (weatherCondition == "rain") {
                imageElement.src = "IMAGES/rain.png";
            } else if (weatherCondition == "haze" || weatherCondition == "mist") {
            imageElement.src = "IMAGES/haze.png";
            } else if (weatherCondition == "snow") {
                imageElement.src = "IMAGES/snow.png";
            }
        })
        .catch((error) => {
            // temp.innerText=`Temperature:INVAILDE`
            // humidity.innerText=`INVAILDE`
            // wind.innerText=`INVAILDE`
            // let weatherCondition = data.weather[0].main.toLowerCase(); 
            // type.innerText=`WEATHER:INVAILDE`
            // location.innerText = `Enter a valid city`
        });

    let temp = document.querySelector("#temp")
    let location = document.querySelector("#city")
    let humidity = document.querySelector(".wind")
    let wind = document.querySelector(".humidity")
    let imageElement = document.querySelector("img")
    let type = document.querySelector("#type")
    // let error=document.querySelector("#error")



})
