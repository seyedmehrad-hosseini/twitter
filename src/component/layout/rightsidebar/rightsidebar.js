import React  from 'react';
import { BrowserRouter, Link,Navbar, NavLink } from 'react-router-dom';
import HotHashtags from './HotHashtags/HotHashtags';

const hashtags =[
        "پرچم_دار_جدید",
        'کرونا_ویروس',
        'ویروس_لامصب',
        'کرفس',
        'دوچرخه',
        'ویروس_لامصب'
]

const RightSidebar = () => {
    


    return (
        <div className='right-sidbar'>
            <div className='title'>
                <img src='img/twitterLogo.png' />
                <Link to="home" className='logo-name'>توییتر فارسی</Link>

            </div>
            
 
              
                    <Link to="most-hashtags" className='hot-hashtags-title'>داغ ترین هشتگ ها</Link>

                
                    

                    
           
            <div>
                {
                    hashtags.map((item) => <HotHashtags title = {item} />)
                }
            </div>
            
            
        </div>
    );
};

export default RightSidebar;