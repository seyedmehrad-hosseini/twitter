import { getUrlInstanse, getUrlInstansePrivate } from './api'


export const getAllTweets = (body , callback) =>{
        
        getUrlInstansePrivate().post("getAllTweet" ,body )
        .then(response=>{
                const data = response.data
                callback(true , data, callback())
        
           }).catch(error=>{
                callback(false , error)

        
           })
        
}

export const addNewTweet = (newTwitteFormData , callback) =>{
        console.log(newTwitteFormData)
        getUrlInstansePrivate().post('newTweet', newTwitteFormData)
        .then(res=>{
        //     alert('new tweet')
            callback(true,res.message)
        }).catch(err=>{
        //     alert('tweet dont send')
        callback(false,err.message)

        })

}