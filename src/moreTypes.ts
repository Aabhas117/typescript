let response:any = "42";
let numericLength:number = (response as string).length
// force full assertion like as string .
type Book = {
    name : string
}

let bookString = '{"name": "who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book
// in local storage then it come as json format
console.log(bookObject);

const inputElement = document.getElementById("username") as HTMLInputElement
//for safety guards.

let value:any 
value = "chai"
value = [1,3,4]
value = 2.5
value.toUpperCase()

let newValue: unknown
newValue = "chai"
newValue = [1,2,3]
newValue = 2.4
if(typeof newValue === "string"){
    newValue.toUpperCase();
}



try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("Errro", error);
}

const data:unknown = "chai aur code"
const strData: string = data as string


type Role = "admin" | "user"| "superadmin";
function redirectBasedOnRole(role:Role): void{
    if(role === "admin"){
        console.log("Redirecting to admin dashboard");
        return 
    }
     if(role === "user"){
        console.log("Redirecting to user dashboard");
        return 
}
 role;
}


function neverReturn():never{
    while(true){

    }
}
