import React from 'react';
import { Link } from 'react-router-dom';
import { useSetProfile } from '../../../../context/setProfileContext';

const BestUsers = ({name , username , image}) => {
    const {ImagePath} = useSetProfile()
    const localUsername =  localStorage.getItem("username")

    const getImage =()=>{
        if(localUsername == username && ImagePath){
            return ImagePath
        }

        else if(image) {
           return image
        }
        else {
            return'/img/publicProfile.png'
        }
    }
    return (<>
                <span className='divider'></span>
                <Link className='bestUser' to={`twittes-by-users/${name}`} >
                    
                    <img src={getImage()} />
                    <div className='name-username'>
                        <span className='name'>{name}</span>
                        <span className='username'>{username}</span>
                    </div>

                
                </Link>
            </>

    );
};

export default BestUsers;