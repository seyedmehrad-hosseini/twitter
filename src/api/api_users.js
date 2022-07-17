import {  getUrlInstansePrivate } from './api'


export const getBestUsers = (callback) =>{
        getUrlInstansePrivate().get("getAllUser")
        .then(response=>{
                callback(true , response.data)
        
           }).catch(error=>{
                callback(false , error)

        
           })
        
}
