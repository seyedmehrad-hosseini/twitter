import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const HotHashtags = ({title}) => {
    return (
        <div className='hot-hashtags'>
            <img src='img/hashtag.png'/>
            {/* <span>{title}</span> */}
            <Link to= {`most-hashtags/${title}`} >{title}</Link>
            {/* <NavLink style={({isActive})=>{
                return {color: isActive ? "red" : "black"}
                
            }} to= {`most-hashtags/${title}`} >{title}</NavLink> */}
        </div>
    );
};

export default HotHashtags;