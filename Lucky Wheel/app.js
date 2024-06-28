let btn = document.querySelector("#stop");
let wheel = document.querySelector(".wheel");

btn.addEventListener("click",()=>{
    let randAngle = Math.round(Math.random()*360);
    wheel.classList.toggle("rotate");
    wheel.style.transform=`rotate(${randAngle}deg)`;
    if(wheel.classList.contains("rotate")){
        btn.innerText= "Stop";
    }
    else{
        btn.innerText="Start";
    }
})