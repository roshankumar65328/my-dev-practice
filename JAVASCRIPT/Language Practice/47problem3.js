var form = document.querySelector("form")
var inputs = document.querySelectorAll('input[type="text"]')    // sab input ko check karana hai to sabko ek jageh lana hoga, querySelectorAll hame nodeList dega
// console.log(inputs);

var h6 = document.querySelector("h6")


form.addEventListener("submit", function(ev){
    ev.preventDefault();    // variable deke , variable.preventDefault() se page reload nhi hoga jo default hota hai
    for(var i = 0; i<inputs.length; i++){       // sab inputs pe loop lagake check kar liya
        if(inputs[i].value.trim() === '' ){
            h6.textContent="Error, some fields are empty";
            h6.style.color= "red";
            break;
        }
    }
})  