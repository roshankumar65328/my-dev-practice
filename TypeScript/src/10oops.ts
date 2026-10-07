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
        return this.secretIngredients  // this park is ok of access private things
    }

}

const c = new Chai1()


class Shop {
    protected shopName = "Chai Corner"
}

class Branch extends Shop {
    getName(){
        return this.shopName   // this will work fine
    }
}


class Wallet {
    #balance = 100    // aise bhi private variable declare kr sakte hai

    getBalance(){
        return this.#balance
    }
}
const w = new Wallet()


class Cup {
    readonly capacity: number = 250

    constructor(capacity: number){
        this.capacity = capacity
    }
}


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


class EkChai {
    static shopName = "Noni Coding Agency"

    constructor(public flavour: string){}
}
console.log(EkChai.shopName);   // bina objects banaye class variable ko access kr sakte hai static variable


abstract class Drink{
    abstract make(): void 
}

class MyChai extends Drink{
    make(){
        console.log("Brewing Chai");
    }
}


class Heater {
    heat(){}
}

class ChaiMaker {
    constructor(private heater: Heater){}   // composition jo inheritance ke jaise kaam karta hai

    make(){
        this.heater.heat
    }
}