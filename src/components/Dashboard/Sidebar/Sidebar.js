import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faHome, faThLarge, faThList, faUsersCog } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isDoctor, setIsDoctor] = useState(false);

    useEffect(() => {
        fetch('https://salty-plateau-71286.herokuapp.com/isDoctor', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data));
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-12 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faThList} /> <span>Order List</span>
                    </Link>
                </li>
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