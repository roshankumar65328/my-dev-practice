console.log("Script is running....")

// let boxes = document.getElementsByClassName("box")       // HTML Collection dega
// or
let boxes = document.querySelector(".container").children
console.log(boxes)    //it will give html collection


// we have to make array of getElementByClass for printing the all (.box) in element format
Array.from(boxes).forEach((e)=>{
    // console.log(e)
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
})


function getRandomColor(){
    let val1 = Math.ceil(0+ Math.random()* 255);    // Math.ceil hame decimal nhi deta
    let val2 = Math.ceil(0+ Math.random()* 255);
    let val3 = Math.ceil(0+ Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

