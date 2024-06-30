const datetimeContainer = document.querySelector("#datetime-container");
const timeDisplay = document.querySelector("h2#clock");
const dateDisplay = document.querySelector("h3#date");

function getClock() {
  const date = new Date();

  //시간
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const formattedTime = `${hours}:${minutes}:${seconds}`;
  //시간표시
  timeDisplay.innerText = formattedTime;
}

function getDate() {
  const date = new Date();

  //요일
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = days[date.getDay()];
  //날짜
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const formattedDate = `${year}.${month}.${day}`;

  //날짜표시
  dateDisplay.innerText = `${formattedDate} ${dayOfWeek}`;
}

//페이지가 로드되면 즉시 날짜와 시간이 나타남
getDate();
getClock();
setInterval(getClock, 1000);
