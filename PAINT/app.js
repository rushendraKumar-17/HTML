let paintArea = document.querySelector(".paintArea");
let currColor = "black";
let colors = document.querySelectorAll(".color");
colors.forEach((elem) => {
  elem.addEventListener("dblclick", (e) => {
    currColor = elem.getAttribute("id");
  });
});

const draw = (i) => {
  let p = document.createElement("div");
  p.classList.add("pixel");
  document.body.appendChild(p);
  p.style.borderColor = currColor;
  p.style.backgroundColor = currColor;
  if (currColor == "white") {
    p.style.width = "100px";
    p.style.height = "100px";
  }
  p.style.left = i.clientX + "px";
  p.style.top = i.clientY + "px";
  //   console.log("moving event");
  p.addEventListener("dblclick",()=>{
    p.addEventListener("mousemove",draw);
    paintArea.addEventListener("mousemove",draw);

  })
  p.addEventListener("mouseup",()=>{
    paintArea.removeEventListener("mousemove",draw);
  })
};
const erase = () => {
  currColor = "white";
};
let select = "pencil";
let eraser = document.querySelector(".eraser");
eraser.addEventListener("dblclick", (e) => {
  e.preventDefault();
  //   console.log("Clicked");
  // select = "eraser";
  erase();
});
paintArea.addEventListener("mousedown", (e) => {
  //   console.log("down event");
  e.preventDefault();
  // if (select == "pencil") {
  paintArea.addEventListener("mousemove", draw);

//   document.querySelectorAll(".pixel").forEach((elem) => {
//     elem.addEventListener("mouseup", () => {
//       elem.removeEventListener("mousemove", draw);
//       paintArea.removeEventListener("mousemove", draw);
//     });
//   });
});
document.querySelectorAll(".pixel").forEach((elem) => {
  elem.addEventListener("mousedown", (e) => {
    e.preventDefault();
    elem.addEventListener("mousemove", draw);
    paintArea.addEventListener("mousemove", draw);
  });
});

paintArea.addEventListener("mouseup", (e) => {
  paintArea.removeEventListener("mousemove", draw);
  document.querySelectorAll(".pixel").forEach((elem) => {
  paintArea.removeEventListener("mousemove", draw);

  });
});
