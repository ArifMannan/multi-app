import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import About from './About';

const Home = () => {
    return (
        <div>
             
            <h1>This is form another home site</h1>
            <Link to="/">Home</Link>
            <Link to="/about"> About</Link>
            <a href="/main">main</a>
        </div>
    );
};

export default Home;