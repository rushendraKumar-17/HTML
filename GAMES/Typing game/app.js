let gameArea = document.querySelector(".gameArea");
let sky = document.querySelector(".sky");
let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let scoreBoard=document.querySelector("#score");
let score=0;
let speed = document.querySelector("#range");
let val = 1500;
let activeLetters = [];
let increaseScore=()=>{
    score++;
    scoreBoard.innerText=score;
}
const createLetters = () => {
    let top = 0;
    const letter = document.createElement("div");
    letter.classList.add("letter");
    let currLetter = letters[Math.floor(Math.random() * 26)];
    letter.innerText =currLetter;
    activeLetters.push(currLetter);
    letter.style.left = Math.random() * 60 + 15 + "vw";
    letter.style.top = top + "vh";
    sky.appendChild(letter);
  let moveLetter = () => {
    if (top > 85) {
      clearInterval(obstTime);
      sky.removeChild(letter);
      
    }
    top += 2;
    letter.style.top = top + "vh";
};
let obstTime = setInterval(moveLetter, 100);
};
let letterTimer = setInterval(createLetters, val);
window.addEventListener("keydown",(e)=>{
    let clicked = e.code.charAt(e.code.length-1).toLowerCase();
    if(activeLetters.indexOf(clicked)!=-1){
        increaseScore();
    }
    console.log(activeLetters);
})
speed.addEventListener("change", (e) => {
  let val = speed.value;
  console.log(val);
  clearInterval(letterTimer);
  letterTimer = setInterval(createLetters, val);
});
