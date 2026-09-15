var textarea = document.querySelector("textarea")
var span = document.querySelector("span")
var h6 = document.querySelector("h6")

textarea.addEventListener("input", function(){
    var textLength = textarea.value.length
    span.textContent = textLength;
    if(textLength === 50){
        h6.innerHTML = "you exeeded 50 character limit !!"
        h6.style.color = "red"
    }
})