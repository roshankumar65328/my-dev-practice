console.log("this is the starting of function")

/*
function name(parameter){
    function defination
}
name(parameter);
*/
function nice(name) {
    console.log("Hey " + name + " how are you!")
    console.log("Hey " + name + " how about you!")
    console.log("Hey " + name + " how its going!")
    console.log("Hey " + name + " what will you do after this!")
}
nice("roshan")    //calling the function


// p();   // this will give error
// let p = function(){   // ye fn expressin h, to declare se pehle nahi call kr sakte, kyuki ye hoist nhi ho pata
//     console.log("this is function expression");
// }
// p();   // this will work


//declaring the function with differnt parameter
function sum (a,b,c = 33) {
    console.log(a,b,c)
    return a+b+c
}


//calling with differnt-differnt parameters
result1 = sum(3,2);
result2 = sum(7,5);
result3 = sum(3,13,1)   // yha 1 ko prefference milegi, not 33 ko

console.log("The sum of 1 these number is: ", result1);
console.log("The sum of 2 these number is: ", result2);
console.log("The sum of 3 these number is: ", result3);   // 17


//arrow function
const func1 = (x)=> {
    console.log("I am an arrow function ", x);
}

//calling arrow function
func1(34);
func1(66);
func1(84);


let func2 = ((e) =>{
    console.log(e);
    
})
func2(3)


// Arrow Function in a 
// let func3 = (if passing value)=>{}
// let func4 = ()=>{}
// let func5 = ()=>{}
// let func6 = ()=>{}
// let func7 = ()=>{}
// let func8 = ()=>{}
// let func9 = ()=>{}
// let func10 = ()=>{}

// let sumOfTwoNumber = (a,b) =>{
//     return console.log(a+b)
// }
// sumOfTwoNumber(20,80);