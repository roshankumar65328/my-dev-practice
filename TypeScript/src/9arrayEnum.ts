const chaiFlavours: string[] = ["Masala", "Adrak"];
const chaiPrice: number[] = [10, 20];

const rating: Array<number> = [4.5, 5.0];

type Chai = {
    name: string;
    price: number
}
const menu: Chai[] = [
    {name: "Masala", price: 15},
    {name: "Adrak", price: 25},
]
// menu.push({name: "NewChai", price: 30})

const cities: readonly string[] = ["Delhi", "Jaipur"];
// cities.push("Pune");


const table: number[] [] = [
    [1,2,3],
    [4,5,6]
] 


let chaiTuple: [string, number];
chaiTuple = ["Masala", 20];
// chaiTuple = [20, "Masala"];

let userInfo: [string, number, boolean?];
userInfo = ["Roshan", 100];
userInfo = ["Roshan", 100, true];


const location: readonly [number, number] = [28.66, 32.22];

const chaiItems: [name: string, price: number] = ["Masala", 25];
