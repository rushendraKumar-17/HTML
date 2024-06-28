const audio = document.querySelector("audio");
const hours = document.querySelector(".numHours");
const minutes = document.querySelector(".numMinutes");
const seconds = document.querySelector(".numSeconds");
const message = document.querySelector(".message");
const stopBtn = document.querySelector(".stop");
let pause = document.querySelector(".pause");
let continu = document.querySelector(".continue");
let up = document.querySelectorAll(".up");
let down = document.querySelectorAll(".down");
let time;
up.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        let p = e.target.parentElement;
        console.log(e.target.innerText);
        let currElem = p.childNodes[3];
        // console.log(currElem);
        let curr = parseInt(currElem.innerText);
        curr++;
        if(curr==60){
            curr=0;
        }
        
        if(String(curr).length==1){
            curr="0"+curr;
        }
        currElem.innerText = curr;
    })
})
down.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        let p = e.target.parentElement;
        // console.log(e.target.innerText);x    
        let currElem = p.childNodes[3];
        // console.log(currElem);
        let curr = parseInt(currElem.innerText);
        
        curr--;
        if(curr<0){
            // console.log("called");
            btn.disabled;
        }
        else{
            if(String(curr).length==1){
                curr="0"+curr;
            }
            currElem.innerText = curr;
        }
    })
})
let hoursCount = parseInt(hours.innerText);
let minutesCount = parseInt(minutes.innerText);
let secondsCount = parseInt(seconds.innerText);
let change = (sec,min,h)=>{
    if(String(h).length<2){
        hours.innerText="0"+h;
    }
    else{
        hours.innerText = h;
    }
    if(String(min).length==1){
        minutes.innerText="0"+min;
    }
    else{
        minutes.innerText = min;
    }
    if(String(sec).length==1){
        seconds.innerText="0"+sec;
    }
    else{
        seconds.innerText = sec;
    }
}
continu.addEventListener("click",()=>{
    up.forEach((btn)=>{
        btn.disabled;
    })
    down.forEach((btn)=>{
        btn.disabled;
    })
    continu.disabled="true";
    pause.removeAttribute("disabled");
    let hoursCount=hours.innerText
    let minutesCount=minutes.innerText
    let secondsCount=seconds.innerText
    time = setInterval(()=>{
        // console.log("called");
        secondsCount--;
        if(secondsCount == -1){
            secondsCount = 59;
            minutesCount--;
        }
        if(minutesCount==-1){
            minutesCount = 59;
            hoursCount--;
        }
        if(hoursCount==-1){
            
            audio.play();
            audio.removeAttribute("muted");
            message.style.visibility="visible";
            stopBtn.addEventListener("click",()=>{
                audio.pause();
            });
            clearInterval(time);
        }
        else{
            change(secondsCount,minutesCount,hoursCount);
        }
    },1000);
    
})

pause.addEventListener("click",()=>{
    clearInterval(time);
    continu.removeAttribute("disabled");
    pause.disabled="true";
});