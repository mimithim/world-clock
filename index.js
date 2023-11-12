function updateTime() {
  // Los Angeles
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkTime.format("MMMM	Do YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM	Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let perthElement = document.querySelector("#perth");
  if (perthElement) {
    let perthDateElement = perthElement.querySelector(".date");
    let perthTimeElement = perthElement.querySelector(".time");
    let perthTime = moment().tz("Australia/Perth");

    perthDateElement.innerHTML = perthTime.format("MMMM	Do YYYY");
    perthTimeElement.innerHTML = perthTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let seoulElement = document.querySelector("#seoul");
  if (seoulElement) {
    let seoulDateElement = seoulElement.querySelector(".date");
    let seoulTimeElement = seoulElement.querySelector(".time");
    let seoulTime = moment().tz("Asia/Seoul");

    seoulDateElement.innerHTML = seoulTime.format("MMMM	Do YYYY");
    seoulTimeElement.innerHTML = seoulTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let colomboElement = document.querySelector("#colombo");
  if (colomboElement) {
    let colomboDateElement = colomboElement.querySelector(".date");
    let colomboTimeElement = colomboElement.querySelector(".time");
    let colomboTime = moment().tz("Asia/Colombo");

    colomboDateElement.innerHTML = colomboTime.format("MMMM	Do YYYY");
    colomboTimeElement.innerHTML = colomboTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
   <a href="index.html">Back to homepage</a>  
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
