let gameseq=[];
let userseq=[];
let level=0;
let started=false;
let color=["yellow","green","red","purple"];
let buttons=document.querySelectorAll(".btn");
let h3=document.querySelector("h2");
let h1=document.querySelector("h1");
let h2=document.querySelector("h3");
let body=document.querySelector("body");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        h1.innerText="Game Started";
        h2.remove();
        setTimeout(levelUp,400);
    }
});
document.addEventListener("touchstart",function(){
    if(started==false){
        console.log("game started");
        started=true;
        h1.innerText="Game Started";
        h2.remove();
        setTimeout(levelUp,400);
    }
});
function levelUp(){
    level++;
    h3.innerText=`Level${level}`;
    let randnum= Math.floor(Math.random()*4);
    let randcolor=color[randnum];
    let btn=document.querySelector(`.${randcolor}`)
    gameseq.push(randcolor);
    console.log(gameseq);
    colorchanger(btn);
    userseq=[];
}

function colorchanger(btn){
    btn.classList.add("flash");
    setTimeout(function(){
       btn.classList.remove("flash"); 
    },250);
}
function ucolorchanger(btn){
    btn.classList.add("uflash");
    setTimeout(function(){
       btn.classList.remove("uflash"); 
    },250);
}
function btnpress(){
    if(started==true){
    
    btn=this;
    ucolorchanger(btn);
    let seq=btn.id;
    userseq.push(seq);
    console.log("mine",userseq);
        idx=userseq.length-1;
        check(idx);
    }
}
for(bton of buttons){
    bton.addEventListener("click",btnpress);
    bton.addEventListener("touchstart", btnpress);
}
function check(idx){
    if(userseq[idx]==gameseq[idx]){
   
    if(userseq.length==gameseq.length){
        setTimeout(levelUp,600) ;
    }
}else{
    h3.innerHTML=`GAME OVER! your score was <b>${level-1}</b> <br> Press Any Key To Restart`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="wheat";
    },150)
    reset();
}
}

function reset(){
    started=false;
    level=0;
    gameseq=[];
    userseq=[];
    h1.innerText="Game Over!";
    body.prepend(h2);
    body.prepend(h1);
}
