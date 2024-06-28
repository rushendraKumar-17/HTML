let gameArea = document.querySelector(".gameArea");
for(let i=0;i<100;i++){
    gameArea.innerHTML+=`<div class="grid"><div class="pawnArea"><div class="pawn"></div></div><p class='number'>${i+1}</p></div>`
}
let numbers = ["images/1.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png"];
let dice = document.querySelector(".dice");
dice.addEventListener("click",()=>{
    dice.style.backgroundImage=`url(${numbers[Math.floor(Math.random()*numbers.length)]})`;
})
let p1 = 0;
const roll = ()=>{
    dice.style.backgroundImage=`url(images/dice-game.gif)`;
}
setInterval(roll,5000);
