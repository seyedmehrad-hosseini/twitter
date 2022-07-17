import React from 'react';
import { Link } from 'react-router-dom';

const BestUsers = ({name , username , image}) => {
    const getImage =()=>{
        if(image) {
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