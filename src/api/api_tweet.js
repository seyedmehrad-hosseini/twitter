import { getUrlInstanse, getUrlInstansePrivate } from './api'


export const getAllTweets = (callback) =>{
        getUrlInstansePrivate().post("getAllTweet")
        .then(response=>{
                const data = response.data
                callback(true , data, callback())
        
           }).catch(error=>{
                callback(false , error)

        
           })
        
}

export const addNewTweet = (inputTwitte , callback) =>{
        const newTweete = {
                id : Math.floor(Math.random()*1000),
                "sender": {
                     "name" : "mehrad",
                     "username" :"@mehi" ,
                     "img_addres" : "/img/userMehrad.jpg"
                   },
                     "text" :  inputTwitte,
                     "likes" : "35"
               
               
               
        }
        getUrlInstanse().post('/tweets', newTweete)
        .then(res=>{
        //     alert('new tweet')
            callback(true,res.message)
        }).catch(err=>{
        //     alert('tweet dont send')
        callback(false,err.message)

        })

}