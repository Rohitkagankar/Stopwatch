let timerDisplay = document.querySelector(".timerDisplay");
let startBtn = document.getElementById("startbtn");
let stopBtn = document.getElementById("stopbtn");
let resettBtn = document.getElementById("resetbtn");

let msec = 00;
let secs = 00;
let mins = 00;
let hrs = 00;

let timerId=null;

startBtn.addEventListener('click',function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer,10);
});

stopBtn.addEventListener('click',function(){
    clearInterval(timerId);
});

resettBtn.addEventListener('click',function(){
    clearInterval(timerId);
    timerDisplay.innerHTML=`00 : 00 : 00`;
    hrs=mins=secs=msec= 0;
});

function startTimer(){
    msec++;
    if(msec == 100){
        msec =0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;
            if(mins== 60){
                mins=0;
                hrs++;
            }
        }
    }
    let msecString=msec<10 ? `0${msec}` : msec;
    let secsString=secs<10 ? `0${secs}` : secs;
    let minsString=mins<10 ? `0${mins}` : mins;
    let hrsString=hrs<10 ? `0${hrs}` : hrs;

    timerDisplay.innerHTML=`${hrsString} : ${minsString} : ${secsString} : ${msecString}`;
}
