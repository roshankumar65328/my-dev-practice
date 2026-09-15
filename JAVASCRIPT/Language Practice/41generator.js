// Generators
// execution ko kisi step par pause kar sakte hai, 
// next continue kab karna hai wo bhi kar sakte hai by generator

function* printNums(){    // fn declaration par (function*) (star) is must
    console.log("started, pehle yield tak chal chuka");
    yield 1;
    console.log("dusre yield tak chal chuka");
    yield 2;
    console.log("tisre yield tak chal chuka");
    yield 3;
}
const ans = printNums();    // generator function ko call karne par, ye turant execute nhi hoga, ye ek generator object dega, jisme next() method hota hai, jiske through hum generator function ke andar ke code ko step by step execute kar sakte hai
 ans.next();   // 1st ye pehle yield tak chalega, jitne baar ans.next() lagega 1-1 karke next yield tak chalta jayega
 ans.next();   // 2nd ye dusre yield tak chalega, jitne baar ans.next() lagega 1-1 karke next yield tak chalta jayega
 ans.next();   // 3rd ye tisre yield tak chalega, jitne baar ans.next() lagega 1-1 karke next yield tak chalta jayega
console.log(ans.next());     // ye 4th next() hai, yield value to hai nhi,to ye hame ek object dega jisme   { value: undefined , done: true } 
// ans.next().value , yield ki value dega
console.log(ans.next().value);   // ye yield ki value dhundhega nhi milegi "undefined"


// numbers from generator print every next value when we command it
function* allNums (){
    for(var i = 1;i<11; i++){
        yield i;
    }
}
const num = allNums();

console.log(num.next().value)
console.log(num.next().value)
console.log(num.next().value)
console.log(num.next().value)
console.log(num.next().value)