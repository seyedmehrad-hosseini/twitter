import React from 'react';
import LeftSidebar from './layout/leftsidebar/leftsidebar';
import MainBar from './layout/mainbar/mainbar';
import RightSidebar from './layout/rightsidebar/rightsidebar';

const App = () => {
    return (
        <div className='container'>
            <RightSidebar />
            <MainBar />
            <LeftSidebar />
        </div>
    );
};

export default App;