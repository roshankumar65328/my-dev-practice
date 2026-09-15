// protatypal inheritance
// ek function jo (this) use kr rha ho &
// new keyword se new-new objects bana kr deta ho to
// uss function ko Constructor Function kahenge


function makeHuman(name, age){    // function contain this
    this.name = name;     // (this) is working as new blank object
    this.age = age;
}

const human1 = new makeHuman("Roshan", 21);     // function call with new keyword, blank object
console.log(human1);  // object (name,age)
const human2 = new makeHuman("Prateek", 12);     // function call with new keyword, blank object
console.log(human2);  // object (name,age)


// aisa koi bhi function jisme aap this ka use kare &
// function ko call ke time new ka use kare 
// to new hame ek blank object dega


function students(name,roll_no){
    this.name= name;
    this.roll_no= roll_no;
}

students.prototype.nameOfStudent = function(){     // prototype constructor function ka ek property hai, jisme hum function define kar sakte hai, jo sabhi objects ke liye available hoga
    console.log(this.name);
    
}

let student1 = new students("Roshan",21);  // ek naya object bana
student1.nameOfStudent()    // object me dhundha nhi mila, to prototype me dhundhega waha mil jayega | Roshan
let student2 = new students("Prateek",12);
student2.nameOfStudent()    // object me dhundha nhi mila, to prototype me dhundhega waha mil jayega | Prateek


// Object.setPrototypeOf(object1, object2)  // isse hum object2 ke methods ko object1 me use kar sakte hai, to object1 ke andar object2 ke methods aa jayenge

// __proto__
// Har object internally prototype reference rakhta hai.
// console.log(dog.__proto__)
// But modern/preferred way:
// Object.getPrototypeOf(dog)