
function setTimeDate(location, timezone) {
    let cityTimeElement = document.querySelector(`${location} .city-time`);
    let cityTime = moment().tz(timezone);
    cityTimeElement.innerHTML = `${cityTime.format("h:mm:ss")} <span class="am-pm">${cityTime.format("A")}</span>`;
    
    let cityElement = document.querySelector(`${location} .city-date`);
    cityElement.innerHTML = `${cityTime.format("MMMM Do YYYY")}`;
}

setTimeDate("#new-york", "America/New_York");
setTimeDate("#london", "Europe/London");
setTimeDate("#hong-kong", "Asia/Hong_Kong");
setTimeDate("#tokyo", "Asia/Tokyo");

setInterval(setTimeDate, 1000, "#new-york", "America/New_York");
setInterval(setTimeDate, 1000, "#london", "Europe/London");
setInterval(setTimeDate, 1000, "#hong-kong", "Asia/Hong_Kong");
setInterval(setTimeDate, 1000, "#tokyo", "Asia/Tokyo");