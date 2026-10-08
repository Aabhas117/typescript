let subs: number | string = '1M'

let apiRequestStatus: 'pending'| 'success' | 'error' = 'pending'

let airLineSeat: 'aisle' | 'window' | 'middle' = 'aisle'

airLineSeat =  'aisle'

const orders = ['37', '87', '08', '73']

let currentOrder: string | undefined;

for(let order of orders){
    if(order === '37'){
        currentOrder = order
        break;
    }
    currentOrder = "11";
}



console.log(currentOrder);