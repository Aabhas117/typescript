const chai = {
    name: "masala chai",
    price: 20,
    isHot: true
}

// {
//     name: string;
//     price: number;
//     isHot: boolean
// }


let tea : {
    name: string,
    price: number,
    isHot: boolean
}

tea = {
    name: "Ginger Tea",
    price: 30,
    isHot: true
}
let Tea: {
    name: string,
    price: number,
    ingredients: string[]
}

const AdrakChai: Tea = {
    name: "adrak chai",
    price: 30,
    ingredients: ["ginger", "tea leaves"]
}

type Cup = {size: string};
let smallCup: Cup = {size: "200ml"}

let bigCup = {size: "500ml", material: "steel"}
//extra value add because of typescript is prone ,, that's why can't create problem 
smallCup = bigCup

type Brew = {brewTime: number}
const coffee = {brewTime: 5, beans: "Arabica"}
const chaiBrew: Brew = coffee


type User = {
    username: string;
    password: string
}

const u: User = {
    username: "chaicode",
    password: "1234"
    //password dena compulsory
}

type Item = {name: string, quantity: number}
type Address = {street: string, pin: number}

type Order = {
    id: string;
    items: Item[];
    address: Address[];
}

type Coffee ={
    name: string;
    price: number;
    isHot: boolean
}
const updateCoffee = (updates: Partial<Coffee>) =>{
    console.log("updating coffee with ", updates);
}
updateCoffee({price: 40})
updateCoffee({isHot: false})
updateCoffee({})


type ChaiOrder = {
    name?: string;
    // ? ->      means optional 
    quantity?:number
}

const placeOrder = (order: Required<ChaiOrder>) =>{
  console.log(order);
}

placeOrder({
    name: "Masala Chai",
    quantity: 3
})

type Chai = {
    name: string,
    price: number,
    isHot: boolean,
    ingredients: string[],
}

type BasicChaiInfo = Pick<Chai, "name" | "price">;

const chaiInfo:  BasicChaiInfo = {
    name: "lemon chai",
    price: 20
}

type NewChai =  {
    name: string,
    price: number,
    isHot: boolean,
    secretIngredients: string,
};

type PubliChai = Omit <Chai, "secretIngredients">;
//omit like some secret ingredients which is you want to show in public area 