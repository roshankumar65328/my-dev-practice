console.log("this is the loop of javascript")

let a = 1;
console.log(a)
console.log(a+1)
console.log(a+2)

// for loop
// hame pata hai, kitni baar ye code chalega

// for (let i = 0; i<100; i++) {
//     console.log(a + i);
// }


// for Loop on array
let  z= [1,2,3,4,5]
for(let j=0; j<z.length; j++){
    console.log(z[j])
}


// for in loop = loop through the keys of an object
// forin loop
let obj = {
    name: "roshan",
    role: "programmer",
    company: "Amazon"
}

// "const key in obj" matlab obj ki sari keys
// for manipulating key-value pair from a object
for (const key in obj) {
    const element = obj[key] // ye hame key ki value nikal ke dega element me
    console.log(key, element);  //  name roshan
}                               //  role programmer
                                //  companay Amazon

let obj1 = {
    a:1,
    b:2,
    c:3
}

for(const key in obj1){
    if(Object.hasOwnProperty.call(obj1,key)){
        const element = obj1[key];
        console.log(key, element);
    }
}

let obj2 = {
    p : 1,
    q : 2
}

// const key in obj ke sath if(Object.hasProperty.call(obj,key))
// for object manipulation
for (const key2 in obj2){
    // if((obj2,key2)){
    if(Object.hasOwnProperty.call(obj2,key2)){
        console.log(key2,obj2[key2])     // p 1
    }                                    // q 2
}



// for of loop
// const element of "roshan" , specially using for a string manipulation, array also
// it is representing "roshan" in differnt line
for (const element of "roshan") {
    console.log(element);
}

// forof loop , for values manipulation
// here, array's value manipulation's
let z1 = [1,2,3,4,5]
for(const val of z1){
    console.log(val);       // 1 2 3 4 5
}



// forEach loop
// forEach loop use for manipulating (array's value,index,array)
z.forEach((value, index, array)=>{
    console.log(value, index, array)    // 1 0 [1,2,3,4,5]
})                                      // 2 1 [1,2,3,4,5]
                                        // 3 2 [1,2,3,4,5]


//while loop
let i = 0;
while(i<9) {
    console.log(i);
    i++;
}



//do while loop
let  r = 10;
do{
    console.log(r);
    i++;
}while(i<5);

