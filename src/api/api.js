import axios from "axios";
// export const getUrlInstanse = () =>{
//    return axios.create({
//         baseURL: 'http://localhost:3001',
//         headers :{
//             API_KEY : 'skdchiyefnlvc'
//         }
//     })

// }


export const getUrlInstanse = () =>{
    return axios.create({
         baseURL: 'https://twitterapi.liara.run/api',
         headers :{
             API_KEY : 'skdchiyefnlvc'
         }
     })
 
 
 }
 export const getUrlInstansePrivate = () =>{
    return axios.create({
         baseURL: 'https://twitterapi.liara.run/api',
         headers :{
             "x-auth-token" : localStorage.getItem('x-auth-token')
         }
     })
 
 
 }


