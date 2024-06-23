import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css'; // Import the CSS file

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="footer-left">
                    <img src={process.env.PUBLIC_URL + '/Images/logobik.jpg'} alt="Logo" className="logo" />
                </div>
                <div className="footer-center">
                    <h2>BIK TRADING SERVICE <span>SARL</span></h2>
                </div>
            </div>

            {/* <div className="footer-right">
                <div className="contact-info">
                    <div className="contact-info-item">
                        <FaPhone className="icon" />
                        <div className="contact-info-item-number">
                            <span>+243 997 595 555</span>
                            <span>+243 824 663 434</span>
                        </div>
                    </div>
                    <div className="contact-info-item">
                        <FaEnvelope className="icon" />
                        <div>
                            <span>Info@biktradingservice.com</span>
                            <span>biktradingservice@gmail.com</span>
                        </div>
                    </div>
                    <div className="contact-info-item">
                        <FaMapMarkerAlt className="icon" />
                        <span>45, Route du Golf, Q/ Golf Fina, C/ Lubumbashi</span>
                    </div>
                </div>
            </div> */}
        </footer>
    );
};

export default Footer;
