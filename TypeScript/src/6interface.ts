type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
};

function makeChai(order: ChaiOrder){
    console.log(order);
}

makeChai({
    type: "ginger",
    sugar: 5,
    strong: true
});

function serveChai(order: ChaiOrder){
    console.log(order);
}
serveChai({
    type: "elaichi",
    sugar: 8,
    strong: false
});


// type TeaRecipe = {
//     water: number;
//     milk: number
// }
// class MasalaChai implements TeaRecipe {  
//     water = 100;
//     milk = 50;
// }

// ye uper wala to chal jayega lekin ye nahi chalega

// type CupSize = "small" | "medium"    
// class Chai implements CupSize {      // Ye error dega. Kyunki implements ko object/class ka structure chahiye, primitive/literal union nahi.
                                        // solution of this is interface
// }


interface CupSize {
    size: "small" | "medium"
}
class Chai implements CupSize {
    size: "small" | "medium" = "medium";
}

// normally dekha jaye to function me hum type use karte hai, aur class me interface use karte hai

// interface Response = {ok: true} | {ok: false}    // interface ke sath '|' ye kabhi nahi aata
// class myRes implements Response{
//     ok: boolean = true;
// }


// type Response = {ok: true} | {ok: false}     // mujhe class ke liye ek fixed object structure do; tumne mujhe OR (|) se multiple possible object structures de diye.   Jo bhi Response structure follow karega, uske paas ok naam ki property honi chahiye, aur uski value boolean honi chahiye
type Response = {ok: boolean}     // ye structured / single object hai accept kar lega
class myRes implements Response{    // MyRes class promise karti hai ki main Response ka contract follow karungi.
    ok: boolean = true;
}


// Example
type Employee = {
    name: string;
    salary: number;
};

class Developer implements Employee {
    name = "Roshan";
    salary = 50000;
}

class Designer implements Employee {
    name = "Rahul";
    salary = 45000;
}


type TeaType = "masala" | "ginger" | "lemon"        // isko literal type bhi kehte hai

function orderChai(t: TeaType){
    console.log(t);
}

type BaseChai = {tealeave: number}
type Extra = {masala: number}

type MasalaChai = BaseChai & Extra 

const cup: MasalaChai = {
    tealeave: 8,
    masala: 8
}

type User = {
    username: string;
    bio?: string;
}

let u1: User = {username: "Roshan"}
let u2: User = {username: "Prateek", bio: "prateek is a pilot"}


type Config = {
    readonly appName: string
    version: number
}

const cfg: Config = {
    appName: "Masterji",
    version: 1
}

// cfg.appName = "it_will_not_allow"   // ye read-only property hai
cfg.version = 1.0


