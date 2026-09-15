// String is Immutable
console.log("this code contain something about string")
let a = "Roshan";    // String also has index value like array in JS
console.log(a[0]);   //it will print R
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
// console.log(a[6]);   // undefined

console.log("length of string 'a' is ", a.length);


// TEMPLATE LITERALS WITH BACKTICS ( `` )

let real_name = "Roshan";
let friend = "noni";
console.log("His name is " + real_name + " and his friend name is " + friend);

//template literals
console.log(`His name is ${real_name} and his friend name is ${friend}`);     //the used button is below ESC, above TAB called "Backtic"    
//another use is
console.log(`Rosh'an`)    //the used button is below ESC, above TAB called "Backtic"


let b = "Roshan"
console.log(b.toUpperCase())   // string to uppercase
console.log(b.toLowerCase())   // string to lowercase
console.log(b.length)          // length of string
console.log(b.slice(1,5))      // 1 index se leke 5 index tak, 5th index not included
console.log(b.slice(1))        // 1 se end tak

console.log(b.replace("sh" , "777"))     // ro777an jaha se hata hai whi lagega sab updation
console.log(b.concat(a, "noni" , "Rahul" , "ratan"))

console.log(b)  //it will actually same that we assigned first time,the all above are new string bcoz string is "immutale"

