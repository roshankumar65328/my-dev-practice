let arr = [5,8,2,15,4];
// let newArr = [];

// for(let i=0; i<arr.length;i++){
//     newArr[i] = arr[i]**2;
// }
// console.log(newArr);

let newArr = arr.map((val)=>{   //it create new array with respect to previous one,
    return val**2;              //it can take value,index,array
})
console.log(newArr);
console.log(arr);



const arr2 = [4,6,8,10,12,14,16]
const greaterThanSeven = (val2)=>{
    if(val2>7){
        return true
    }
    return false
}
var z = arr2.filter(greaterThanSeven)      // it create a new array from given array
console.log(z);                            // filter array me se specific condition wale data filter karke dega
console.log(arr2);



// reduce return a computed value  
let arr3 = [1,2,3,4,5,6]
const red = (a,b)=>{    // it default take a = 1, b = 2(first,second element of array)
    return a+b;    // it will compute & update a with computed value
}
console.log(arr3.reduce(red))     // reduce gives a computed value, arr3 me se reduce(variable jisme function hai) , uss function ko arr3 mil jayega

console.log(Array.from("roshan"))    // create a array from string
