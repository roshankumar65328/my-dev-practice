var pgr = document.querySelector(".progress")
var count = 0;

var download_progress = setInterval(function(){
    count++
    pgr.style.width = count +'%'
    if(count === 100){
        clearInterval(download_progress)
    }
},10)

