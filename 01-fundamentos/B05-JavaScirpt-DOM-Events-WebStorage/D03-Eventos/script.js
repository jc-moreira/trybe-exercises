function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
//1
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const fridayList = [4, 11, 18, 25];
const holidayList = [24, 25, 31];
function addDays() {
  for (let day of dezDaysList) {
    let index = 0;
    const newDay = document.createElement("li");
    newDay.classList.add("day");
    if (holidayList.includes(day)) {
      newDay.classList.add("holiday");
    }
    if (fridayList.includes(day)) {
      newDay.classList.add("friday");
    }
    newDay.innerText = day;
    document.getElementById("days").appendChild(newDay);
    index += 1;
  }
}

addDays();

//2
function newHolidayButton(holiday) {
  const newButton = document.createElement("button");
  newButton.classList.add("btn-holiday");
  newButton.innerText = holiday;
  document
    .getElementsByClassName("buttons-container")[0]
    .appendChild(newButton);
}

newHolidayButton("Feriados");

//3
const holidayButton = document.getElementsByClassName("btn-holiday")[0];

function highlightHoliday() {
  const holidays = document.getElementsByClassName("holiday");
  for (let day of holidays) {
    if (day.style.backgroundColor == "rgb(170, 255, 170)") {
      day.style.backgroundColor = "rgb(238,238,238)";
    } else {
      day.style.backgroundColor = "rgb(170, 255, 170)";
    }
  }
}

holidayButton.addEventListener("click", highlightHoliday);

//4
function newFridayButton(friday) {
  const newButton = document.createElement("button");
  newButton.classList.add("btn-friday");
  newButton.innerText = friday;
  document
    .getElementsByClassName("buttons-container")[0]
    .appendChild(newButton);
}

newFridayButton("Sexta-feira");

//5
const fridayButton = document.getElementsByClassName("btn-friday")[0];

function changeFriday() {
  const fridays = document.getElementsByClassName("friday");
  for (let i in fridays) {
    if (fridays[i].innerText !== "Sextou!!!") {
      fridays[i].innerText = "Sextou!!!";
      fridays[i].style.backgroundColor = "SkyBlue";
    } else {
      fridays[i].innerText = fridayList[i];
      fridays[i].style.backgroundColor = "rgb(238, 238, 238)";
    }
  }
}

fridayButton.addEventListener("click", changeFriday);

//6
const dayList = document.getElementsByClassName("day");
for (const day of dayList) {
  function zoomDayIn() {
    day.style.fontSize = "150%";
    day.style.fontWeight = "600";
  }

  function zoomDayOut() {
    day.style.fontSize = null;
    day.style.fontWeight = null;
  }

  day.addEventListener("mouseover", zoomDayIn);
  day.addEventListener("mouseout", zoomDayOut);
}

//7
function newTask(taskName) {
  let task = document.createElement("span");
  task.innerText = taskName;
  document.getElementsByClassName("my-tasks")[0].appendChild(task);
}

function newTask2(taskName) {
  let task = document.createElement("span");
  task.innerText = taskName;
  document.getElementsByClassName("my-tasks")[0].appendChild(task);
}
newTask("Projeto Pixels Art");

//8
function newTaskColor(color) {
  let taskColor = document.createElement("div");
  taskColor.classList.add("task");
  taskColor.style.backgroundColor = color;
  document.getElementsByClassName("my-tasks")[0].appendChild(taskColor);
}

newTaskColor("green");

//9
const myTask = document.getElementsByClassName("task")[0];

function TaskSelect(event) {
  if (myTask.classList == "task selected") {
    myTask.classList.remove("selected");
  } else {
    myTask.classList.add("selected");
  }
}

myTask.addEventListener("click", TaskSelect);

//10
for (const day of dayList) {
  function selectDay() {
    if (day.style.color !== myTask.style.backgroundColor){
      day.style.color = myTask.style.backgroundColor;
    }
    else {
      day.style.color =  'rgb(119,119,119)';
    }
  }

  day.addEventListener("click", selectDay);
}

//BONUS

let botaoCompromisso = document.getElementById('btn-add');
let taskInput = document.getElementById('task-input')
function newCompromisso() {
  let input = document.getElementById('task-input').value;
  let compromisso = document.createElement('li');
  compromisso.innerText = input;
  if (input.length !== 0){
  document.getElementsByClassName('task-list')[0].appendChild(compromisso);
  }
  else{
    alert("ERRO! Campo vazio!")
  }
}

function inputEnter(button){
  if (button.keyCode == 13){
    newCompromisso();
  }
}


botaoCompromisso.addEventListener('click', newCompromisso);
taskInput.addEventListener('keyup', inputEnter);