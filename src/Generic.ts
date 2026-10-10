function wrapInArray<T>(item : T): T[]{
    return [item]
}

wrapInArray("masala")
wrapInArray(42)
wrapInArray({flavour: "Ginger"})

function pair<P,Q>(p: P, q: Q): [P, Q]{
   return [p, q]
}
pair("masala", 20)
pair("masala", {flavour: "Ginger"})
// generic interface 
interface Box <T> {
    content: T

}

const numberBox: Box<number> = {content: 10}
const numberCup: Box<string> = {content: "10"}

// generic use api response, form states in react 
interface ApiPromise<T>{
    status: number,
    data: T
 }

const res: ApiPromise<{flavour: string}> = {
    status: 200,
    data : {flavour: "masala"}
}