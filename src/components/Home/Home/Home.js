import React from 'react';
import Testimonials from '../Testimonials/Testimonials';
import Header from '../Header/Header';
import Teachers from '../Teachers/Teachers';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Testimonials></Testimonials>
            <Teachers ></Teachers>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;