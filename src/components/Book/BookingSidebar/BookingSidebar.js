import React from 'react';
import { Link } from 'react-router-dom';
import './BookingSidebar.css'
import logo from './../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faSignOutAlt, faHome, faThLarge, faComment } from '@fortawesome/free-solid-svg-icons';

const BookingSidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-12 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li className="mb-5 text-center">
                    <img style={{ height: '25px' }} src={logo} alt="" />
                </li>
                <li>
                    <Link to="/book" className="text-white">
                        <FontAwesomeIcon icon={faCartArrowDown} /> <span>Book</span>
                    </Link>
                </li>
                <li>
                    <Link to="/bookingList" className="text-white" >
                        <FontAwesomeIcon icon={faThLarge} /> <span>All Bookings</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-white">
                        <FontAwesomeIcon icon={faComment} /> <span>Add Review</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>

            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default BookingSidebar;