// event delegation
// jab aap event listener se kai sare different element ke events ko handle kare

// event listener ko parent par lagao and unko id, class, ya fir tag ke basis par differntiate karao
 
var r = document.querySelector("#parent");
r.addEventListener("click", function(evt){
    if(evt.target.id === "play"){
        console.log("play song");
    }
    else if(evt.target.id === "pause"){
        console.log("pause song");
    }
})
 