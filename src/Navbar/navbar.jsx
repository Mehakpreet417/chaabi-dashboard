import React from "react";
import './navbar.css';
import { FaChartBar, FaUsers, FaUser, FaQuestionCircle } from 'react-icons/fa';
import { RiDashboardFill } from 'react-icons/ri';
import { MdComputer } from 'react-icons/md';
import logo from './logo.png';

const Navbar = () => {
    return(
    <div  className="vertical-navbar">
        <div className="logo">
           <img src={logo} alt="Logo" />
        </div>
        <hr className="navbar-divider" />
        <div className="items">
        <div className="navbar-item">
            <RiDashboardFill className="navbar-item-icon" />
            <a href="/">Dashboard</a>
        </div>
        <div className="navbar-item">
            <MdComputer className="navbar-item-icon" />
            <a href="/training">Training</a>
        </div>
        <div className="navbar-item">
            <FaUsers className="navbar-item-icon" />
            <a href="/users">Users</a>
        </div>
        <div className="navbar-item">
            <FaChartBar className="navbar-item-icon" />
            <a href="/analytics">Analytics</a>
        </div>
        <div className="navbar-item">
            <FaUser className="navbar-item-icon" />
            <a href="/account">My Account</a>
        </div>
        <div className="navbar-item">
            <FaQuestionCircle className="navbar-item-icon" />
            <a href="/support">Support</a>
        </div>
        </div>
    </div>
    );
};

export default Navbar;