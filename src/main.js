function updateLocation() {
    let currentTimeElement = document.querySelector(".current-time");
    let currentDateElement = document.querySelector(".current-date");
    let currentTime = moment().tz(moment.tz.guess());

    currentTimeElement.innerHTML = `${currentTime.format("h:mm:ss")} <span class="am-pm">${currentTime.format("A")}</span>`;
    currentDateElement.innerHTML = `${currentTime.format("MMMM Do YYYY")}`;
}

function setTimeDate(location, timezone) {
    let cityElement = document.querySelector(`${location} .city-date`);
    let cityTimeElement = document.querySelector(`${location} .city-time`);
    let cityTime = moment().tz(timezone);

    if (cityElement !== null || cityTimeElement !== null) {
        cityTimeElement.innerHTML = `${cityTime.format("h:mm:ss")} <span class="am-pm">${cityTime.format("A")}</span>`;
        cityElement.innerHTML = `${cityTime.format("MMMM Do YYYY")}`;
    }
}

function updateCityList(event) {
    clearInterval(focusInterval);
    let cityTimeZone = event.target.value;
    if (cityTimeZone !== "") {
        let cityName = cityTimeZone.replace("_", " ").split("/")[1];
        let cityTimeUpdate = moment().tz(cityTimeZone);
        let citiesElement = document.querySelector(".city-main");
        citiesElement.innerHTML = `
        <div class="city-card">
            <div>
                <div class="city-name">${cityName}</div>
                <div class="city-date">${cityTimeUpdate.format("MMMM Do YYYY")}</div>
            </div>
            <div class="city-time">
                <span class="hour">${cityTimeUpdate.format("h:mm:ss")}</span> 
                <span class="am-pm">${cityTimeUpdate.format("A")}</span>
            </div>
        </div>
        <p>💾 <a href="/">Back to save</a></p>
        `;
        focusInterval = setInterval(function(cityTimeZone) {
            let day = citiesElement.querySelector(".city-card .city-date");
            let time = citiesElement.querySelector(".city-card .city-time .hour");
            let amPm = citiesElement.querySelector(".city-card .city-time .am-pm");
            let cityTimeUpdate = moment().tz(cityTimeZone);

            day.innerHTML = cityTimeUpdate.format("MMMM Do YYYY");
            time.innerHTML = cityTimeUpdate.format("h:mm:ss");
            amPm.innerHTML = cityTimeUpdate.format("A");
            
        }, 1000, cityTimeZone);
    }
}

function main() {
    let citySelectElement = document.querySelector("#city-select");
    citySelectElement.addEventListener("change", updateCityList);

    setTimeDate("#new-york", "America/New_York");
    setTimeDate("#london", "Europe/London");
    setTimeDate("#hong-kong", "Asia/Hong_Kong");
    setTimeDate("#tokyo", "Asia/Tokyo");

    setInterval(updateLocation, 1000);
    setInterval(setTimeDate, 1000, "#new-york", "America/New_York");
    setInterval(setTimeDate, 1000, "#london", "Europe/London");
    setInterval(setTimeDate, 1000, "#hong-kong", "Asia/Hong_Kong");
    setInterval(setTimeDate, 1000, "#tokyo", "Asia/Tokyo");
}

let focusInterval;
main();