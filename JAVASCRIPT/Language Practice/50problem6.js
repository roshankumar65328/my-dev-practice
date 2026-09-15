var divs = document.querySelectorAll(".tab")
var texts = document.querySelectorAll(".text")

texts[0].style.display="initial"
// texts[0].style.width="50%"

divs.forEach(function (tabVal, index){
    tabVal.addEventListener("click", function(){
        hideAllText();
        texts[index].style.display="initial"
        // texts[index].style.width="50%"
    })
})

function hideAllText(){
    texts.forEach(function(text){
        text.style.display="none"
    })
}
