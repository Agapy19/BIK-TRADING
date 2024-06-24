// Footer.js
import './Footer.css';
import { Link, useNavigate } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section company-info">
                    <h4>Bik Trading</h4>
                    <p>45, Route du Golf, </p>
                    <p>Q/ Golf Fina, C/ Lubumbashi</p>
                    <ul className="email-list">
                        <li>Info@biktradingservice.com</li>
                        <li>biktradingservice@gmail.com</li>
                    </ul>
                    <ul className="phone-list">
                        <li>+243 997 595 555</li>
                        <li>+243 824 663 434</li>
                    </ul>
                </div>
                <div className="footer-section social-media">
                    <h4>Follow Us</h4>
                    <a href="https://facebook.com/miningcorp" className="footer-link">Facebook</a>
                    <a href="https://twitter.com/miningcorp" className="footer-link">Twitter</a>
                    <a href="https://linkedin.com/company/miningcorp" className="footer-link">LinkedIn</a>
                </div>
                <div className="footer-section newsletter">
                    <h4>Contact Us</h4>
                    <p>We are here to help you ! Do not hesitate to contact us if you have any questions, comments or if you would like to know more about our services</p>
                    <form>
                        <Link to="/Contact">
                            <button className="footer-button">Contact Us</button>



                        </Link>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Bik Trading Sarl. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
