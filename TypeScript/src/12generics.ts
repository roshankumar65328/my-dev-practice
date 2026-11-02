function wrapInArray <T> (item: T): T[] {     // yahan TypeScript ka Generics (<T>) concept use kar rahe hain. Generics ka main purpose hai ek hi function ko different data types ke saath reuse karna, bina any use kiye.
    return [item]
}

console.log(wrapInArray("masala"));
console.log(wrapInArray(23));
console.log(wrapInArray({flavour: "Ginger"}));

function pair <A, B> (a: A, b: B): [A, B] {
    return [a,b];
}

console.log(pair("masala", "Chai"));
console.log(pair("masala", 20));
console.log(pair("masala", {flavour: "Ginger"}));


interface Box <T> {
    content: T
}

const numberBox: Box <number> = {content: 10}
console.log(numberBox);
const numbercup: Box <string> = {content: "small"}
console.log(numbercup);


interface ApiPromise <T> {
    status: number,
    data: T
}

const res: ApiPromise < {flavour: string} > = {
    status: 200,
    data: { flavour: "masala" }
}
console.log(res);