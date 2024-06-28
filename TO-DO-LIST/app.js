const btn = document.querySelector(".add");
const works = document.querySelector(".works");
const input = document.querySelector("#input");
worksArr.forEach((elem)=>{
    console.log(elem);
})
let array = worksArr;
localStorage.setItem(1,String(array));
let remove = (e) => {
    const tgt = e.target.parentElement.parentElement.parentElement;
    tgt.style.display = "none";
}
array.forEach((elem)=>{
    works.innerHTML += `<div class="work">
        <p>${elem}</p>
        <div class="buttons">
            <button class="done"><i class="fa fa-solid fa-check"></i></button>
        </div>
    </div>`;
});
let fn = () => {
    array.push(input.value);
    localStorage.setItem(1,String(input.value));
    if (input.value != "") {
        works.innerHTML += `<div class="work">
        <p>${input.value}</p>
        <div class="buttons">
            <button class="done"><i class="fa fa-solid fa-check"></i></button>
        </div>
    </div>`;
    }
    input.value = "";
    done = document.querySelectorAll(".done");
    // console.log(done);
    done.forEach((b) => {
        b.addEventListener("click", (e) => {
            // array.remove(e.target.parentElement.parentElement.parentElement.childNodes[1].innerText);
            remove(e);
        })
    });
}
window.onkeydown=(e)=>{
    // console.log(e.keyCode)
    if(e.keyCode==13){
        fn();
    }
}
let done = document.querySelector(".done");
btn.addEventListener("click", fn);
done.addEventListener("click", (e) => {
    // array.remove(e.target.parentElement.parentElement.parentElement.childNodes[1].innerText);
    remove(e);
})
