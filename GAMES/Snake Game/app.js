let snake = document.querySelector(".snake");
let head = document.querySelector(".head");
let body = document.querySelector(".body");
let cells = document.querySelectorAll(".cell");
let len = 3;
let l = 0;
let t = 0;
let s = document.querySelector("#score");
let score = 0;
let updateScore=()=>{
    score++;
    s.innerText = score;
}
let currLen = 5;
let increaseLen = ()=>{
    body.innerHTML+=`<div class="cell"></div>`;
    len++;
}
let food = document.querySelector(".food");
// console.log("hey");
let fx;
let fy;
let changeFood=()=>{
    fx=  Math.random()*100;
    fy = Math.random()*100;
    // console.log(fx+" "+fy);
    food.style.top=fy+"vh";
    food.style.left=fx+"vw";
}
changeFood();
let curr="right";
const change = ()=>{
    if((l<=fx+1 && l>=fx-1) && (t<=fy+4 && t>=fy-4)){
        console.log(fy + " "+t);
        changeFood();
        increaseLen();
        updateScore();
    }
    switch(curr){
        case "right":
            if(l===100){
                console.log("out");
            }
            else{
                l+=2;
                cells.forEach((elem)=>{
                    let currt = parseInt(getComputedStyle(elem).getPropertyValue("--t"))-1;
                    if(currt>=0){
                        elem.style.setProperty("--t",`${currt}`);
                    }
                    let currl = parseInt(getComputedStyle(elem).getPropertyValue("--l"))+1;
                    console.log(currl);
                    elem.style.setProperty("--l",  `${currl}`);

                })
            }
            break;
        case "left":
            if(l===0){
                console.log("out");
            }
            else{
                // console.log(currt+" "+currl);
            }
            break;
        case "top":
            if(t===0){
                console.log("out");
            }
            else{
                // console.log(currt+" "+currl);
            }
            break;
        case "down":
            if(t===100){
                console.log("out");
            }
            else{
                // console.log(currt+" "+currl);
            }
    }
}

window.addEventListener("keydown",(e)=>{
    if(e.keyCode===37){
        if(curr!="right"){
            curr="left";
        }
    }
    else if(e.keyCode===38){
        if(curr!="down"){
        curr="top";
        }
    }
    else if(e.keyCode === 39){
        if(curr!="left"){
        curr="right";
        }
    }
    else if(e.keyCode === 40){
        if(curr!="up"){
        curr="down";
        }
    }
})
setInterval(change,200);