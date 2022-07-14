import axios from "axios";
// const axios =require('axios')
export const getUrlInstanse = () =>{
   return axios.create({
        baseURL: 'http://localhost:3000',
        headers :{
            API_KEY : 'skdchiyefnlvc'
        }
    })


}
// export const getUrlInstanse = () =>{
//     return axios.create({
//          baseURL: 'https://twitterapi.liara.run/api',
//          headers :{
//              API_KEY : 'skdchiyefnlvc'
//          }
//      })
 
 
//  }


