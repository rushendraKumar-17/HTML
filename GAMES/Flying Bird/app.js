window.addEventListener("DOMContentLoaded", () => {
  let bird = document.querySelector(".bird");
  let gamearea = document.querySelector(".sky");
  let bx = 190;
  let by = 190;
  let gravity = 2;
  let gameOver = false;
  function start() {
    if (by < 450) {
      by += gravity;
      bird.style.left = bx + "px";
      bird.style.top = by + "px";
    } else {
      gameOver = true;
      GameOver();
    }
  }
  let birdTime = setInterval(start, 20);
  function control(e) {
    if (e.keyCode === 32 && by > 30) {
      by -= 50;
      bird.style.top = by + "px";
    }
  }
  document.addEventListener("keyup", control);
  function createObstacle() {
    if (!gameOver) {
      let obstacle = document.createElement("div");
      let topObstacle = document.createElement("div");
      let gap = 200;

      let obstacleLeft = 1045;
      let obstacleBottom = 0;

      let obstHeight = Math.random() * 350;
      topObstacle.classList.add("obstacle");
      topObstacle.style.left = obstacleLeft + "px";
      topObstacle.style.bakgroundColor = "red";
      obstacle.style.height = obstHeight + "px";
      topObstacle.style.bottom = obstHeight + 180 + "px";
      topObstacle.style.zIndex = "2";
      topObstacle.style.transform="rotate(180deg)";
      obstacle.classList.add("obstacle");
      gamearea.appendChild(obstacle);
      gamearea.appendChild(topObstacle);
      obstacle.style.left = obstacleLeft + "px";
      obstacle.style.bottom = obstacleBottom + "px";
      function moveObstacle() {
        if (!gameOver) {
          obstacleLeft -= 2;
          if (obstacleLeft < -50) {
            clearInterval(moveObst);
            gamearea.removeChild(obstacle);
            gamearea.removeChild(topObstacle);
          }
          // console.log("moving");
          // console.log(obstacle.style.left+" "+obstacleLeft);
          obstacle.style.left = obstacleLeft + "px";
          topObstacle.style.left = obstacleLeft + "px";
          if (obstacleLeft > 277 && obstacleLeft < 296 && by < obstHeight) {
            GameOver();
            clearInterval(obstInterval);
            console.log("game Over");
          }
        }
      }
    }
    let moveObst = setInterval(moveObstacle, 20);
    if (gameOver) {
      clearInterval(moveObst);
    }
    // if(obstacleLeft>900){
    //     console.log("cleared");
    //     clearInterval(moveObst);
    // }
  }
  createObstacle();
  let obstInterval = setInterval(createObstacle, 4000);
  function GameOver() {
    clearInterval(birdTime);
    gameOver = true;
    document.removeEventListener("keyup", control);
    clearInterval(obstInterval);
  }
  window.addEventListener("mousemove",(e)=>{
    console.log(e.clientX+' '+e.clientY);
  })
});
