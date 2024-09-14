var timer=60;
var point=0;
var hitr_n=0;
function score(){
    point+=10;
    document.querySelector("#scores").textContent=point;
}
function getnewhit(){
   hitr_n= Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent=hitr_n;
}
function makebubble(){
    var clutter="";
    for(var i=1; i<=161; i++){
    var r_n=Math.floor(Math.random()*10)
    clutter +=`<div class="bubble">${r_n}</div>`;
    }
document.querySelector("#pbtm").innerHTML=clutter;
}
function runtimer(){
    var timerinterval =setInterval(function(){
        if(timer>0){
            timer--
           document.querySelector("#timer").textContent=timer;
        }else{
            clearInterval(timerinterval);
            document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER....!</h1>`;
        }
    },1000);
}
document.querySelector("#pbtm").addEventListener("click",function(dts){
    var click_num=(Number(dts.target.textContent));
    if(click_num===hitr_n){
        score();
        getnewhit();
        makebubble();
    }

});
getnewhit();
runtimer();
makebubble();
// score();
