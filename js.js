let body = document.querySelector("#body");
let title = document.querySelector("#title");
let welcome = document.querySelector("#welcome")
let bottom = document.querySelector("#bottom");
let bottom_ = document.querySelector("#bottom_");

body.style.backgroundColor = "rgb(96, 96, 96)"
body.style.color = "rgb(255, 165, 0)"
body.style.fontStyle = "Arial"
body.style.fontSize = "32px"

title.innerHTML = "KODLUYORUZ" //title is printed on the screen.

let user_name = prompt("What is your name?") //take the user's name.
welcome.innerHTML = `Hello <strong>${user_name}</strong>, Welcome!` ?? "" //welcome.
welcome.style.fontSize = "100%"
welcome.style.lineHeight = "0.5"


// data information.
function startTime() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const today = new Date();
  let d = days[today.getDay() - 1];
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  date.innerHTML = h + ":" + m + ":" + s + " " + d;
  date.style.fontSize = "100%"
  date.style.lineHeight = "1"
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}

startTime()


let text = "Kodluyoruz Frontend Wep Development Bootcamp";
bottom.innerHTML = ` <strong>${text}</strong>` //bottom info.
bottom.style.fontSize = "100%"


let text_ = "You are in the 1st Homework of the Javascript section."
bottom_.innerHTML = `${text_}` //bottom info.
bottom_.style.fontSize ="80%"
