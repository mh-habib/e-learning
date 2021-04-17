import React from 'react';
import './Navbar.css';
import logo from './../../../images/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=" container d-sm-flex d-block text-center bd-highlight pt-4">
            <div className="p-2 flex-grow-1 bd-highlight">
                <img src={logo} className="title-logo float-sm-left" alt="logo" />
            </div>

            <nav className="nav">
                <Link to="/home" className="nav-link active" href="#">Home </Link>
                <Link to="/bookingList" className="nav-link" >Order</Link>
                <Link to="/dashboard" className="nav-link" >Admin</Link>
                <a className="nav-link disabled" href="#">Deals</a>
            </nav>


            <Link to="/login"><button className="btn btn-primary px-4">Login</button></Link>
        </div>
    );
};

export default Navbar;