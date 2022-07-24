import { getUrlInstansePrivate } from "./api"


export const likeTwittes = (id,callback) =>{
    getUrlInstansePrivate().get(`/likeTweet/${id}`)
    .then(response=>{
            callback(true , response.data)
    
       }).catch(error=>{
            callback(false , error)

    
       })
    
}