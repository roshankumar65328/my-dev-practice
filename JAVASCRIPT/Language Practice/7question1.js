let random = Math.random()
console.log(random)


let a = prompt("enter your first number");
let b = prompt("enter your operation");
let c = prompt("enter your second number");

let obj = {
    "+" : "-" ,
    "-" : "+" ,
    "/" : "**" ,
    "*" : "/" ,
}

if(random > 0.1) {
    //perform correct calculation
    console.log(`The result is ${a} ${b} ${c}`)
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
    
}
else{
    //perform wrong calculation
    b = obj[b];
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}