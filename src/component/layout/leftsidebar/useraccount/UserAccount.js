import React, {useRef , useState} from 'react';
import {uploadUserPhoto} from '../../../../api/api_uploadProfile'
const UserAccount = () => {

    const inputImageFile = useRef()
    const [ImageFile, setImageFile] = useState('');
    const [ImagePath, setImagePath] = useState();
    const logOut = ()=>{
        localStorage.clear()
        window.location.reload()
    }
    console.log(localStorage.getItem("image"))

    const getImage =()=>{
        if(ImagePath){
            return ImagePath
        }

        else if (localStorage.getItem("image")){
            
            return localStorage.getItem("image")
        }else{
            return 'img/publicProfile.png'
        }
    }
    const selectImage = () =>{

        inputImageFile.current.click()

    }
    const handleImageFile=(e)=>{

        setImageFile(e.target.files[0])

        const reader = new FileReader()
        reader.onload=(e)=>{
            setImagePath(e.target.result)

        }
        reader.readAsDataURL(e.target.files[0])

        const formData = new FormData ; 
        formData.append( "image",e.target.files[0])
        uploadUserPhoto(formData,(isOk,dataORerror)=>{
            if(isOk){
                alert('profile changed')
                localStorage.setItem("image" , dataORerror.imagePath)
                console.log(dataORerror)
            }else{
                alert(dataORerror)
            }
        })

    }
    return (
        <div className='userAccount'>

            <img src={getImage()} onClick={selectImage}/>
            <input ref={inputImageFile} type="file" style={{display : "none"}} onChange={handleImageFile}/>
            <span>
                {localStorage.getItem("name")}
            </span>
            <button onClick={logOut} className='logOutButton'>log out</button>
            
        </div>
    );
};

export default UserAccount;