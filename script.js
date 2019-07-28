const sessInc = document.getElementById("sessInc");
const sessDec = document.getElementById("sessDec");
const breakInc = document.getElementById("breakInc");
const breakDec = document.getElementById("breakDec");

sessInc.addEventListener("click", setTimer);
sessDec.addEventListener("click", setTimer);
breakInc.addEventListener("click", setTimer);
breakDec.addEventListener("click", setTimer);

const sessTime = document.getElementById("sessTime")
const breakTime = document.getElementById("breakTime")

const currentStatus = "work"





$(document).ready(function() {
    var btn = $(".play-btn");
    btn.click(function() {
      btn.toggleClass("paused");
      return false;
    });
});

var angle = 0;

$(document).ready(function() {
    var btn = $(".reset-btn");
    btn.click(function() {
        angle += 360;
        $(".reset-btn").css({'transform': 'rotate(' + angle + 'deg)'});
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
