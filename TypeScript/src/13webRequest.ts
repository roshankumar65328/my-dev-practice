// we first install axios from terminal -> npm i axios

// general advice / solution of type error type installing some library, install ke sath type ship nahi ho to
// normal install like this 
// npm i library_name

// if it will throw type error then, do like this 
// npm i -D @types/library_name     // library install ke sath types ko bhi install kar lena chahiye

// last option if not work any method
// "library_name.d.ts" create file name at recommand place copy paste recommandation


import axios, {AxiosResponse} from "axios"
// or
// import axios from "axios";
// import type { AxiosResponse } from "axios";

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean
}

// {                       // ye humne dekh liya api pe data kaise hai, aur uper interface bna liya
//     "userId: 1",
//     "id": 1,
//     "title": "delectus aut autum",
//     "completed": false
// }

const fetchData = async () => {
    try {
        const response: AxiosResponse <Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1");     // AxiosResponse Datatype dalenge to response variabloe me suggestion ayenge
        console.log("Todo", response.data);
    } catch (error: any) {
        if(axios.isAxiosError(error)){
            console.log("Axios Error", error.message);
            if(error.response){
                console.log(error.response.status);
            }
        }
    }
}