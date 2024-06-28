const btns = document.querySelectorAll(".btn");
const text = document.querySelectorAll(".text");
console.log(btns);
btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        btns.forEach((b)=>{
            b.classList.remove("active");
        });
        const elem =e.target;
        elem.classList.add("active");
        text.forEach((txt)=>{
            txt.classList.remove("visible");
        });
        const tgt = e.target.dataset.id;
        document.getElementById(tgt).classList.add("visible");
    })
})