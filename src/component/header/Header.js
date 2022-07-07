import React from 'react';
import { FaHome } from "react-icons/fa";


const Header = ({name , icon}) => {
    return (
        
            <div className='header'>
                {icon}
                <span>{name}</span>
            </div>
       
    );
};

export default Header;