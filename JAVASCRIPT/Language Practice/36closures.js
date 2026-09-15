// closures  ->  fn return a fn  &  must use parent variable
// ek function jo return kare dusra function, 
// aur parent function ke variable ko use kare
function counter(){
    var count = 0;
    return function (){       // it is return function, it uses the variable that declared in parent function still if parent function executed successfully
        count++;              // acess parent variable | important -> closure me jo value use hoti h wo destroy nhi hoti normal function ki tarah 
        console.log(count);
        
    }
}
var fnc = counter();  // fnc variable, direct (counter) function ke return function ko target karega, ye variable ke ander h to ye fn ko nahi chalayega
fnc();   // output = 1 
fnc();   // output = 2, due to closure, parent variable count ki value destroy nhi hui 




function timer(){
    var a = 12;
    return setTimeout(function(){  // ye 2 second baad chalega, line 27 console ki baat kar rha h, to setTimeout ki default value jo browser me 1,2,3.... hoti , to whi prnt hogi
        console.log(a);
        // resolve();
    },2000) 
}

// async function main(){
var out  = timer()
console.log(out);




// async function newSleep(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve()
//         },2000)
//     })
// }

// async function main(){
//     console.log("start");
//     await newSleep()
//     console.log("end");   
// }
// main()
// 
