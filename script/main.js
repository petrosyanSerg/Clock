//Clock
const deg = 6;
const hourseElement = document.querySelector(".hr");
const minuteElement = document.querySelector(".mn");
const secondElement = document.querySelector(".sec");
//Date
const dayElement = document.querySelector(".dayname");
const fullDate = document.querySelector(".date_day");

const dayNameArray = [
  "Կիրակի",
  "Երկուշաբթի",
  "Երեքշաբթի",
  "Չորեքշաբթի",
  "Հինգշաբթի",
  "Ուրբաթ",
  "Շաբաթ",
];

setInterval(() => {
  let thisDate = new Date();
  let day = thisDate.getDay();
  let mounth = thisDate.getMonth() + 1;
  let year = thisDate.getFullYear();
  let dateDay = thisDate.getDate();
  let hourse = thisDate.getHours() * 30;
  let minute = thisDate.getMinutes() * deg;
  let second = thisDate.getSeconds() * deg;
  hourseElement.style.transform = ` rotateZ(${hourse + minute / 12}deg)`;
  minuteElement.style.transform = ` rotateZ(${minute}deg)`;
  secondElement.style.transform = ` rotateZ(${second}deg)`;
  dayElement.innerText = `${dayNameArray[day]}`;
  fullDate.innerText = `${dateDay}|${mounth}|${year}`;
});
