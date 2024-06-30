const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

//할 일 목록을 배열로 저장
let toDos = [];

//배열을 localStorage에 저장-이때 배열을 문자열로 변환
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  //화면에서 삭제
  li.remove();
  //데이터 삭제
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button1 = document.createElement("button");
  button1.innerText = "✔";
  button1.classList.add("custom-button-1");
  const button2 = document.createElement("button");
  button2.innerText = "✖";
  button2.classList.add("custom-button-2");
  button1.addEventListener("click", function () {
    li.classList.toggle("completed");
  });
  button2.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button1);
  li.appendChild(button2);

  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  //input의 현재 value를 새로운 변수에 복사
  //input의 value를 비우기 전의 값을 나타내는 string
  const newTodo = toDoInput.value;
  //입력값을 비워 사용자가 다음 입력을 할 수 있도록 함
  toDoInput.value = "";
  //toDos의 각 값에 id를 부여한 object를 만듦
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
    is_done: false,
  };
  //toDos배열 끝에 새로운 newTodo object를 추가함
  toDos.push(newTodoObj);
  //newTodo의 입력값은 paintToDo에 넣어서 호출
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
