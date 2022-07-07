import React from 'react';
import { FaHeart,FaRetweet} from "react-icons/fa";



const TwittesList = ({name , username , img_addres}) => {
    return (
        <div className='new-twitte'>
                <img src={img_addres} />
                <div className='name-username-twitte'>
                    <span className='name'>{name}</span>
                    <span className='username'>{username}</span>
                    <span className='twitte'>
                        بهترین وعده غذایی با اختلاف زیادی صبحانست چون ممکن نیست برای #صبحانه کس
                        خورشت #کرفس درست 
                        بهترین وعده غذایی با اختلاف زیادی صبحانست چون ممکن نیست برای #صبحانه کس
                        خورشت #کرفس درست                        بهترین وعده غذایی با اختلاف زیادی صبحانست چون ممکن نیست برای #صبحانه کس
                        خورشت #کرفس درست 
                        بهترین وعده غذایی با اختلاف زیادی صبحانست چون ممکن نیست برای #صبحانه کس
                        خورشت #کرفس درست
                    </span>
                    <div className='reTwitte-likes'>
                        <span className='like-number'>324</span>
                        <span className='like-icon'>
                            <FaHeart />
                        </span>
                        <span className='reTwitte'>
                            <FaRetweet />
                        </span>

                    </div>
                </div>
            
        </div>
    );
};

export default TwittesList;