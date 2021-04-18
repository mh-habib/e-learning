import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from './../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faHome, faThLarge, faThList, faUsersCog, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [loggedInUser.email])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-12 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li className="mb-5 text-center">
                    <img style={{ height: '25px' }} src={logo} alt="" />
                </li>
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faThList} /> <span>Order List</span>
                    </Link>
                </li>
                {isAdmin && <div>
                    <li>
                        <Link to="/addCourse" className="text-white" >
                            <FontAwesomeIcon icon={faThLarge} /> <span>Add Course</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addAdmin" className="text-white">
                            <FontAwesomeIcon icon={faUsersCog} /> <span>Add Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageServices" className="text-white" >
                            <FontAwesomeIcon icon={faCog} /> <span>Manage Services</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contactMessage" className="text-white">
                            <FontAwesomeIcon icon={faEnvelope} /> <span>Contact Message</span>
                        </Link>
                    </li>
                </div>}
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

export default Sidebar;