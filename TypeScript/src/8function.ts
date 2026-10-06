function makeChai(type: string, cups: number){
    console.log(`Making ${cups} cups of ${type}`);
}

makeChai("Masala", 2)


function getChaiPrice(): number {
    return 5;
}


function logChai(): void{   // log-in type ka function jo kuch return nahi karta
    console.log("Chai is ready");
}


// function makeOrder(order: string): string{   // return type string karke 'null' nahi return kar sakte
//     if(!order) return null;
//     return order;
// }
function makeOrder(order: string){
    if(!order) return null;
    return order;
}


// function orderChai(type?: string){    // ye optional wala paraneter end me likhenge agar aur paramerter hai to
// } 


// function orderChai(type: string="Masala"){    // ye bhi as optional hi kaam karega, diya to over-write nahi to default value, ye bhi end me hi likha jata hai
// }


function createChai(order: {
    type: string;
    sugar: number;
    size: "small" | "large"
}): number{
    return 5;
}