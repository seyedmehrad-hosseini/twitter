import React,{useState} from 'react';
import { toast } from 'react-toastify';
import { LoginUserAPI } from '../../../../../api/api_LoginRegister';

const Login = () => {
    const [loginUsernameInput, setLoginUsernameInput] = useState('');
    const [loginPassWordInput, setLoginPassWordInput] = useState('');

    const loginUser = () =>{
        
        if(loginUsernameInput !='' && loginPassWordInput != ''){
            LoginUserAPI(loginUsernameInput,loginPassWordInput , (isOk,dataORerror)=>{
                if(isOk){
                    localStorage.setItem("name" , dataORerror.name)
                    localStorage.setItem("username" , dataORerror.username)
                    localStorage.setItem("password" , dataORerror.password)
                    localStorage.setItem("image" , dataORerror.image)
                    localStorage.setItem("x-auth-token" , dataORerror["x-auth-token"])

                    window.location.reload()//for navigate to homepage
                }else{
                    alert(dataORerror)
                }
            })
        }else{
            alert('username or password is empty')
        }
    }
    return (
        <div className='loginBox '>
            <div className='loginRejisterInputs'>
                <span >نام کاربری</span>
                <input  value={loginUsernameInput} onChange={(e)=>setLoginUsernameInput(e.target.value)}/>
            </div>
            <div className='loginRejisterInputs'>
                <span>رمز عبور</span>
                <input type='password' value={loginPassWordInput} onChange={(e)=>setLoginPassWordInput(e.target.value)}/>
            </div>
            <button className='loginRegisterButton' onClick={loginUser}>ورود</button>
        </div>
    );
};

export default Login;