let btn=document.querySelector(".control");
let select = document.querySelector(".select");
let video = document.querySelector("video");
btn.addEventListener("click",()=>{
    if(select.classList.contains("toggle")){
        select.classList.remove("toggle")
        video.play();
    
    }
    else{
        video.pause();
        select.classList.add("toggle");
    }
})
window.addEventListener("load",()=>{
    console.log("called");
    document.querySelector(".preload").classList.add("invisible");
})