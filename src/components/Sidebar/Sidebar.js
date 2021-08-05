import React from 'react';
import './Sidebar.css';
import logo from '../../images/logo.png'
import Navbar from '../Navbar/Navbar';
const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="logo-container">
                <img src={logo} alt="" className="img-responsive" />
            </div>
            <div className="navbar">
                <Navbar/>
            </div>
        </div>
    );
};

export default Sidebar;