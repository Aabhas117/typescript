//data aayega or nhi aayega 
// response krega ya nhi 

function makeChai(type: string, cups: number){
    console.log(`Making ${cups} cups of ${type}`);
}

makeChai("Masala", 2)

function getChaiPrice():number{
    return 25
}
//:number  agr hum number nhi bhi use krenge tabhi return 25 automatic typecast kr lega ,, koi error nhi dega 

function makeOrder(order: string){
    if(!order) return null
    return order
}

//logger function
function logChai(): void{
    console.log("Chai is ready");
}
// function orderChai(type?: string){

// }
function orderChai(type: string = "Masala"){
  
}

function  createChai(order: {
    type: string;
    sugar: number;
    size: "small" | "large";
}) :number {
  return 4 //here pass parameter only 
}