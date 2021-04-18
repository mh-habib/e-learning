import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const ourAddress = [
        { name: "Dhanmondi Dhaka-1205", link: "//google.com/map" },
        { name: "Bangladesh", link: "//google.com/map" },

    ]
    const teachers = [
        { name: "Mr. Rozer Henri", link: "/Rozer" },
        { name: "Mr. John Smith", link: "/John" },
        { name: "Mr. Subir Saha", link: "/Subir" },
        { name: "Mr. Alex Marfie", link: "/Alex" }

    ]
    const services = [
        { name: "Emergency Customer Care", link: "/emergency" },
        { name: "Online Courses", link: "/course" },
        { name: "Technical Support", link: "/discussion" },
        { name: "Expert Consultation", link: "/expert" }

    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row justify-content-center text-center py-5">
                    <FooterCol className="col-md-2" key={2} menuTitle="Services" menuItems={services} />
                    <FooterCol className="col-md-2" key={3} menuTitle="Our Resource Person" menuItems={teachers} />
                    <FooterCol className="col-md-2" key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                            <li className="list-inline-item"><a href="//twitter.com"><FontAwesomeIcon className="icon" icon={faTwitter} /></a></li>
                        </ul>

                    </FooterCol>
                    <div className="col-md-2 mt-5 text-center">
                        <h6>Call now</h6>
                        <button className="btn btn-primary">+20229625</button>
                    </div>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;