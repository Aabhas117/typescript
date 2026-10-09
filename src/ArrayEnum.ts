const chaiFlavours:string[] = ["Masala", "Adrak"]
const chaiPrice: number[] = [10,20]

const rating : Array<number> = [4.0, 5.0]

type Chai = {
    name: string;
    price: number
}
const menu: Chai[] = [
    {name: "Masala", price: 20},
    {name: "Adrak", price: 30}
]

//read only array
const cities: readonly string[] =["delhi", "jaipur"]
//method not performed
//cities.push("push")
const table: number[][] = [
    [1,2,3],
    [4,5,6]
]

//TUPLE 
let chaiTuple: [string, number];
chaiTuple = ["Masala", 20]

let userInfo : [string, number, boolean?]
userInfo = ["Aabhas", 20]
userInfo = ["Aabhas", 21, true]

const location : readonly [number, number] = [28.66, 32.22]

const chaiItems: [name: string, price: number] = ["Masala", 24]

//ENUM

enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}
const size = CupSize.LARGE
enum Status {
    PENDING = 100,
    SERVED,//AUTO MATIC VALUE MIL JATI H ->101
    CANCELLED //102
}
enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}
function makeChai(type: ChaiType){
    console.log(`Making: ${type}`)

}

makeChai(ChaiType.GINGER)
// makeChai("masala")

enum RandomENUM {
    ID = 1,
    NAME = "CHAI"
}
const enum Sugar{
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

// const s = Sugar.HIGH

let t:[string, number] = ["chai", 10]
t.push("extra ")
//value can push 