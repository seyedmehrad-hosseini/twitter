import React from 'react';
import { Link } from 'react-router-dom';

const BestUsers = ({name , username , img_addres}) => {
    return (<>
                <span className='divider'></span>
                <Link className='bestUser' to={`twittes-by-users/${name}`} >
                    
                    <img src={img_addres} />
                    <div className='name-username'>
                        <span className='name'>{name}</span>
                        <span className='username'>{username}</span>
                    </div>

                
                </Link>
            </>

    );
};

export default BestUsers;