const sessInc = document.getElementById("sessInc");
const sessDec = document.getElementById("sessDec");
const breakInc = document.getElementById("breakInc");
const breakDec = document.getElementById("breakDec");
const playPauseBtn = document.getElementById("play-btn")

sessInc.addEventListener("click", setTimer);
sessDec.addEventListener("click", setTimer);
breakInc.addEventListener("click", setTimer);
breakDec.addEventListener("click", setTimer);

const sessTime = document.getElementById("sessTime");
const breakTime = document.getElementById("breakTime");
const timeDisplay = document.getElementById("time-display");

var currentStatus = "pause"
let timer = 1499;
var timeRef;
let time = 25;

function playPause(){
    console.log("Processimg")
    if(currentStatus=="play"){
        countdown();
    }
}


$(document).ready(function() {
    var btn = $(".play-btn");
    btn.click(function() {
      btn.toggleClass("paused");
      if(currentStatus=="pause"){
          currentStatus = "play";
      }else{
          currentStatus = "pause";
      }
      playPause();
      return false;
    });
});

var angle = 0;

$(document).ready(function() {
    var btn = $(".reset-btn");
    btn.click(function() {
        
        if(currentStatus == "pause"){
            angle += 360;
            $(".reset-btn").css({'transform': 'rotate(' + angle + 'deg)'});
            clearInterval(timeRef);
            console.log("time: ", time);
            timeDisplay.textContent = time + ":" + "00";
            timer = (time * 60)-1;
        }else {
            angle += 5;
            $(".reset-btn").css({'transform': 'rotate(' + angle + 'deg)'});
            angle -= 5;
        }

    });
});




function setTimer(e) {
    if(e.target.id == "sessInc" || e.target.id == "sessDec"){
        time = Number(sessTime.textContent)
        if(e.target.id == "sessInc"){
            time += 1;
        }else{
            if(time>1){
                time -= 1;
            }
        }
        if (time < 10) {
            sessTime.textContent = `0${time}`;
        } else {
            sessTime.textContent = time;
        }
        timeDisplay.textContent = time + ":" + "00";
        timer = (time * 60)-1;
        console.log(time)
    }else{
        time = Number(breakTime.textContent)
        if(e.target.id == "breakInc"){    
            time += 1;
        }else{
            if(time > 1){
                time -= 1;
            }
        }
        breakTime.textContent = time;
    }
    
}

function countdown(){
    clearInterval(timeRef);
    timeRef = setInterval(function() {
        if(currentStatus == "play"){
            console.log("timer: ", timer)
            
            var minutes = Math.floor(timer/60);
            var seconds = Math.floor(timer - (minutes * 60));
            console.log("minutes: ", minutes)
            console.log("seconds: ", seconds)
            if(minutes>9 || seconds>9){
                timeDisplay.textContent = minutes + ":" + seconds;
            }else if(minutes<10 || seconds > 9){
                timeDisplay.textContent = "0" + minutes + ":" + seconds;
            }else if(minutes>9 || seconds<10){
                timeDisplay.textContent = minutes + ":" + "0" + seconds;
            }
            timer -= 1;
            
        }
    }, 1000)
}