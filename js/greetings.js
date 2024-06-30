const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutForm = document.querySelector("#logout-form");
const todoContainer = document.querySelector("#todo-container__column");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  //브라우저의 기본 동작을 막아줌
  event.preventDefault();
  //loginForm을 다시 숨겨줌
  loginForm.classList.add(HIDDEN_CLASSNAME);
  //loginInput.value를 username이라는 변수로 저장
  const username = loginInput.value;
  //변수값(username)을 localStorage에 USERNAME_KEY라는 이름으로 저장함
  localStorage.setItem("USERNAME_KEY", username);
  //paintGreetings 함수를 호출하고 input값을 인자로 넣음
  paintGreetings(username);
  //logoutForm을 보여줌
  showLogoutForm();
  showTodoContainer();
}

function paintGreetings(name) {
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
  //비어있는 h1요소안에 텍스트 추가
  greeting.innerText = `${capitalizedName}'s todo-list`;
  //h1에서 hidden이라는 class명을 제거
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

//logout버튼
function showLogoutForm() {
  //숨겼던 logoutForm을 보여준다
  logoutForm.classList.remove(HIDDEN_CLASSNAME);
}

function showTodoContainer() {
  todoContainer.classList.remove(HIDDEN_CLASSNAME);
}

//저장되어있는 username을 변수로 지정
const savedUsername = localStorage.getItem("USERNAME_KEY");
console.log(savedUsername);

//저장된 username이 없으면
if (savedUsername === null) {
  //loginForm의 hidden클래스를 제거해 Form이 화면에 표시
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  //submit event가 발생하면 onLoginSubmit이 실행됨
  loginForm.addEventListener("submit", onLoginSubmit);

  //저장된 username이 있으면
} else {
  //h1발생(save된 username을 불러옴)
  paintGreetings(savedUsername);
  //로그아아웃 form(버튼)을 보여줌
  showLogoutForm();
  showTodoContainer();
}

//저장된 정보들을 모두 지움
function clearLocalStorage(event) {
  event.preventDefault();
  alert("로그아웃시 모든 정보가 초기화 됩니다. 로그아웃 하시겠습니까?");
  localStorage.clear();
  location.reload();
}

//logout버튼을 누르면 clearLocalStorage가 실행됨
logoutForm.addEventListener("submit", clearLocalStorage);
