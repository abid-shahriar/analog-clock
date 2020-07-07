setInterval(setClock, 1000);
const hourHand = document.querySelector(".hour");
const minHand = document.querySelector(".min");
const secHand = document.querySelector(".sec");

setClock();

function setClock() {
  const currentTime = new Date();

  const secRatio = currentTime.getSeconds() / 60;
  const minRatio = (secRatio + currentTime.getMinutes()) / 60;
  const hourRatio = (minRatio + currentTime.getHours()) / 12;

  setRotation(hourHand, hourRatio);
  setRotation(minHand, minRatio);
  setRotation(secHand, secRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--handRotate", rotationRatio * 360);
}

const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const btn = document.querySelector(".color-btn");
const color = document.querySelector(".color");

btn.addEventListener("click", randomColorGenerator);

function randomColorGenerator() {
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    randomColor += hex[blah()];
  }
  color.innerHTML = randomColor;
  document.body.style.backgroundColor = randomColor;
}

let blah = () => Math.floor(Math.random() * hex.length);
