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
// module.exports  = getUrlInstanse


