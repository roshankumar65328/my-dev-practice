// let obj = {
//     a:1,
//     b:"Harry"
// }
// console.log(obj);

// let animal ={
//     eats: true,
// }

// let rabbit = {
//     jumps:true,
// }

// javascript me prototype 1 another object hota hai
// rabbit.__proto__ = animal;   // ab rabbit me animal object ki sabhi property aa gyi, it will true (rabbit.eats) in console


// Object ki property (key) me aur value me kaafi tarah ki cheezein de sakte ho.
// Key (property name)
// Key generally symbol ya string hoti hai (dhayan rahe symbol ya string )

// let obj = {
//     name: "Noni",
//     age: 20,
//     "full name": "Noni Kumar"
// };

// Access:
// console.log(obj.name);
// console.log(obj["full name"]);

// Value me kya de sakte hain?
// 1. Number
// let obj = {
//     age: 20
// };

// 2. String
// let obj = {
//     name: "Noni"
// };

// 3. Boolean
// let obj = {
//     isStudent: true
// };

// 4. Array
// let obj = {
//     hobbies: ["coding", "cricket"]
// };

// 5. Object
// let obj = {
//     address: {
//         city: "Delhi",
//         pin: 110001
//     }
// };

// 6. Function (method)
// let obj = {
//     greet: function () {
//         console.log("Hello");
//     }
// };

// obj.greet();


// Shortcut:
// let obj = {
//     greet() {
//         console.log("Hello");
//     }
// };

// 7. null
// let obj = {
//     data: null
// };

// 8. undefined
// let obj = {
//     data: undefined
// };

// 9. Symbol
// let obj = {
//     id: Symbol("user")
// };

// 10. BigInt
// let obj = {
//     bigNum: 12345678901234567890n
// };




class Animal{
    constructor(name){      // constructor means class creation ke time hum name denge
        this.name = name    //class me pehle element name hoga jo pass kiya hoga
        console.log('object is created...');
    }

    eats(){
        console.log('kha raha hu');
    }
    jumps(){
        console.log('khodna aata hai tujhe ??');
    }
}

class Lion extends Animal{    // animal ki sab property lion me hogi
    constructor(name){
        super(name)    // lion class me bhi name diya h hamne,extend bhi ki h class to super ko call karna hoga name ke sath to animal ka constructor bhi chal jayega
        console.log('object is created & he is a lion...');   
    }

        eats(){
            super.eats()   // ye inherit wala data dega 
            console.log('roar!! i am eating ...');  // ye abhi wala data dega
    }
}

let a = new Animal("bunny")
console.log(a);

let l = new Lion("shera")
console.log(l);
l.eats();

// write on console
// l instanceof Lion        // true
// l instanceOf Animal      // true


// let i = {
//     a : 1,
//     b : 2,
//     c : 3
// }

// let j = {
//     d : 4,
//     e :5
// }
// i.__proto__ = j;
// console.log(i.d);

// class Animal1 {
//     constructor(name, age, bread){
//         this.name = name;
//         this.age = age;
//         this.bread = bread;
//     }
//     eats(){
//         console.log("animal eats");
//     }

// }

// class londonDog extends Animal1 {
//     constructor(name, age , bread){
//         super(name,age,bread);
//     }
//     lonEat(){
//         super.eats();
//         console.log("london special eats");; 
//     }
//     lonJump(){
//         console.log("london special jump");; 
//     }
// }
// let dog = new Animal1("puppy1", 12,"german");
// console.log(dog);

// let lonDog = new londonDog("luci", 15, "chicago")
// console.log(lonDog);
// lonDog.lonEat();

