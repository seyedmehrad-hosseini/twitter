import React from 'react';
import HotHashtags from './HotHashtags/HotHashtags';

const hashtags =[
        "پرچم_دار_جدید",
        'کرونا_ویروس',
        'ویروس_لامصب',
        'پرچم_دار_جدید',
        'کرونا_ویروس',
        'ویروس_لامصب'
]

const RightSidebar = () => {
    return (
        <div className='right-sidbar'>
            <div className='title'>
                <img src='img/twitterLogo.png' />
                <span>توییتر فارسی</span>
            </div>
            <span className='hot-hashtags-title'>داغ ترین هشتگ ها</span>
            <div>
                {
                    hashtags.map((item) => <HotHashtags title = {item} />)
                }
            </div>
            
            
        </div>
    );
};

export default RightSidebar;