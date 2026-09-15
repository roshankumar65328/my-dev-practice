let a = prompt("enter first number")   // prompt se hamesha string aata hai
let b = prompt("enter second number")
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry! this is not allowed")
}

// let sum = a + b   // it will not work bcoz it comes as string
let sum = parseInt(a) + parseInt(b)
// console.log("sum is " + sum);



// function divide(a,b){
//     try{
//         if(b === 0){
//             throw Error("Koi gadbad hui hai");
//         }
//         console.log(a/b);
//     }
//     catch(err){
//         console.error(err);
//     }
// }
// divide(10,2);




function main(){
    let x = 1;
    try{
        console.log('the sum is ', sum*x);
        return true     //function me return ke baad exit ho jata hai but agar niche finally hai to code continue hoga finally tak
    } catch(error){
        console.log('error aa gaya bhai');  
        return false
    }
    finally{
        console.log('files are closed, DB also closed');    // finally matlab, error aaye ya na aaye, ye block chalega hi
    }
}
let c = main()