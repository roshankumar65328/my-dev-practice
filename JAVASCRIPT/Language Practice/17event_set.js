// when we click on element on page, a automatically event raise
// if created EventListener is available will be procced, if not then will ignored

console.log("script is running....")

let button1 = document.getElementById("btn")
// list of all mouse events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

button1.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b>you were clicked by (.btn)</b> enjoy your click "
})

// button1.addEventListener("mouseover", ()=>{
//     document.querySelector(".box").innerHTML = "MouseOver has been occured "
// })

// button1.addEventListener("mouseleave", ()=>{
//     document.querySelector(".box").innerHTML = "MouseOver has been leaved "
// })

// contextmenu used for right click action
function handleDblClick(){
    alert("this alert option occurs when you right clicked")
    
}

button1.addEventListener("contextmenu", handleDblClick)

// we can also remove the event by adding remove argument in place of add by passing action, function
// button1.removeEventListener("dblclick", functionname)  
button1.removeEventListener("contextmenu", handleDblClick)

//for any key press use keydown
document.addEventListener("keydown",(e)=>{
    console.log(e, e.key, e.keyCode)
})


// this will print the mouse movement information on the console
document.querySelector("body").addEventListener("mousemove", function(dets){
    console.log(dets.clientX)
});


