//axios -> web request ki library ko fatching the data 

import axios from "axios";
interface Todo{
    userId: number;
    id : number;
    title: string;
    completed: boolean;
}
axios.get('https://example.com/data')
.then(response =>{
    console.log(response.data);
})

