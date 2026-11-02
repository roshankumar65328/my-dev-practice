// INTERFACE IN TYPESCRIPT
// Interface ek blueprint/contract hai jo object ya class ka structure define karta hai.
// Ye batata hai ki kaun-si properties aur methods hone chahiye.
// Object ke saath type checking aur class ke saath 'implements' use hota hai.
// Interface code mein consistency aur abstraction maintain karta hai.
// Interface sirf structure define karta hai, implementation nahi.
// 'extends' se interface ko extend ke liye aur 'implements' se class mein apply kar sakte hain.

interface Chai {
    flavour: string;
    price: number;
    milk?: boolean;
}

const masala: Chai = {
    flavour: "masala",
    price: 30
}
console.log(masala);


interface Shop {
    readonly id: number;
    name: string;
}

const s: Shop = { id: 1, name: "my caffe"}
s.name = "my coffee"
console.log(s.name);
// s.id = 2;   // it will not allow readonly like this


interface DiscountCalculator {
    (price: number): number
}

const apply50: DiscountCalculator = (p) => p * 0.5
console.log(apply50(100));


interface TeaMachine {
    start(): void;
    stop(): void;
}

const machine: TeaMachine = {
    start(){
        console.log("start");
    },
    stop(){
        console.log("stop");
    }
}
machine.start()
machine.stop()


interface ChaiRating {      
    [flavour: string]: number     // TypeScript ka Index Signature concept use kar rahe hain. Iska use tab hota hai jab object ki properties ke naam pehle se fixed nahi hote
}

const rating: ChaiRating = {
    masala: 4.5,
    ginger: 4.5,
}
console.log(rating);


interface User {
    name: string
}
interface User {
    age: number
}

const u1: User = {       // uper ke 2 different User interface auto merge ho gaye, this is feature, TypeScript ka Declaration Merging concept use kar rahe hain.
    name: "Roshan", 
    age: 20
}
console.log(u1);


interface A {a: string}
interface B {b: string}

interface C extends A, B {}     // Interface Inheritance (extends) ka concept use kar rahe hain, Iska use ek interface ki properties ko doosre interface mein reuse karne ke liye hota hai, Matlab C ke andar automatically dono ki properties aa jayengi.

const obj: C = {
    a: "Hello",
    b: "Brother"
};

console.log(obj);