import React from 'react';
import { FaFileImage } from "react-icons/fa";
import bestUsersData from '../../../../data';
import Header from '../../../../header/Header';
import TwittesList from '../twitteslist/TwittesList';
import { FaHome } from "react-icons/fa";

const HomePage = () => {
    return (
        <div className='homePage'>
            <Header name={"خانه"} icon={<FaHome/>} />
            <div className="do-tweet">
                <img src='img/userMehrad.jpg'/>
                <textarea className='twitte-input' placeholder='توییت کن ...'>

                </textarea>
                <div className='twitte-improtImg'>
                    <div className='importImg'>
                        <FaFileImage />
                    </div>
                    <button>
                            توییت
                    </button>
                </div>
            </div>
            <div className='twittes'>
                {
                    bestUsersData.map(item => <TwittesList {...item}/>)
                }
            </div>
        </div>
    );
};

export default HomePage;