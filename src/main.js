
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
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTimeUpdate = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector(".city-main");
    citiesElement.innerHTML = `
    <div class="city-card">
        <div>
            <div class="city-name">${cityName}</div>
            <div class="city-date">${cityTimeUpdate.format("MMMM Do YYYY")}</div>
        </div>
        <div class="city-time">${cityTimeUpdate.format("h:mm:ss")} 
            <span class="am-pm">${cityTimeUpdate.format("A")}</span>
        </div>
    </div>
    `;
}


function main() {
    let citySelectElement = document.querySelector("#city-select");
    citySelectElement.addEventListener("change", updateCityList);
    
    setTimeDate("#new-york", "America/New_York");
    setTimeDate("#london", "Europe/London");
    setTimeDate("#hong-kong", "Asia/Hong_Kong");
    setTimeDate("#tokyo", "Asia/Tokyo");

    setInterval(setTimeDate, 1000, "#new-york", "America/New_York");
    setInterval(setTimeDate, 1000, "#london", "Europe/London");
    setInterval(setTimeDate, 1000, "#hong-kong", "Asia/Hong_Kong");
    setInterval(setTimeDate, 1000, "#tokyo", "Asia/Tokyo");
}

main();