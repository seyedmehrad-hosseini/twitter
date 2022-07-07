import React from 'react';
import BestUsers from './bestusers/BestUsers';
import UserAccount from './useraccount/UserAccount';
import bestUsersData from '../../data';

const LeftSidebar = () => {
    return (
        <div className='left-sidebar'>
            <UserAccount />
            <div className='bestUsers'>
            <span className='title'>
                بهرترین خبرنگارها
            </span>
                {
                    bestUsersData.map((item)=> <BestUsers {...item} />)
                }
            </div>
            
        </div>
    );
};

export default LeftSidebar;