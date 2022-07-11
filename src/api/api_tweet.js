import { getUrlInstanse } from './api'


export const getAllTweets = (callback) =>{
        getUrlInstanse().get("/tweets")
        .then(response=>{
                const data = response.data
                callback(true , data)
        
           }).catch(error=>{
                callback(false , error)

        
           })
        
}

export const addNewTweet = (inputTwitte) =>{
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
            alert('new tweet')
        }).catch(err=>{
            alert('tweet dont send')
        })

}