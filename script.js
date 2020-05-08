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
