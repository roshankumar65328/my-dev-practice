let subscriber: number | string = "1M";    // we can set 2 datatype option for future

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending';    // we can set the limited option for a variable

let airlineSeat: 'aisle' | 'middle' | 'window' = 'aisle'

airlineSeat = 'aisle'    // when we re-define the pre allocated variable, it will shows/suggest the exact options


let orders = ['12', '20', '28', '42'];

let currentOrder: string | undefined;

for(let order of orders){
    if(order === '28'){
        currentOrder = order;
        break;
    }
}

console.log(currentOrder);

