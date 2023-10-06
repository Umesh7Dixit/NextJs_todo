// .env
// // BASE_URL=http://localhost:3000



// helper/httphelper
// import axios from 'axios'

// export const httpAxios = axios.create({
//     baseURL: process.env.BASE_URL,
// })





// server API call


import { httpAxios } from "@/helper/httpHelper";

export async function addTask(task){

   const result = await httpAxios.post("/api/tasks",task).then((response) => response.data) ;

   return result;
}











