import { getUrlInstansePrivate } from "./api"

export const uploadUserPhoto = ( ImageFile,callback) =>{

    // const body ={
    //     image : ImageFile    
    // }
    console.log(ImageFile)
    getUrlInstansePrivate().post('/uploadUserPhoto',ImageFile)
    .then(res=>{
        callback(true,res.data)
    }).catch(err=>{
        callback(false, err.message)
       
    })

}