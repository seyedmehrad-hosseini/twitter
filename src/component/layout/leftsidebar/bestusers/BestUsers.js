import React from 'react';

const BestUsers = ({name , username , img_addres}) => {
    return (<>
                <span className='divider'></span>
                <div className='bestUser' >
                
                <img src={img_addres} />
                <div className='name-username'>
                    <span className='name'>{name}</span>
                    <span className='username'>{username}</span>
                </div>

            
                </div>
            </>

    );
};

export default BestUsers;