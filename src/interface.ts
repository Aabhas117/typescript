interface Chai {
    flavour: string
    price: number
    milk?:boolean
}

const masala:Chai = {
    flavour: "masala",
    price: 30
}

interface shop {
    readonly id: number
    name: string
}

const s: shop = {id: 1, name:"chai aur code"}

interface DiscountCalculator {
    (price: number): number
}
const apply50: DiscountCalculator = (p) => p*0.5

interface TeaMachine{
    start(): void;
    stop(): void;
}
const machine: TeaMachine={
    start(){
        console.log("start");
    },
    stop(){
        console.log("stop");
    }
}
//index signature
interface  ChaiRatings {
    [flavour: string]: number
}
const ratings : ChaiRatings = {
    masala: 4.5,
    ginger: 4.5,
}
interface User {
    name: string
}
interface User {
    age: number
}
//interface name agr same h to value const me sari value deni padegi vrna error dega 
const u: User = {
    name: "Aabhas",
    age: 20
}

interface A {a: string}
interface B {b: string}

interface C extends A, B {}

