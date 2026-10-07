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


enum CupSize {
    SMALL,      // enum ki value capital me hi hote hai generally, aur ye sirf limited options provide karte hai
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE  // ye Cupsize se suggestion dega

enum Status {
    PENDING = 100,
    SERVED,  // 101
    CANCELLED, // 102
}

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}
function makeChai(type: ChaiType){
    console.log(`Making: ${type}`);
}

makeChai(ChaiType.GINGER)
// makeChai("masala")   // we can't do like this


// enum RandomEnum {    // practically enum string hi ho dono taraf / ya number ho dono taraf
//     ID = 1,
//     NAME = "chai"
// }

// const enum Sugars {    // aise bhi kar sakte hai
//     LOW = 1,
//     MEDIUM = 2,
//     HIGH = 3
// }

// const s = Sugars.HIGH


let t: [string, number] = ["chai", 10]
t.push("extra")