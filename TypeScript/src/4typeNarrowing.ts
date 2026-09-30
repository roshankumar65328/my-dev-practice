function getData(yourClass: string | number){
    if(typeof yourClass == 'string'){
        return `your class is ${yourClass}`    // we are confirm if user gives 'Twelfth' then it will execute
    } 
    return `your class is ${yourClass}`     // we are sure if user gives 12, then it will execute
} 

getData("Twelfth");
getData(12);


function showMsg(msg?: string){
    if(msg){
        return `your msg is ${msg}`
    }
    return `the default msg`
}

showMsg("haha !!");
showMsg();


function orderItem(size: 'small' | 'medium' | 'large'){
    if(size === 'small'){
        return `${size} size have to be give`
    }
    if(size === 'medium'){
        return `${size} size have to be give`
    }
    else{
        return `${size} have to be give`
    }
}

orderItem("medium");
orderItem("large");
orderItem("small");


class Human{
    name(){
        return `the name of human is "Roshan" `
    }
}
class Animal{
    name(){
        return `the name of animal is "Puppy" `
    }
}

function name(category: Human | Animal){    // category ke andar Human ka object bhi aa sakta hai aur Animal ka object bhi aa sakta hai.
    if(category instanceof Human){      // "Kya category actually Human class ka object hai?"
        return category.name();
    }else{
        return category.name();  
    }
}

const person = new Human();
name(person);
const puppy = new Animal();
name(puppy);


type multiordertype ={
    type:  string
    sugar: number
}

function isBiscuitOrder(obj: any): obj is multiordertype{   // Agar isBiscuitOrder() true return kare, to TypeScript obj ko multiordertype maan lega.
    return (
        typeof obj === "object" &&
        obj != null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveBiscuit(item: multiordertype | string){
    if(isBiscuitOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }else{
        return `Serving Custom Biscuit ${item}`
    }
}

serveBiscuit({
    type: "Masala",
    sugar: 2
})

serveBiscuit("Chocolate Biscuit")

let elaichai:multiordertype ={
    type: "elaichi",
    sugar: 4
}
serveBiscuit(elaichai);


type MasalaChai = {
    type: "masala"; 
    spiceLevel: number
};
type GingerChai = {
    type: "ginger"; 
    amount: number
};
type ElaichiChai = {
    type: "elaichi"; 
    aroma: number
};

type Chai = MasalaChai | GingerChai | ElaichiChai 

function MakeChai(order: Chai){
    switch (order.type){
        case "masala":
            return `Masala Chai`
            break;
        case "ginger": 
            return `Ginger Chai`
            break;
        case "elaichi":
            return `Elaichi Chai`
            break;
    }
}

MakeChai({
    type: "elaichi",
    aroma: 4
})

const masalawalichai: Chai = {
    type: "masala",
    spiceLevel: 6
}
MakeChai(masalawalichai);



function isStringArray(arr: unknown): arr is string[] {
    return Array.isArray(arr) &&
           arr.every(item => typeof item === "string");
}

const data: unknown = ["Roshan", "Rahul", "Aman"];   // TypeScript ko abhi data = unknown lag raha hai, Chahe actual mein array ho, TypeScript usko automatically string[] nahi maanega.

if (isStringArray(data)) {
    console.log(data);
}

