import React, { useContext } from 'react';
import './ServiceDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';

const ServiceDetail = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { _id, courseImg, courseName, courseTeacher, courseDuration, coursePrice } = props.course;
    const history = useHistory();
    const handleBookCourse = (cId, cName, cPrice) => {
        const productWithInfo = { ...loggedInUser, cId, cName, cPrice }
        setLoggedInUser(productWithInfo)
        history.push('/book');
    }
    return (
        
        <div className="card col-md-4 col-lg-3 col-sm-5 m-3 text-center shadow">
            <div className="inner">
                <img src={courseImg} className="card-img-top img-size" alt="..." />
            </div>
            
            <div className="card-body">
                <h4 className="card-title">{courseName}</h4>
                <h5>{courseTeacher}</h5>
                <h6>By</h6>
                <h5>{courseDuration}</h5>
            </div>
            <div className=" d-flex justify-content-between card-footer bg-white text-center border-0 pb-3">
                <strong>$ {coursePrice}</strong>
                <button onClick={() => handleBookCourse(_id, courseName, coursePrice)} className="btn btn-primary btn-sm"> Book Now <FontAwesomeIcon icon={faShoppingCart} /> </button>
            </div>
        </div>

    );
};

export default ServiceDetail;