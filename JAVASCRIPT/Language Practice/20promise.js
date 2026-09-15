console.log("script is running....")

// Promise = Promise of code/fn execution with defines the code/fn is rejected or resolved
// aisa fn jisme ye ho to resolve krna, ye ho to reject krna 
// promise ka code banate hi apne aap chal jata hai to agar, agar jaba chahe tab chale to promise ko function me daal do -_-
// jab tak function ko call nahi karenge promise nhi chalegi

// let promiseDemo = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("promise get resolved");
//         resolve(34)   // resolve promise with resolve value ex:34, iss resolve ke baad hi .then chalega
//     },1000)
// })
// console.log("after promiseDemo run, before promiseDemo setTimout finish"); // promise ke andar ka code turant execute ho jata hai, lekin jo bhi resolve ya reject hoga wo tab hoga jab setTimeout ka time complete ho jayega

// // is promiseDemo ke andar jo code hai wo turant execute ho jayega, lekin jo bhi resolve ya reject hoga wo tab hoga jab setTimeout ka time complete ho jayega
// // ERROR RED HIGHLIGHTED FORMAT ME NA AAYE ISKE LIYE PROMISE KE ERROR KO .then(()=>{})  .catch(()=>{})  KARKE ERROR KO CONSOLE PR NORMAL TEXT KI TARAH PRINT KARA SAKTE HAI
// promiseDemo.then((a=>{
//     console.log(a);
// }))
// promiseDemo.catch((err)=>{
//     console.log(err); 
// })

// direct aise bhi kar satke hai
// .then({})
// .catch({})




let promise1 = new Promise((resolve, reject)=>{
    let a = Math.random()
    if(a<0.2){
        reject("no random number was supporting to you 1");     
    }else{
        setTimeout (()=>{
            console.log("yes i am done with setTimeout 1");
            resolve("Roshan")  
        },300)
    }
})

let promise2 = new Promise((resolve,reject)=>{
    let a = Math.random()
    if(a<0.2){
        reject("no random number was supporting to you 2")
    }else{
        setTimeout(()=>{
            console.log("yes i am done with setTimeout 2");
            resolve("Noni")
        },400)
    }
})

let promise3 = new Promise((resolve,reject)=>{
    let a = Math.random()
    if(a<0.2){
        reject("no random number was supporting to you 3")
    }else{
        setTimeout(()=>{
            console.log('yes i am done with setTimeout 3');
            resolve("khalnayak")
        },500)
    }
})

let promise4 = new Promise((resolve,reject)=>{
    let a = Math.random()
    if(a<0.2){
        reject("no random number was supporting to you 4")
    }else{
        setTimeout(()=>{
            console.log("yes i am done with setTimeout 4");
            resolve("Nino")
        },600)
    }
})  



// ERROR RED HIGHLIGHT FORM ME NA AAYE ISKE LIYE PROMISE KE ERROR KO .then(()=>{})  .catch(()=>{})  KARKE ERROR KO CONSOLE PR NORMAL TEXT KI TARAH PRINT KARA SAKTE HAI

// Promise.all me sab promise ke resolve ka array milega
// let p = Promise.all([promise1,promise2,promise3,promise4])   // sab promise ek-ek karke check honge, Promise.all jab saare promise resolve honge tabhi array of resolve value array milega
// p.then((a)=>{     // sab success this will execute, setTimeout me jo console h wo console hoga, resolve("") ka array banega
//     console.log(a)
// }).catch(err=>{    // reject wala case run ho jayega, promise1 ka
//     console.log(err);
// })


// isme resolve ya reject kuch bhi ho, .then hi chalega & status and value ka array of object milega
// let p = Promise.allSettled([promise1,promise2,promise3,promise4])
// p.then((a)=>{      // array of object, resolve wale me status:'fulfilled', value:'resolve(value)' , reject wale me status:'rejected', reason:'reject(reason)'
//     console.log(a)
// })


// it races all the promises and won that runs faster & won promise ka resolve/reject value dega
// let promise5 = Promise.race([promise1,promise2,promise3,promise4])
// promise5.then((a)=>{      //after this promise  then
//     console.log(a)
// }).catch((err)=>{    //if error comes then 
//     console.log(err);
// })


// for any promise
// let p = Promise.any([promise1,promise2,promise3,promise4])   // jo pehle resolve hoga uska resolve(value) milegi, and jo resolve nhi hua uska kuch nhi milega, baaki sabhi resolve ka statement milega resolve(value) nahi milegi
// p.then((a)=>{      //after this promise  then
//     console.log(a)   // SAB SOLVE HO GYE TO PEHLE WALE KA RESOLVE TEXT DE DEGA
// }).catch(err=>{    //if error comes then, uss promise ka kuch print nhi hoga
//     console.log(err);
// })


// it tries to show promise is success executed
// let p = Promise.resolve([promise1,promise2,promise3,promise4])
// p.then((a)=>{      //after this promise  then
//     console.log(a)   // ek array to dega hi , jisme solve wale ka promise{fulfilled:resolve("msg")}, reject wale ka rejected
// }).catch(err=>{    //if error comes then, error show with usually red format
//     console.log(err);
// })


// Promise.resolve()  ->  ek resolve promise return karega
// Promise.reject()   ->  ek reject promise return karega

// function checkAge(age){
//     if(age >=18 ){
//         return Promise.resolve("Allowed")
//     }else{
//         return Promise.reject("Not Allowed")
//     }
// }