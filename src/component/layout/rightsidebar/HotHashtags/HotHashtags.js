import React from 'react';

const HotHashtags = ({title}) => {
    return (
        <div className='hot-hashtags'>
            <img src='img/hashtag.png'/>
            <span>{title}</span>
            
        </div>
    );
};

export default HotHashtags;