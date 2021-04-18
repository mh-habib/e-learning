import React from 'react';
import { useHistory } from 'react-router';
import titleImg from '../../../images/learning.jpg';

const HeaderMain = () => {
    const history = useHistory();
    const handleStart = () =>{
        
        history.push("/login");
    }
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Your Learning <br/> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <button onClick={handleStart} className="btn btn-primary">GET STARTED</button>
            </div>
            <div className="col-md-6 inner">
                <img className="img-fluid rounded" src={titleImg} alt=""/>
            </div>
        </main>
    );
};

export default HeaderMain;