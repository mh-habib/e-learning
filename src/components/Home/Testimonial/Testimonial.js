import React from 'react';
import './Testimonial.css'

const Testimonial = (props) => {
    const {reviewerName, reviewerMessage, reviewerDesignation, image} = props.review;
    return (
        <div className="card card col-md-4 col-sm-12 card-body card shadow-sm">            
            <div className="d-flex  align-items-center">
                <img className="mx-3 reviewerImage" src={image} alt="" width="60"/>
                <div>
                    <h6 className="text-primary">{reviewerName}</h6>
                    <p className="m-0">{reviewerDesignation}</p>
                </div>
            </div>
            <div className="card-footer">
                <p className="card-text text-center">{reviewerMessage}</p>
            </div>
       </div>
    );
};

export default Testimonial;