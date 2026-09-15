console.log("hello this is console");

var a = 5;
// a = a + 1;
let b = 6;
let c = "Noni";
let _a = "Roshan";
// var 55a = "Kumar";  // not allowed 

console.log( a + b + 8);
console.log(typeof a, typeof b, typeof c);

{
    let a = 55;
    console.log(a)
}

console.log(a)
// const a1 = 6;
// a1 = a1 + 1;   // not allowed

let p = null;   //null datatype
let q = 22;      //number datatype
let r = 3.55;     //number datatype
let x = "Roshan Kumar";     //string datatype
// let sym1 = Symbol("cow"); //symbol datatype
// let sym2 = Symbol("cow"); //symbol datatype    -- both symbol contents are same but both symbols are different (symbols denotes uniqueness)
let y = undefined;          //undefined datatype
const z = true;             //boolean datatype
let bigInt = 123456789n;    //bigInt datatype


console.log(p,q,r,x,y,z);
console.log(typeof p,typeof q,typeof r,typeof x,typeof y,typeof z, typeof bigInt);


//declaring the object
let o ={
    "name" : "Roshan",
    "job_name" : "5600",
    "is_handsome": "true"
}


console.log(o);
o.salary = "100crore";     //updating the object
console.log(o);
o.salary = "500crore";     //again updating the object again
console.log(o);
// delete o.salary;           //deleting the property from object
// console.log(o);



// object can store a array, fuction in it 
let pq = {
    a: ["rosh","noni"],
    b : function sum(a,b){
        let sum =a+b;
        return sum
    }
}
console.log(pq);


