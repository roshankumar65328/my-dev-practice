console.log("Hello this is consitional code")

let num = 1;
let grace = 2;

num += grace;
console.log(num)
console.log(num + grace)      //addition operator
console.log(num - grace)      //subtraction operator
console.log(num * grace)      //multiplication operator
console.log(num / grace)      //division operator
console.log(num ** grace)     //to the power operator
console.log(num % grace)      //modulor operator


// single line comment

/*
i am 
multiline
comment
*/


// if_else loop
let age = 9
if(age >= 18) {
    console.log("You are eligible, You can drive");
}

else{
    console.log("You are not eligible, You can't drive");
}



/* if, else if, else if,else conditions
if(age >= 18) {
    console.log("You are eligible, You can drive");
}

else if(age < 0) {
    console.log("person does not exit");
}

else if( 0 < age < 5 ) {
    console.log("not eligible, you are baby");
}

else if (5 < age < 17) {
    console.log("not eligible, You are child");
}

elso{
    console.log("this is else condition if any condition not applied");
}
*/


// ternary operator
a = 6;
b = 8;
let c = a>b ? (a-b) : (b-a);
console.log(c)

