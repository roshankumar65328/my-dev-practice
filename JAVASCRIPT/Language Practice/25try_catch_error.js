let a = prompt("enter first number")   // prompt se hamesha string aata hai
let b = prompt("enter second number")
// if(isNaN(a) || isNaN(b)){       // isNaN(2) -> false
//     throw SyntaxError("Sorry! this is not allowed")
// }

// // let sum = a + b   // it will not work bcoz it comes as string
// let sum = parseInt(a) + parseInt(b)
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



let sum = Number(a) + Number(b);
console.log(sum);
console.log(typeof sum);

function main(){
    let x = 1;
    try{
        if(Number.isFinite(sum)){       // Number(a) + Number(3) = NaN
            console.log('the calculation is ', sum*x);
            return true     //function me return ke baad exit ho jata hai but agar niche finally hai to code continue hoga finally tak
        }else{
            throw new Error("sum is came NaN from Previous Process !!")
        }
    } catch(error){
        console.log('error aa gaya bhai');  
        return false
    }
    finally{
        console.log('files are closed, DB also closed');    // finally matlab, error aaye ya na aaye, ye block chalega hi
    }
}
let c = main()