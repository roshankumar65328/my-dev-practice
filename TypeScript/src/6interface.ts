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