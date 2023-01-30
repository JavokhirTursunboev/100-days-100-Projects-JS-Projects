let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

let clock = setInterval(function time() {
  let data_now = new Date();
  let hr = data_now.getHours();
  let min = data_now.getMinutes();
  let sec = data_now.getSeconds();

  if (hr < 10) {
    hr = "0" + hr;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  hour.textContent = hr;
  minute.textContent = min;
  second.textContent = sec;
}, 1000);
