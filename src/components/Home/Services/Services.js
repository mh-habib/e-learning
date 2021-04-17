import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/getCourses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
                <h2>Courses We Provide</h2>
            </div>
            <div className="row justify-content-center py-3 px-3">
                
                    {
                        courses.map(service => <ServiceDetail course={service} key={service._id}></ServiceDetail>)
                    }
                
            </div>
        </section>
    );
};

export default Services;