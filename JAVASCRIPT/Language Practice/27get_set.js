class User {
    constructor(name){
        // invoke the setter
        this.name = name;   // user new obj banayega and constructor name variable set karega, fir set name() chalega kyuki niche set name() function define hai, this.name hi setter ko chalata hai
    }

    get name(){   // getter setup , getter read the value
        return this._name;   //  user.name se hame, argument name mil jayega
    }

    set name(value){    // setter setup, setter assign the value 
        if(value.length<4){
            console.log(value);
            console.log('Name is too short.');
            return;
        }
        this._name = value; 
    }
}

let user = new User("Noni") // user object ban gaya, constructor me this.name = "Noni" gaya, jo setter ko chalayega kyuki let a =  new user(""); karte hi setter chal jayega 
console.log(user.name);    // get() getter chalayega, Noni aayega console me
// user = new User("");   // user declared variable h, Name is too short, for running the setter
// or
user.name = "Doe";      // user object ban chuka h pehle hi, to user.name sidha set name() pe paas jayega, length < 4 hai, to name set nahi hoga, pehle wala hi reh jayega



console.log(user.name);   // getter chala aur purani setted value => Noni ,  ye sab abhi Noni ko hi denge kyuki Doe dene pr length bata rha h, name set hui hi nahi
console.log(user._name);  // getter chala aur purani setted value => Noni ,  _name is the property of user, jisme setter se value set ho rahi h, ye directly access karna chahiye nahi, isliye hum getter setter use karte hai, taki hum control kar sake ki kya value set ho rahi h, aur kya value get ho rahi h


// Getter + Setter Together in Object Literals

// const person = {
//   firstName: "Alice",
//   lastName: "Brown",

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   set fullName(value) {
//     const [first, last] = value.split(" ");
//     this.firstName = first;
//     this.lastName = last;
//   }
// };

// person.fullName = "Bob Marley";
// console.log(person.fullName); // Bob Marley



// Getter & Setter Using in Classes

// class BankAccount {
//   constructor(balance) {
//     this.balance = balance;     // this.balance karte hi setter chal jayega
//   }

//   get balance() {
//     return this._balance;
//   }

//   set balance(amount) {
//     if (amount < 0) {
//       console.log("Invalid amount");
//     } else {
//       this._balance = amount;
//     }
//   }
// }

// const acc = new BankAccount(100);
// acc.balance = 200;
// console.log(acc.balance); // 200