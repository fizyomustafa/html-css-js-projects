const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
let clock = () => {
  hour.innerHTML = new Date().getHours().toString().padStart(2, "0");
  minute.innerHTML = new Date().getMinutes().toString().padStart(2, "0");
};

setInterval(clock, 1000);

