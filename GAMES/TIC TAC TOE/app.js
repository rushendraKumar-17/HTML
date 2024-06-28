let user = 0;
let btns = document.querySelectorAll(".box");
let winner = document.querySelector(".winner");
let message=document.querySelector(".message");
let replay = document.querySelector(".replay");
let win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let restart = document.querySelector(".restart");
let closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click",()=>{
    message.style.display="none";
})
restart.onclick=()=>{
    clear();
}
replay.onclick=()=>{
    message.style.display="none";
    clear();
}
let clear=()=>{
    btns.forEach((btn)=>{
        btn.innerText="";
        btn.removeAttribute("disabled");
    })
}
let empty = true;
let check=()=>{
    // console.log("called");
    win.forEach((elem)=>{
        let t1 = btns[elem[0]].innerText;
        let t2=btns[elem[1]].innerText;
        let t3=btns[elem[2]].innerText;
        
        if(t1!="" && t2===t1 && t3===t1){
            winner.innerText=t1+" Wins";
            message.style.display="block";
            
            console.log(t1);
            btns.forEach((btn)=>{
                btn.disabled="true";
            })
        }
        if(t1=="" || t2=="" || t3==""){
            empty = false;
        }
        
    })
}
btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        if(user%2==0){
            btn.innerText="X";
            console.log("X");
            user++;
            btn.disabled="true";
        }
        else{
            btn.innerText="O";
            user++;
            btn.disabled="true";
            console.log("O")
        }
        empty=true;
        check();
        if(empty == true){
            winner.innerText="It's a Draw";
            message.style.display="block";

        }
    })
})