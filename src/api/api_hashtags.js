import { getUrlInstanse } from './api'


export const getMostHashtags = (callback) =>{
        getUrlInstanse().get("/hashtags")
        .then(response=>{
                callback(true , response.data)
        
           }).catch(error=>{
                callback(false , error)

        
           })
        
}