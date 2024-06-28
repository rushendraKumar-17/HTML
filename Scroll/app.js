let toggleBtn = document.querySelector(".toggle");
let navlinks = document.querySelector(".navlinks");
let navBar = document.querySelector(".nav");
let bars = document.querySelector("#bars");
let topBtn = document.querySelector(".top");
let btns = document.querySelectorAll(".nav .links a")
// console.log(bars);

toggleBtn.addEventListener("click",()=>{
    navlinks.classList.toggle("linksvisible");
})
window.addEventListener("scroll",()=>{
    if(window.pageYOffset>navBar.getBoundingClientRect().height){
        navBar.classList.add("navVisible");
        // console.log(btns);
        navBar.style.color="black";
        btns.forEach((btn)=>{
            btn.style.color="black";
        })
    }
    else{
        navBar.classList.remove("navVisible");
        // console.log(btns);
        
        bars.style.color="white";
        btns.forEach((btn)=>{
            btn.style.color="white";
        })
    }
    if(window.pageYOffset>500){
        topBtn.style.visibility="visible";
    }
    else{
        topBtn.style.visibility="hidden";
    }
})