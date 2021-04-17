import React from 'react';

const Testimonial = (props) => {
    const {message, name, designation, img} = props.review;
    return (
        <div className="card shadow-sm">            
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src={img} alt="" width="60"/>
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{designation}</p>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-center">{message}</p>
            </div>
       </div>
    );
};

export default Testimonial;