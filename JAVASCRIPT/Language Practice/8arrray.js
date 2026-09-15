let arr = [2, 4, 6, 8];
// Index   0, 1, 2, 3

// arr[0]=5;      // update the value of array
// console.log(arr, typeof arr);       // typeof array is = object
// console.log(arr.length)

console.log(arr[0])
console.log(arr[1])

console.log(typeof(arr.toString()))    // convert array to string, it create a new string, conversion
console.log(arr)     // it is still array in nature
console.log(typeof(arr))      // array ka type object hi aata hai
console.log(arr.join(" and "))    // array ki every value ke baad join kardo "and"
console.log(arr)    // array abhi bhi main wala hi rahega

let p = [1,2,3,4,5];
// p.pop()    // it will remove last element from array (5)
// console.log(p)



// p.push("abcd")
// console.log(p)      //  1 element aur add ho jayega as a string [1,2,3,4,5,"abcd"]

// p.shift()      // delete first element/ brother of pop
// console.log(p)

// p.unshift("rosh")   // add in front of array/ brother of push
// console.log(p)

delete p[4];     // it will delete index value[4]
console.log(p)   // deleted value ke yaha pr empty item ayega
console.log(p.length)    // length to abhi bhi 5 ayegi

let a1 = [1,2,3];
let a2 = [4,5,6];
let a3 = [7,8,9];

let t = a1.concat(a2)     //  it will concanate the array
console.log(typeof(t));   // object
console.log(a1.concat(a2,a3));    //   [1,2,3,4,5,6,7,8,9]
let z = console.log(a1.concat(a2,a3));    //   [1,2,3,4,5,6,7,8,9]
console.log(typeof(z));    // undefined , console laga h iss liye, normally object hi h

let a5 = [70,60,40,10,35,99]
a5.sort()     // it sort the array 
console.log(a5)



let numbers = [1,2,3,4,5]
// console.log(numbers.slice(0,3))   // slice(0,3) 0 index se 3 index tak, 3 not included, not edit in original array 
// console.log(numbers)     //  = 1,2,3

// numbers.splice(0,3)         // splice(0,3) 0 se start 3 matlab 3 digit delete karga, it change in original array, isse console kiya to ye jo delete kr rha h wo de dega 
// console.log(numbers)     // = 4,5

numbers.splice(1,2,6,8)     // in splice we delete or add values sumulteneously
console.log(numbers)        // 2,3 katega & 6,8 uski jagah add kr dega

let url = "http://127.0.0.1:3000/hindi song/";
let parts = url.split("/");

console.log(parts);
// ["http:", "", "127.0.0.1:3000", "hindi song", ""]


// array ki all value double in new array
let arr1 = [2, 4, 6, 8];
let newArr = []
for (let i = 0; i < arr1.length; i++){
    const k = arr1[i];
    newArr.push(k**2)
}
console.log(newArr)
