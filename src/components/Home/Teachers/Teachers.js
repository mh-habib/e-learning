import React from 'react';
import img1 from '../../../images/profile1.png'
import img2 from '../../../images/profile2.png'
import img3 from '../../../images/profile3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare as phone } from '@fortawesome/free-solid-svg-icons';
const Doctors = () => {
    return (        
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Course Teacher</h5>
                <div className="row">
                    <div className="col-md-4 text-center">
                        <img className="img-fluid mb-3" src={img1} alt="" />
                        <h4>Rozer Henri</h4>
                        <p> <FontAwesomeIcon className="text-primary" icon={phone} /> +880-168-959889</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <img className="img-fluid mb-3" src={img2} alt="" />
                        <h4>John Smith</h4>
                        <p> <FontAwesomeIcon className="text-primary" icon={phone} /> +880-175-939548</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <img className="img-fluid mb-3" src={img3} alt="" />
                        <h4>Subir Saha</h4>
                        <p> <FontAwesomeIcon className="text-primary" icon={phone} /> +880-189-543289</p>
                    </div>
                </div>
            </div>
    );
};

export default Doctors;