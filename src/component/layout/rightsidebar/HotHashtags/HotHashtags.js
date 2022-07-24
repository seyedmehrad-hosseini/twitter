import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useGetAlltwitte } from '../../../../context/allTwitteContext';

const HotHashtags = ({title}) => {
    const {getAllTweets_example} = useGetAlltwitte()


    const body ={
                    hashTag :title
    }
    return (
        <div className='hot-hashtags'>
            <img src='img/hashtag.png'/>
            {/* <span>{title}</span> */}
            <Link onClick={()=>

                getAllTweets_example(body)} to= {`most-hashtags/${title}`} >{title}</Link>
            {/* <NavLink style={({isActive})=>{
                return {color: isActive ? "red" : "black"}
                
            }} to= {`most-hashtags/${title}`} >{title}</NavLink> */}
        </div>
    );
};

export default HotHashtags;