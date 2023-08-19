var timer = 10;
var score = 0;
var hitrn = 0;

function increaseScore() {
  score += 10;

  document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}
function makeBubble() {
  var clutter = "";

  for (var i = 0; i <= 152; i++) {
    let vh = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${vh}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}
function runTimer() {
  var timerinterval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerinterval);
      document.querySelector("#pbtm").innerHTML = `<h1>game over </h1>`;
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var clicknum = Number(dets.target.textContent);
  if (clicknum === hitrn) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});
runTimer();
makeBubble();
getNewHit();
