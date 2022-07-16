import App from "../component/app";
import { getUrlInstanse } from "./api";

export const LoginUserAPI=(username , password ,callback)=>{

    const body ={
        username,
        password
    }
    getUrlInstanse().post('login',body)
    .then(res=>{
        callback(true , res.data)
        console.log(res.data)
    }).catch(err=>{
        callback(false,err.message)
        console.log('eroooooororor')

       
    })
}
export const RejisterUserAPI=( image,name, username , password,repeatpassword,callback)=>{

    const body ={
        image,
        name,
        username,
        repeatpassword,
        password
    }
    getUrlInstanse().post('/register',body)
    .then(res=>{
        callback(true,res.data)
    }).catch(err=>{
        alert('username or password is incurect')
       
    })
}

