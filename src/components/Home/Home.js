import React from 'react';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import './Home.css'
const Home = () => {
    return (
        <div className="home-container">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="main-part">
                <Main />
            </div>
        </div>
    );
};

export default Home;