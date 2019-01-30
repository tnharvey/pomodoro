let seconds = 0;
let minutes = 25;
let sessionTime = 25;
let breakTime = 5;
let longBreakTime = 30;
let playing = false;
let mode = "session";
let sessions = 0;
// time runs, switch to break
let timer;

function runTimer () {
  playing = true;
  timer = setInterval(function () {
      if (seconds === 0 && minutes > 0) {
          minutes -= 1;
          seconds += 60;
          document.querySelector(".minutes").textContent = formatTime(minutes);
      }
      if (seconds > 0) {
          seconds -= 1;
          document.querySelector(".seconds").textContent = formatTime(seconds);
      }
      else {
          stopTimer(timer);
          document.querySelector(".seconds").textContent = formatTime(seconds);
          switchMode();
      }
  }, 1000);   
}

function stopTimer (timerObject) {
  clearInterval(timerObject);
  playing = false;
}

function switchMode() {
    if (mode == "session") {
        if (sessions < 3) {
          mode = "break";
          minutes = breakTime;
          seconds = 0;
          console.log(sessions);
        }
        else {
          mode = "long break";
          minutes = longBreakTime;
          seconds = 0;
          
          console.log("long break");
        }
    }
    else {
      if (mode == "long break") {
        sessions = 0;
        let tasks = document.getElementsByClassName("task");
        for (i=0;i<tasks.length;i++) {
          tasks[i].classList.add("incomplete");
          tasks[i].classList.remove("complete");
        }
        
        document.querySelector("#tracker1").classList.add("complete");
        document.querySelector("#tracker1").classList.remove("incomplete");
      }
      else {
        sessions+=1;
        document.querySelector(".incomplete").classList.add("complete");
        document.querySelector(".incomplete").classList.remove("incomplete");
//         Array.from(document.querySelectorAll(".task")).map((x) => {
//           if ()
//         })
        
      }
      mode = "session";
      minutes = sessionTime;
      seconds = 0;
      console.log("session");
    } 
    runTimer();
}

function formatTime (time) {
  let timeString = "";
  
  if (time < 10) {
    return "0" + time;
  }
  else {
    return time;
  }
}

function switchPlayButton () {
    if (document.getElementById("playControl").classList.contains("play")) {
        document.querySelector("#playControl").classList.remove("play");
        document.querySelector("#playControl").classList.add("pause");
        document.querySelector("i.fa-play").classList.add("hidden");
        document.querySelector("i.fa-pause").classList.remove("hidden");
        runTimer();
        document.getElementById("stopControl").disabled = true;
    }
    else {
        stopTimer(timer);
        document.querySelector("#playControl").classList.remove("pause");
        document.querySelector("#playControl").classList.add("play");
        document.querySelector("i.fa-pause").classList.add("hidden");
        document.querySelector("i.fa-play").classList.remove("hidden");
        document.getElementById("stopControl").disabled = false;
    }
}

    document.querySelector(".stop").onclick = () => {
    if (playing === false) {
      sessionTime = document.getElementById("sessionTime").value;
      minutes = sessionTime;
      seconds = 0;
      document.querySelector(".minutes").textContent = formatTime(minutes);
      document.querySelector(".seconds").textContent = formatTime(seconds);
    }
  };
  


document.getElementById("sessionTime").addEventListener("change", () => {
  sessionTime = document.getElementById("sessionTime").value;
  minutes = sessionTime;
  document.querySelector(".minutes").textContent = minutes;
} );
document.getElementById("breakTime").addEventListener("change", () => {
  breakTime = document.getElementById("breakTime").value;
} );
document.getElementById("longBreakTime").addEventListener("change", () => {
  longBreakTime = document.getElementById("longBreakTime").value;
} );
document.getElementById("playControl").addEventListener("click", switchPlayButton);