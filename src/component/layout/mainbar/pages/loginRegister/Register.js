import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { RejisterUserAPI } from '../../../../../api/api_LoginRegister';

const Register = () => {
    const [registerUsernameInput, setRegisterUsernameInput] = 
    useState({name :'',username : '',password :'' , repeatPassword :''});

    const registerUser =()=>{
        if(registerUsernameInput.name !='' && registerUsernameInput.username !='' &&
         registerUsernameInput.password !='' &&registerUsernameInput.repeatPassword !=''){
            if(registerUsernameInput.password === registerUsernameInput.repeatPassword){
                RejisterUserAPI(registerUsernameInput.name,
                                registerUsernameInput.username,
                                registerUsernameInput.repeatPassword,
                                registerUsernameInput.password,(isOk,dataORerror)=>{
                                    if(isOk){
                                        localStorage.setItem("name" , dataORerror.name)
                                        localStorage.setItem("username" , dataORerror.username)
                                        localStorage.setItem("password" , dataORerror.password)
                                        localStorage.setItem("x-auth-toke" , dataORerror["x-auth-toke"])

                                        window.location.reload()//for navigate to homepage

                                    }else{
                                        alert(dataORerror)

                                    }
                                })
            }

        }else{
            alert('one the fildes is empty')
        }
    }
    return (
        <div className='loginBox '>
            <div className='loginRejisterInputs'>
                <span>نام کامل</span>
                <input value={registerUsernameInput.name} 
                onChange={(e)=>setRegisterUsernameInput({...registerUsernameInput , name : e.target.value})}/>
            </div>
            <div className='loginRejisterInputs'>
                <span>نام کاربری</span>
                <input value={registerUsernameInput.username} 
                onChange={(e)=>setRegisterUsernameInput({...registerUsernameInput,username : e.target.value})}/>
            </div>
            <div className='loginRejisterInputs'>
                <span>رمز عبور</span>
                <input value={registerUsernameInput.password} 
                onChange={(e)=>setRegisterUsernameInput({...registerUsernameInput, password : e.target.value})}/>
            </div>
            <div className='loginRejisterInputs'>
                <span> تکرار رمز عبور</span>
                <input value={registerUsernameInput.repeatPassword} 
                onChange={(e)=>setRegisterUsernameInput({...registerUsernameInput, repeatPassword : e.target.value})}/>
            </div>
            <button className='loginRegisterButton' onClick={registerUser}>ثبت نام</button>

        </div>
    );
};

export default Register;