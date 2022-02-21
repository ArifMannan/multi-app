import React from 'react';
import { Link } from 'react-router-dom';

const MainHome = () => {
    return (
        <div>
            <h1>This is from  Home site</h1>
            {/* <Link to="/main">Home</Link> */}
            <Link to="/mainAbout"> About</Link>
            <a href="/">another</a>
        </div>
    );
};

export default MainHome;