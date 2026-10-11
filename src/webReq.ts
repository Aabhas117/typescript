//axios -> web request ki library ko fatching the data 
import axios = require("axios");
import type AxiosResponse = require("axios");
interface Todo{
    userId: number;
    id : number;
    title: string;
    completed: boolean;
}
// axios.get('https://example.com/data')
// .then(response =>{
//     console.log(response.data);
// })

const fetchData = async()=> {
    try {
        const response : AxiosResponse<Todo> = await axios.
        get(
            "https://jsonplaceholder.typicode.com/todos/1"
        );
        // axios generic hote h 
        console.log("Todo", response.data);
    } catch (error) {
        if(axios.isAxiosError(error)){
            console.log("Axios Error", error.message);
            if(error.response){
                console.log(error.response.status);
            }
        }
    }
}

