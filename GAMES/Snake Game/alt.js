function start() {
  let food = document.querySelector(".food");
  let foodX = Math.random() * 100 + "vw";
  let foodY = Math.random() * 100 + "vh";
  food.style.top = foodY;
  food.style.left = foodX;
  let snake = document.querySelector(".snake");
  let snakeHead = document.querySelector(".head");
  let snakeBody = document.querySelectorAll(".cell");
  let headX = 6;
  let headY = 0;
  let currDirection = "R";
  let moveSnake = () => {
    switch (currDirection) {
      case "L":
        console.log("moving left");
        headX-=2;
        break;
      case "R":
        headX+=2;
        console.log("moving right");
        break;
      case "U":
        headY-=2;
        console.log("moving up");
        break;
      case "D":
        headY+=2;
        console.log("moving down");
        break;
    }
    snakeHead.style.left = headX+"vw";
    snakeHead.style.top = headY + "vw";
    snakeBody.forEach((elem,ind)=>{
        
    })
  };
  setInterval(moveSnake, 1000);
  window.addEventListener("keydown", (e) => {
    switch (e.keyCode) {
      case 37:
        if (currDirection != "R") {
          currDirection = "L";
        }
        break;
      case 38:
        if (currDirection != "D") {
          currDirection = "U";
        }
        break;
      case 39:
        if (currDirection != "L") {
          currDirection = "R";
        }
        break;
      case 40:
        if (currDirection != "U") {
          currDirection = "D";
        }
        break;
    }
  });
}
start();
