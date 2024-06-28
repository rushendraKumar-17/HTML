let gameArea = document.querySelector(".gameArea");
let score = 0;
let scoreBoard = document.querySelector("#score");
let replay = document.querySelector(".playAgain");
let message = document.querySelector(".lost");
replay.addEventListener("click",()=>{
  window.location.reload(true);
  lost.style.display = "none";
})
let lost = false;
const changeScore= ()=>{
  scoreBoard.innerText = score;
}
function sleep(){
  return new Promise((resolve) => setTimeout(resolve, 1000));
}
async function delay(){
  await sleep();
}
let images = ["images/1c.gif","images/3c.gif","images/4c.gif"];
window.addEventListener("click", async(e) => {
  let clicked = e.target;
  if (clicked.classList.contains("alien") && !lost) {
    // console.log(`url(${images/burned.gif})`);
    // clicked.style.background=`url(images/burned.png)`;
    // await delay();
    gameArea.removeChild(clicked);
    score++;
    changeScore();
  }
});
let alienEnter;
const gameOver = () => {
  console.log("working");
  clearInterval(alienEnter);
  message.style.display = "block";
  lost = true;
};
const createAliens = () => {
  let alien = document.createElement("div");
  alien.classList.add("alien");
  let right = 0;
  alien.style.background = `url(${images[Math.floor(Math.random()*3)]})`;
  alien.style.backgroundSize = "cover";
  alien.style.backgroundPosition="center";
  console.log(`url(${images[Math.floor(Math.random()*3)]})`);
  alien.style.top = Math.random() * 80 + "vh";
  alien.style.right = right + "vw";

  gameArea.appendChild(alien);
  if (!lost) {
    const moveAlien = () => {
      right += 1;
      if(lost){
        clearInterval(moving);
      }
      if (document.contains(alien) && right > 75) {
        clearInterval(moving);
        gameOver();
        // gameArea.removeChild(alien);
      }
      alien.style.right = right + "vw";
    };
    console.log("creating");
    let moving = setInterval(moveAlien, 300);
  }
};
alienEnter = setInterval(createAliens, 1000);
