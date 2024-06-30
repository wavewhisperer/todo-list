const API_KEY = "dbe719dbf6cc8a3ab27ed06288bae43e";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = ` ${data.main.temp}°C`;
      changeIcon(data);
    });
}

function onGeoError() {
  alert("날씨 위치를 찾을 수 없습니다");
}

function changeIcon(data) {
  const weather = data.weather[0]["main"];
  const icon = document.querySelector(".description-icon");

  let iconClass = "";

  switch (weather) {
    case "Clear":
      iconClass = "fa-sun";
      break;
    case "Clouds":
      iconClass = "fa-cloud-sun";
      break;
    case "Rain":
      iconClass = "fa-umbrella";
      break;
    default:
      // 기본 아이콘
      iconClass = "fa-question";
  }

  icon.classList.add("fas", iconClass);
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
