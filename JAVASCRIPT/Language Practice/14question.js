let a = 5

function factorial(number){
    let arr = Array.from(Array(number+1).keys())   // make the array from o index to last index

    console.log(arr.slice(1,))      
    let c = arr.slice(1,).reduce((a,b)=>{       // a me gaya 1, b me gaya 2
        return a*b         // return calculate hoke gaya a me, then a me gaya calculated value & b me gaya 3, & soo on......
    })
    return console.log(`the factorial of ${a} is ${c}`)     // factorial wala function ye console return kr raha hai
}

factorial(a);


 
let k = [1,2,3,4,5];
facto(k)

function facto(num){
    let c = num.reduce((a,b)=> a*b )
        return console.log(c)
    
}



let a1 = 5
function factorialofnumber(a1){
    let a2 = Array.from(Array(a1+1).keys())
    let fact1 = a2.slice(1,).reduce((a,b)=>{
        return a*b;
    })
    return console.log(fact1)
}
factorialofnumber(a1)




let a3 = 5

function facto5(a3){
    let b3 = Array.from(Array(a3+1).keys())
    let c3 = b3.slice(1,).reduce((a,b)=>{
        return a*b
    })
    return console.log(c3);
}
facto5(a3)

