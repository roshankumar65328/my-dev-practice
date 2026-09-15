let button = document.querySelector(".tooltip-btn")
let tooltip = document.querySelector(".tooltip")
button.addEventListener("mouseover", ()=>{
    tooltip.style.opacity = 1;
})
button.addEventListener("mouseleave", ()=>{
    tooltip.style.opacity = 0;
})