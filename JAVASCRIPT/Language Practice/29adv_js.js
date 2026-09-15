// console.log(a1);    // we can't use before declare , it show error if it is (let/const) , it will show undefine if it is (var)

// ye sleeps function code ko 1 sec ke liye wait kara dega/ ye normal setTimeout se nhi ho pata promise se hojayega with fn ko async banakar
// async function sleeps(){ 
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(35)
//         },1000);
//     })
// }
let sleeps = async ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(45)
        }, 1000);
    })
}

// hum aise variable me daal ke direct use 2 baar nhi kr sakte
// async function banana padega
    // let a = await sleeps()     
    // console.log(a)
    // let b = await sleeps()
    // console.log(b)

// now async function used to call
(async function main(){
    let a = await sleeps()     
    console.log(a);
    let b = await sleeps()
    console.log(b);
})()


// how to extract items from array
let [x,y, ...rest] = [1,3,5,7,9]
console.log(x,y,...rest);     // 1 3 [5,7,9]
let [p1,q1] = [1,3,5,7,9]
console.log(p1,q1);     // 1 3


// how to extract some items from objects
    let obj = {
        a:11,
        b:22,
        c:33
    }
    let {a,c} = obj      // it get value from object
    console.log(a,c);    // 11 33

        let arr = [1,4,6]
        console.log(sum(arr[0], arr[1], arr[2]))    // here we call the sum function
        console.log(sum(...arr))    //  ...arr represents all the values of arr (array), here we call the sum function
        // console.log(3+2);   // 5
        


function sum(a,b,c){
    return a+b+c
}


// function var se ho ya const se uper define karke niche use karna hoga
// function declaration ke niche hi chalega




 var a1 = 6;  // this declared late , let/const show -> error  , var show -> undefine
