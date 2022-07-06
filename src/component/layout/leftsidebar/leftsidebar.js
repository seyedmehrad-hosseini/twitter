import React from 'react';
import BestUsers from './bestusers/BestUsers';
import UserAccount from './useraccount/UserAccount';

const bestUsers = [
    {
        name : 'xiaomi',
        username :'@Xiaomi ',
        img_addres : 'img/userXiaomi.png'
    },
    {
        name : 'samsung',
        username :'@Samsung ',
        img_addres : 'img/userSamsung.png'
    },
    {
        name : 'بیل گیتس',
        username :'@BillGates ',
        img_addres : 'img/userBillGates.jpg'
    },
    {
        name : 'مایک تایسون',
        username :'@Mike ',
        img_addres : 'img/userMikeTyson.jpg'
    },
    {
        name : 'بیلی آیلیش',
        username :'@Bili ',
        img_addres : 'img/usrBiliAylish.jpg'
    },
    
]
const LeftSidebar = () => {
    return (
        <div className='left-sidebar'>
            <UserAccount />
            <div className='bestUsers'>
            <span className='title'>
                بهرترین خبرنگارها
            </span>
                {
                    bestUsers.map((item)=> <BestUsers {...item} />)
                }
            </div>
            
        </div>
    );
};

export default LeftSidebar;