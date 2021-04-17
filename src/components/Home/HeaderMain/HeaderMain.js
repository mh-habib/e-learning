import React from 'react';
import titleImg from '../../../images/learning.jpg';

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Your Learning <br/> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <button className="btn btn-primary">GET STARTED</button>
            </div>
            <div className="col-md-6">
                <img className="img-fluid rounded" src={titleImg} alt=""/>
            </div>
        </main>
    );
};

export default HeaderMain;