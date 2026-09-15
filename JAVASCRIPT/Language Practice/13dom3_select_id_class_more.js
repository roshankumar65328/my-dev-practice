console.log("Roshan Kumar")

// write this on console for result of this 
let nino = document.getElementsByClassName("box")    // it will select all element that has class = box
console.log(nino)  // getElement hame HTML Collection dega

// nino[2].style.backgroundColor = "red"  //ye 2 index wala lega

document.getElementById("redbox").style.backgroundColor = "red"    // ye id ko target karega

// document.querySelector(".box").style.backgroundColor = "skyblue"   //querySelector matlab koi class wagera pe, first occurence only


// document.querySelectorAll(".box").style.backgroundColor = "skyblue"    // for all occurence
//we can't use querySelectorAll directly as it select all given term as given(.box) 
// console.log(document.querySelectorAll(".box"))    // querySelector hame NodeList dega


// ye sab HTML COLLECTION denge, matlab inme HTML tag honge,
// HTML Collection pe hum direct forEach loop nahi chala sakte, first convet collection -> Array
// document.getElementsByClassName("box");
// document.getElementsByTagName("box");
// document.body.children 


// ye sab HTML NODELIST denge , matlab isme tag, empty spaces, comments honge
// HTML Nodelist me hum direct forEach loop chala sakte hai
// document.querySelectorAll(".box");
// document.body.childNodes



// this will change the whole bg color
// document.querySelectorAll(".box").forEach(e=>{
//     e.style.backgroundColor = "skyblue"
// })


//do it at console
document.getElementsByTagName("div")     // it will select all div tag
e = document.getElementsByTagName("div")
console.log(e[4].matches("#redbox"))   // check's the given css property with matching property, return boolean value

console.log(e[4].closest("#redbox"))   // kon sa parent iss #redbox ko hold kr raha hai wo aa jayega

console.log(document.querySelector(".container").contains(e[4]))    // it check ye, isko contain karta h ya nhi, return bool value