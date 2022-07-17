import { getUrlInstanse, getUrlInstansePrivate } from './api'


export const getMostHashtags = (callback) =>{
        getUrlInstansePrivate().get("/getAllHashTags")
        .then(response=>{
                callback(true , response.data)
        
           }).catch(error=>{
                callback(false , error)

        
           })
        
}