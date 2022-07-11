import { getUrlInstanse } from './api'


export const getBestUsers = (callback) =>{
        getUrlInstanse().get("/users")
        .then(response=>{
                callback(true , response.data)
        
           }).catch(error=>{
                callback(false , error)

        
           })
        
}