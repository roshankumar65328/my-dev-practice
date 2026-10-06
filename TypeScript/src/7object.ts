const chai = {
    name: "Masala Chai",
    price: 20,
    isHot: true
}

// {
//     name: string;
//     price: number;
//     isHot: boolean
// }

let tea: {
    name: string;
    price: number;
    isHot: boolean;
}
tea = {
    name: "Ginger",
    price: 25,
    isHot: true 
}

type Tea = {
    name: string;
    price: number;
    ingredients: string[];
}

const adrakWaliChai: Tea = {
    name: "Adrak Chai",
    price: 35,
    ingredients: ["ginger", "tea leaves"]
}


type Cup = {size: string};
let smallCup: Cup = {size: "200ml"}

let bigCup = {size: "500ml", material: "steel"}

smallCup = bigCup


type Brew = {brewTime: number}
const coffee = {brewTime: 5, beans: "Arabica"}

const chaiBrew: Brew = coffee;


type User = {
    username: string;
    password: string;
}

const u: User = {
    username: "noni321",
    password: "noni@123"
}


type Item = {name: string, quantity: number}
type Address = {street: string, pin: number}

type Order = {
    id: string;
    items: Item[];
    address: Address
}

type Chai = {
    name: string;
    price: number;
    isHot: boolean
}

const updateChai = (updates: Partial<Chai>) => {
    console.log("updating chai with", updates);
}
updateChai({price: 25})     // partial type single edit
updateChai({isHot: true})   // partial type single edit
updateChai({})   // ye empty object bhi leta hai, ye dhyan rakhna


type NewChaiOrder = {
    name?: string;
    quantity?: number;
}

const placeOrder = (order: Required <NewChaiOrder>) =>{     // Required ka matlab jo type hai uske sabhi variable define karne honge chahe wo variable waha optional hi kyu na ho
    console.log(order);
}

placeOrder({
    name: "Masala Chai",
    quantity: 2
})


type newChai = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[]
}

type BasicChaiInfo = Pick <newChai, "name" | "price">;  // kisi type me se kuch variable ko use karne ke liye

const chaiInfo: BasicChaiInfo = {
    name: "Lemon Tea",
    price: 30
}


type ChaiNew = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string;
};

type PublicChai = Omit <ChaiNew, "secretIngredients">;   // ab PublicChai type ka variable banayenge to "secretIngredients" likhne ki jarurat nahi hai


