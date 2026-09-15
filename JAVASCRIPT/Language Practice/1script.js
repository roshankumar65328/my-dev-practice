alert("welcome to the introduction of javascript");     //alert option of site

console.log("code is running");   // this method used to print messaage to browser's console. useful for debugging and testing alloow developer to inspect and understand code flow
console.log("this will display on browser's console");

var a = prompt("enter your number");                 //declaring the var vaariable
var isTrue = confirm("are u want to allow this");    // it store the value as boolean in isTrue variable


//if else conditions
if(isTrue){
    console.log("okay fine");
}

else{
    console.log("not fine");
}

console.log("your number is " +a);



//assigning the document title
document.title = "this title given by js";

//this will add css (inline css)
// document.body.style.backgroundColor = "red"    