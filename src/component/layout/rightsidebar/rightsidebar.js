import axios from 'axios';
import React, { useEffect, useState }  from 'react';
import { BrowserRouter, Link,Navbar, NavLink } from 'react-router-dom';
import { getMostHashtags } from '../../../api/api_hashtags';
import HotHashtags from './HotHashtags/HotHashtags';



const RightSidebar = () => {
    
    const [hashtags ,setHashtags] = useState([])
    useEffect(()=>{
            getMostHashtags((isOk, dataOrError)=>{
                if(isOk){
                    setHashtags(dataOrError)
                }else{
                }
            })

           }
 , [])

    return (
        <div className='right-sidbar'>
            <div className='title'>
                <img src='img/twitterLogo.png' />
                <Link to="home" className='logo-name'>توییتر فارسی</Link>

            </div>
            
 
              
                    <Link to="most-hashtags" className='hot-hashtags-title'>داغ ترین هشتگ ها</Link>

                
                    

                    
           
            <div>
                {
                    hashtags.map((item , index) => 
                    index < 5 && <HotHashtags title = {item.text} /> )
                }
            </div>
            
            
        </div>
    );
};

export default RightSidebar;