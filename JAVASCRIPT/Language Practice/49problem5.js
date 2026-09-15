var start = document.querySelector("#start")
var stop = document.querySelector("#stop")
var h3 = document.querySelector("h3")
var timer;

start.addEventListener("click", function(){
    var count = 10
    timer = setInterval(()=>{
    count--;
    h3.textContent=count
    if(count=== 0){
        clearInterval(timer)
    }
    },200)
})

stop.addEventListener("click", function(){
    clearInterval(timer)
})