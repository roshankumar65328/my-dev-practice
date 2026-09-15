// generate the Random Company name from 3 Given Words 

let first, second, third;

// let generate the first word
let rand = Math.random()   // it generate random value b/w 0-1
if(rand<0.33){
    first = "Crazy"
}else if(rand>0.33 & rand<0.66){
    first = "Amazing"
}else{
    first = "Fire"
}


// let generate the Second word
rand = Math.random()   // it generate random value b/w 0-1
if(rand<0.33){
    second = "Engine"
}else if(rand>0.33 & rand<0.66){
    second = "Food"
}else{
    second = "Garment"
}


// let generate the Third word
rand = Math.random()   // it generate random value b/w 0-1
if(rand<0.33){
    third = "Bro's"
}else if(rand>0.33 & rand<0.66){
    third = "Limited"
}else{
    third = "Hub"
}

console.log(`the company name is ${first} ${second} ${third}`)