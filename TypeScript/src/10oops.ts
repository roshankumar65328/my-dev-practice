class Chai {
    flavour: string;
    // price: number 

    // constructor(flavour: string, price: number){
    //     this.flavour = flavour
    //     this.price = price
    // }

    constructor(flavour: string){
        this.flavour = flavour
        console.log(this);
    }
}

// const newChai = new Chai("Ginger", 20)
const newChai = new Chai("Ginger")
newChai.flavour = "masala"
// newChai.price = 20


class Chai1 {
    public flavour: string = "Masala"

    private secretIngredients = "Cardamom"

    reveal(){
        return this.secretIngredients  // this part is ok of access private things
    }

}

const c = new Chai1()
console.log(c.flavour);     // Masala
// console.log(c.secretIngredients);    // TypeScript error dega:


class Shop {
    protected shopName = "Chai Ki Tapri"
}

class Branch extends Shop {
    getName(){
        return this.shopName   // this will work fine
    }
}
let Rajendra_Park = new Branch()
console.log(Rajendra_Park.getName());    // Chai Ki Tapri


class Wallet {
    #balance = 100    // aise bhi private variable declare kr sakte hai

    getBalance(){
        return this.#balance
    }
}
const w = new Wallet()
console.log(w.getBalance());


class Cup {
    readonly capacity: number = 250

    constructor(capacity: number){
        this.capacity = capacity      // readonly property ko hum constructor ke ander change kar sakte hai
    }
}
const Cup1 = new Cup(200)
console.log(Cup1);      //  Cup { capacity: 200 }

class ModernChai {
    private _sugar = 2

    get sugar() {
        return this._sugar
    }

    set sugar(value: number) {
        if(value >5) throw new Error ("too sweet !!")
            this._sugar = value 
    }
}

const modernC = new ModernChai()
modernC.sugar = 3
console.log(modernC.sugar);     // 3


class EkChai {
    static shopName = "Noni Coding Agency"     // bina objects banaye class variable ko access kr sakte hai static variable

    constructor(public flavour: string){}
}
console.log(EkChai.shopName);   // bina objects banaye class variable ko access kr sakte hai static variable


abstract class Drink{
    abstract make(): void 
}

class MyChai extends Drink{     // jo class Drink ko inherit karega usme abstract make() fn milega, jo class extend kar rahi hai usse make() banana hi hoga nahi to error dega
    make(){
        console.log("Brewing Chai");
    }
}
const MyChaiObject = new MyChai()
MyChaiObject.make()


class Heater {
    heat(){
        console.log("Heating Water....");
    }
}

class ChaiMaker {
    constructor(private heater: Heater){}   // composition jo inheritance ke jaise kaam karta hai

    make(){
        this.heater.heat()
    }
}

const heater = new Heater();
const chaiMakerMachine = new ChaiMaker(heater);
chaiMakerMachine.make();