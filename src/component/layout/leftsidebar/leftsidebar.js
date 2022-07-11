import React, { useEffect, useState } from 'react';
import BestUsers from './bestusers/BestUsers';
import UserAccount from './useraccount/UserAccount';
import { Link } from 'react-router-dom';
import { getBestUsers } from '../../../api/api_users';

const LeftSidebar = () => {
    const [bestUsers, setBestUsers] = useState([]);
    useEffect(()=>{
        getBestUsers((isOk , dataOrError )=>{
            if(isOk){
                setBestUsers(dataOrError)
            }else{
                console.log('data of bestUsers notFound')
            }
        })
    },[])
    return (
        <div className='left-sidebar'>
            <UserAccount />
            <div className='bestUsers'>
            <Link to="twittes-by-users" className='title'> بهرترین خبرنگارها</Link>

            {/* <span className='title'>
                بهرترین خبرنگارها
            </span> */}
                {
                    bestUsers.map((item)=> <BestUsers {...item} />)
                }
            </div>
            
        </div>
    );
};

export default LeftSidebar;