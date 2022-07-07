let hor = 00;
let sec = 00;
let min = 00;
var interval;

function start() {
  interval = setInterval(watch, 1000);
}

function pause() {
  clearInterval(interval);
}

function stop() {
  clearInterval(interval);
  sec = 0;
  min = 0;
  document.getElementById("watch-t").innerText = "00:00:00";
}

function watch() {
  sec++;
  if (sec == 60) {
    min++;
    sec = 0;
    if (min == 60) {
      hor++;
      min = 0;
    }
  }
  document.getElementById("watch-t").innerText = hor + ":" + min + ":" + sec;
}
